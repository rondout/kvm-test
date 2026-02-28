(() => {
  const logEl = document.getElementById('log');
  const tipsEl = document.getElementById('tips');
  const remoteVideosEl = document.getElementById('remoteVideos');
  const btn = document.getElementById('btnStart');

  function log(...args) {
    const s = args.map(a => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ');
    logEl.textContent += s + '\n';
    logEl.scrollTop = logEl.scrollHeight;
    console.log(...args);
  }

  async function startSession() {
    // btn.disabled = true
    // log('Connecting WebSocket...')

    const wsProto = location.protocol === 'https:' ? 'wss' : 'ws'
    const ws = new WebSocket(`${wsProto}://${location.host}/pion/ws`)
    // ws = ws

    let pc = null
    let rtcConfig
    let pendingCandidates = []


    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'config', flexfecLevel: 20 }))
    }
    ws.onclose = () => { log('WS close'); if (pc) pc.close() }
    ws.onerror = (e) => log('WS error', e)

    ws.onmessage = async (ev) => {
      try {
        const msg = JSON.parse(ev.data)

        // 1) 先拿 ICE 配置
        // 2) 收到 offer 再建 RTCPeerConnection（带上上一步 cfg）
        switch (msg.type) {
          case 'ice-config':
            // 步骤1：接收服务端的 ICE 配置
            rtcConfig = {
              iceServers: msg.iceServers || [],
              iceTransportPolicy: msg.iceTransportPolicy || 'all',
              bundlePolicy: 'max-bundle',
              rtcpMuxPolicy: 'require',
            }
            log('✓ ICE config received:', rtcConfig)
            // log('ICE config received, waiting for offer...')
            break
          case 'candidate':
            // 步骤3：接收服务端的 ICE candidates（Trickle ICE）
            if (msg.candidate) {
              const candidate = {
                candidate: msg.candidate,
                sdpMid: msg.sdpMid,
                sdpMLineIndex: msg.sdpMLineIndex,
              }

              if (pc && pc.remoteDescription) {
                // 如果已经设置了远端描述，立即添加
                try {
                  await pc.addIceCandidate(candidate)
                  log('✓ Added server ICE candidate')
                } catch (e) {
                  log('✗ Error adding candidate:', e)
                }
              } else {
                // 否则先缓存起来
                pendingCandidates.push(candidate)
                log('⊙ Buffered candidate (waiting for remote description)')
              }
            }
            break

          case 'server-ice-complete':
            log('✓ Server ICE gathering complete')
            break
          case 'offer':
            // 步骤2：收到 offer，创建 PeerConnection
            log('✓ Offer received, creating PeerConnection...')

            if (!rtcConfig) {
              log('⚠ No ICE config, using fallback')
              rtcConfig = {
                iceServers: [{ urls: ['stun:stun.l.google.com:19302'] }],
                iceTransportPolicy: 'all',
                bundlePolicy: 'max-bundle',
                rtcpMuxPolicy: 'require',
              }
            }

            const staticConfig = { "iceTransportPolicy": "all", "iceServers": [{ "urls": ["turn:169.197.143.190:53478?transport=tcp", "turn:51.161.198.71:53478?transport=tcp", "turn:23.150.248.245:53478?transport=tcp", "turn:169.197.143.190:53478?transport=udp", "turn:51.161.198.71:53478?transport=udp", "turn:23.150.248.245:53478?transport=udp"], "username": "ad975f70aa6ac65143a11aa2e39cfdff", "credential": "31dfzdxkqzjl7zb" }] }

            pc = new RTCPeerConnection(staticConfig)
            pc = pc

            // === 监听 ICE 状态 ===
            pc.onicecandidateerror = (e) => {
              log('✗ ICE candidate error:', e.errorText || e.errorCode)
            }

            pc.onicegatheringstatechange = () => {
              log(`ICE gathering: ${pc.iceGatheringState}`)
              if (pc.iceGatheringState === 'complete') {
                // 通知服务端客户端 gathering 完成
                ws.send(JSON.stringify({ type: 'client-ice-complete' }))
                log('→ Client ICE gathering complete signal sent')
              }
            }

            pc.oniceconnectionstatechange = () => {
              log(`ICE connection: ${pc.iceConnectionState}`)
              if (pc.iceConnectionState === 'connected') {
                log('✓ Connected! Video streaming...')
              } else if (pc.iceConnectionState === 'failed') {
                log('✗ Connection failed')
              }
            }

            pc.onconnectionstatechange = () => {
              log(`Peer connection: ${pc.connectionState}`)
            }

            // === Trickle ICE: 实时发送客户端 candidates ===
            pc.onicecandidate = (event) => {
              if (event.candidate) {
                // 立即发送每个 candidate 给服务端
                ws.send(JSON.stringify({
                  type: 'candidate',
                  candidate: event.candidate.candidate,
                  sdpMid: event.candidate.sdpMid,
                  sdpMLineIndex: event.candidate.sdpMLineIndex,
                }))
                log('→ Sent ICE candidate to server')
              } else {
                log('✓ Client ICE gathering complete (null candidate)')
              }
            }

            // === 接收视频轨道 ===
            pc.ontrack = (ev) => {
              log('✓ Received track:', ev.track.kind, 'streams=', ev.streams?.length || 0)

              if (ev.track.kind === 'video') {
                const v = document.createElement('video')
                v.autoplay = true
                v.playsInline = true
                v.muted = true
                v.style.background = '#000'
                v.style.width = '325px'
                v.style.aspectRatio = '16 / 9'

                const ms = new MediaStream()
                ms.addTrack(ev.track)
                v.srcObject = ms
                // const remoteVideosEl = document.querySelector('#stream-video').parentElement
                // remoteVideosEl.innerHTML = ''
                document.body.appendChild(v)
                remoteVideosEl.style.zIndex = '99999'
                v.style.marginTop = '100px'

                v.onloadedmetadata = () => log('video loadedmetadata', v.videoWidth, v.videoHeight)
                v.onplaying = () => log('✓ video onplaying')
                v.onerror = () => log('✗ video element error', v.error)

                v.play()
                  .then(() => log('✓ Video playing (play resolved)'))
                  .catch(err => log('✗ Video play error:', err))
              }
              // @ts-ignore
              // window.ev = ev
              // log('ontrack', ev.track.kind, ev)
              // videoEl.value.srcObject = ev.streams[0]
              // onRemoteTrack?.(ev.track)
              // updateInfo()
              // getConnectionType()
            }


            // 设置远端描述
            const offerObj = JSON.parse(atob(msg.sdp))
            await pc.setRemoteDescription(offerObj)
            log('✓ Remote description set')

            // 处理之前收到的 pending candidates
            if (pendingCandidates.length > 0) {
              log(`Adding ${pendingCandidates.length} pending candidates...`)
              for (const candidate of pendingCandidates) {
                try {
                  await pc.addIceCandidate(candidate)
                } catch (e) {
                  log('✗ Error adding pending candidate:', e)
                }
              }
              pendingCandidates = []
            }

            // 创建 answer（不等待 ICE gathering）
            const answer = await pc.createAnswer()
            await pc.setLocalDescription(answer)
            log('✓ Local description set (answer)')

            // 立即发送 answer（Trickle ICE 核心）
            const sdpB64 = btoa(JSON.stringify(pc.localDescription))
            ws.send(JSON.stringify({ type: 'answer', sdp: sdpB64 }))
            log('→ Answer sent (Trickle ICE enabled)')

            log('Answer sent, negotiating ICE...')
            break



        }

      } catch (e) {
        log('onmessage error:', e)
      }
    }
  }

  btn.addEventListener('click', startSession);
})();