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
let wsApiServer;
let wsJanusServer;


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
        // console.log('Received message on /api/ws:', message.toString());
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
        console.log("收到janus客户端消息： ", message.toString());
        wsJanusServer.send(message, { binary: false });
    });

    ws.on('close', () => {
        console.log('Connection closed on /janus/ws');
    });
    ws.on('error', () => {
        console.log("janus ERROR");
    })
    // 发送欢迎消息
    // initJanusWs();
});
const initWs = () => {

    const ws = new WebSocket("wss://192.168.8.240/api/ws", {
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
    wsApiServer = ws;

    ws.on('open', function open() {
        console.log('api/ws WebSocket connected');
    });
    ws.on('message', function incoming(data) {
        // console.log("收到api/ws消息");
        wsApiClient.send(data, { binary: false });
    });
    ws.on('close', function close() {
        console.log('WebSocket disconnected');
    });
    ws.on('error', function error(err) {
        console.error('WebSocket error:', err);
    });
}

const initJanusWs = () => {
    const ws = new WebSocket("wss://192.168.8.240/janus/ws","janus-protocol", {
        pingInterval: null, // 禁用心跳间隔
        pingTimeout: null, // 禁用心跳超时
        secureOptions: 0,
        protocol: 'janus-protocol',
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
            'Cookie': 'auth_token=eab35f76792af07b0d38b5c37fe56d35b7f0db00251b1eb7b51f1e1933e17cb5',
            'Sec-WebSocket-Key': '+MmrPJWjehr4zF/+vkvGGw==',
            'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
            'Sec-WebSocket-Protocol': 'janus-protocol',
        },
        agent: agentJanus
    })
    wsJanusServer = ws;

    ws.on('open', function open() {
        console.log('JANUS-WEBSOCKET connected');
        wsJanusClient?.send('欢迎使用janus/ws', { binary: false, protocol: 'janus-protocol' });
    });
    ws.on('message', function incoming(data) {
        console.log("收到janus/ws消息");
        wsJanusClient.send(data, { binary: false, protocol: 'janus-protocol' });
    });
    ws.on('close', function close() {
        console.log('WebSocket disconnected');
    });
    ws.on('error', function error(err) {
        console.error('WebSocket error:', err);
    });
}

initJanusWs();

// 启动服务器
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});


wsServer.listen(3002);
