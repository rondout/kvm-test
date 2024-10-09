const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { WebSocketServer, WebSocket } = require('ws');
const https = require('https');
const { createServer } = require('http');

const app = express();

// 静态文件服务
app.use(express.static('web'));

// API 代理
app.use('/', createProxyMiddleware({
    target: 'https://192.168.8.240/',
    secure: false, // 如果目标服务器没有有效的SSL证书，可以禁用SSL验证
    changeOrigin: true,
    logLevel: 'debug' // 启用详细日志
}));

const agent = new https.Agent({
    rejectUnauthorized: false,
})

const agentJanus = new https.Agent({
    rejectUnauthorized: false,
})

let wsApiClient;
let wsJanusClient;
let protocol


const wsServer = createServer()

const wssApiInfo = new WebSocket.Server({ noServer: true });
const wssJanusInfo = new WebSocket.Server({ noServer: true });

// 监听升级事件
wsServer.on('upgrade', (request, socket, head) => {
    const pathname = request.url;

    if (pathname === '/api/ws') {
        wssApiInfo.handleUpgrade(request, socket, head, (ws) => {
            wssApiInfo.emit('connection', ws, request);
        });
    } else if (pathname === '/janus/ws') {
        wssJanusInfo.handleUpgrade(request, socket, head, (ws) => {
            wssJanusInfo.emit('connection', ws, request);
        });
    } else {
        socket.destroy();
    }
});

// 处理 /api/ws 路径的连接
wssApiInfo.on('connection', (ws, request) => {
    wsApiClient = ws;

    ws.on('message', (message) => {
        console.log('Received message on /api/ws:');
        // 处理消息
    });

    ws.on('close', () => {
        console.log('Connection closed on /api/ws');
    });

    // 发送欢迎消息
    initWs();
});

// 处理 /janus/ws 路径的连接
wssJanusInfo.on('connection', (ws, request) => {
    console.log('New connection on /janus/ws:');
    wsJanusClient = ws;

    ws.on('message', (message) => {
        console.log('Received message on /janus/ws:');
        // 处理消息
    });

    ws.on('close', () => {
        console.log('Connection closed on /janus/ws');
    });
    ws.on('error', () => {
        console.log("janus ERROR");
    })
    // 发送欢迎消息
    initJanusWs('/janus/ws', wsJanusClient);
});
const initWs = (addr = '/api/ws') => {

    const ws = new WebSocket("wss://192.168.8.240" + addr, {
        pingInterval: null, // 禁用心跳间隔
        pingTimeout: null, // 禁用心跳超时
        secureOptions: 0,
        headers: {
            'Host': '192.168.8.240',
            'Connection': 'Upgrade',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
            'Upgrade': 'websocket',
            'Origin': 'https://192.168.8.240',
            'Sec-WebSocket-Version': '13',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en,zh;q=0.9,zh-CN;q=0.8',
            'Cookie': 'auth_token=f5846b381e12f0ca4b106fecf9c8a7b4c7c1bf38707ddbda38105b689f0a1dd1',
            'Sec-WebSocket-Key': '2EbPjQuQx0biRy8bglX87g==',
            'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
        },
        agent: agent
    })

    ws.on('open', function open() {
        console.log('WebSocket connected');
    });
    ws.on('message', function incoming(data) {
        console.log("收到janus消息");
        wsApiClient.send(data, { binary: false });
    });
    ws.on('close', function close() {
        console.log('WebSocket disconnected');
    });
    ws.on('error', function error(err) {
        console.error('WebSocket error:', err);
    });
}

const initJanusWs = (addr = '/janus/ws') => {
    const ws = new WebSocket("wss://192.168.8.240" + addr, {
        pingInterval: null, // 禁用心跳间隔
        pingTimeout: null, // 禁用心跳超时
        secureOptions: 0,
        headers: {
            'Host': '192.168.8.240',
            'Connection': 'Upgrade',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
            'Upgrade': 'websocket',
            'Origin': 'https://192.168.8.240',
            'Sec-WebSocket-Version': '13',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en,zh;q=0.9,zh-CN;q=0.8',
            'Cookie': 'auth_token=f5846b381e12f0ca4b106fecf9c8a7b4c7c1bf38707ddbda38105b689f0a1dd1',
            'Sec-WebSocket-Key': '+MmrPJWjehr4zF/+vkvGGw==',
            'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
            'Sec-WebSocket-Protocol': 'janus-protocol',
        },
        agent: agentJanus
    })

    ws.on('open', function open() {
        console.log('WebSocket connected');
    });
    ws.on('message', function incoming(data) {
        wsJanusClient.send(data, { binary: false, protocol: 'janus-protocol' });
    });
    ws.on('close', function close() {
        console.log('WebSocket disconnected');
    });
    ws.on('error', function error(err) {
        console.error('WebSocket error:', err);
    });
}

// WebSocket 代理
// const wss = new WebSocketServer({ port: 3002 });

// wss.on('connection', function connection(ws) {
//     wsClient = ws;
//     console.log(ws);
//     initWs();
// });


// 启动服务器
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});


wsServer.listen(3002);
