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
    btn.disabled = true;
    tipsEl.textContent = 'Connecting WebSocket...';

    const wsProto = location.protocol === 'https:' ? 'wss' : 'ws';
    const ws = new WebSocket(`${wsProto}://${location.host}/pion/ws`);

    let pc = null;
    let rtcCfg = null;
    let pendingCandidates = []; // 存储在 setRemoteDescription 之前收到的 candidates

    ws.onopen = () => {
      log('✓ WebSocket connected');
      tipsEl.textContent = 'WebSocket connected, waiting for ICE config...';

      // 关键：先发第一条 config，让后端别卡住
      ws.send(JSON.stringify({ type: 'config', flexfecLevel: 20 }));
      log('→ Sent config');
    };

    ws.onclose = () => {
      log('✗ WebSocket closed');
      if (pc) pc.close();
      btn.disabled = false;
    };

    ws.onerror = (e) => {
      log('✗ WebSocket error', e);
    };

    ws.onmessage = async (ev) => {
      try {
        const msg = JSON.parse(ev.data);
        log('← Received:', msg.type);

        switch (msg.type) {
          case 'ice-config':
            // 步骤1：接收服务端的 ICE 配置
            rtcCfg = {
              iceServers: msg.iceServers || [],
              iceTransportPolicy: msg.iceTransportPolicy || 'all',
              bundlePolicy: 'max-bundle',
              rtcpMuxPolicy: 'require'
            };
            log('✓ ICE config received:', rtcCfg);
            tipsEl.textContent = 'ICE config received, waiting for offer...';
            break;

          case 'offer':
            // 步骤2：收到 offer，创建 PeerConnection
            log('✓ Offer received, creating PeerConnection...');
            
            if (!rtcCfg) {
              log('⚠ No ICE config, using fallback');
              rtcCfg = {
                iceServers: [{ urls: ['stun:stun.l.google.com:19302'] }],
                iceTransportPolicy: 'all',
                bundlePolicy: 'max-bundle',
                rtcpMuxPolicy: 'require'
              };
            }

            pc = new RTCPeerConnection(rtcCfg);

            // === 监听 ICE 状态 ===
            pc.onicecandidateerror = (e) => {
              log('✗ ICE candidate error:', e.errorText || e.errorCode);
            };

            pc.onicegatheringstatechange = () => {
              log(`ICE gathering: ${pc.iceGatheringState}`);
              if (pc.iceGatheringState === 'complete') {
                // 通知服务端客户端 gathering 完成
                ws.send(JSON.stringify({ type: 'client-ice-complete' }));
                log('→ Client ICE gathering complete signal sent');
              }
            };

            pc.oniceconnectionstatechange = () => {
              log(`ICE connection: ${pc.iceConnectionState}`);
              if (pc.iceConnectionState === 'connected') {
                tipsEl.textContent = '✓ Connected! Video streaming...';
              } else if (pc.iceConnectionState === 'failed') {
                tipsEl.textContent = '✗ Connection failed';
              }
            };

            pc.onconnectionstatechange = () => {
              log(`Peer connection: ${pc.connectionState}`);
            };

            // === Trickle ICE: 实时发送客户端 candidates ===
            pc.onicecandidate = (event) => {
              if (event.candidate) {
                // 立即发送每个 candidate 给服务端
                ws.send(JSON.stringify({
                  type: 'candidate',
                  candidate: event.candidate.candidate,
                  sdpMid: event.candidate.sdpMid,
                  sdpMLineIndex: event.candidate.sdpMLineIndex
                }));
                log('→ Sent ICE candidate to server');
              } else {
                log('✓ Client ICE gathering complete (null candidate)');
              }
            };

            // === 接收视频轨道 ===
            pc.ontrack = (ev) => {
              log('✓ Received track:', ev.track.kind, 'streams=', ev.streams?.length || 0);
            
              if (ev.track.kind === 'video') {
                const v = document.createElement('video');
                v.autoplay = true;
                v.playsInline = true;
                v.muted = true;
                v.style.background = '#000';
                v.style.width = '75vw';
            
                const ms = new MediaStream();
                ms.addTrack(ev.track);
                v.srcObject = ms;
            
                remoteVideosEl.innerHTML = '';
                remoteVideosEl.appendChild(v);
            
                v.onloadedmetadata = () => log('video loadedmetadata', v.videoWidth, v.videoHeight);
                v.onplaying = () => log('✓ video onplaying');
                v.onerror = () => log('✗ video element error', v.error);
            
                v.play()
                  .then(() => log('✓ Video playing (play resolved)'))
                  .catch(err => log('✗ Video play error:', err));
              }
            };
            

            // 设置远端描述
            const offerObj = JSON.parse(atob(msg.sdp));
            await pc.setRemoteDescription(offerObj);
            log('✓ Remote description set');

            // 处理之前收到的 pending candidates
            if (pendingCandidates.length > 0) {
              log(`Adding ${pendingCandidates.length} pending candidates...`);
              for (const candidate of pendingCandidates) {
                try {
                  await pc.addIceCandidate(candidate);
                } catch (e) {
                  log('✗ Error adding pending candidate:', e);
                }
              }
              pendingCandidates = [];
            }

            // 创建 answer（不等待 ICE gathering）
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            log('✓ Local description set (answer)');

            // 立即发送 answer（Trickle ICE 核心）
            const sdpB64 = btoa(JSON.stringify(pc.localDescription));
            ws.send(JSON.stringify({ type: 'answer', sdp: sdpB64 }));
            log('→ Answer sent (Trickle ICE enabled)');
            
            tipsEl.textContent = 'Answer sent, negotiating ICE...';
            break;

          case 'candidate':
            // 步骤3：接收服务端的 ICE candidates（Trickle ICE）
            if (msg.candidate) {
              const candidate = {
                candidate: msg.candidate,
                sdpMid: msg.sdpMid,
                sdpMLineIndex: msg.sdpMLineIndex
              };

              if (pc && pc.remoteDescription) {
                // 如果已经设置了远端描述，立即添加
                try {
                  await pc.addIceCandidate(candidate);
                  log('✓ Added server ICE candidate');
                } catch (e) {
                  log('✗ Error adding candidate:', e);
                }
              } else {
                // 否则先缓存起来
                pendingCandidates.push(candidate);
                log('⊙ Buffered candidate (waiting for remote description)');
              }
            }
            break;

          case 'server-ice-complete':
            log('✓ Server ICE gathering complete');
            break;

          default:
            log('? Unknown message type:', msg.type);
        }
      } catch (e) {
        log('✗ Message handling error:', e.message);
        console.error(e);
      }
    };
  }

  btn.addEventListener('click', startSession);
})();