const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { WebSocketServer, WebSocket } = require('ws');
const https = require('https');
const { createServer } = require('http');
const fallback = require('express-history-api-fallback');
const path = require('path');

const app = express();

// 静态文件服务
// 👇 这一行是核心
const distPath = path.join(__dirname, 'dist-vue3');

console.log({ distPath });


app.use(express.static(distPath));
// app.use(express.static('dist-vue3'));

// API 代理
app.use('/api', createProxyMiddleware({
    target: 'https://bbs.nansin.top/api',
    secure: false, // 如果目标服务器没有有效的SSL证书，可以禁用SSL验证
    changeOrigin: true,
    logLevel: 'debug', // 启用详细日志
    ws: true,
    // headers: {
    //     referer: 'https://bbs.nansin.top/',
    //     origin: 'https://bbs.nansin.top/'
    // },
    on: {
        proxyReq: (proxyReq, req, res) => {
            console.log('[Proxy] Request:', req.method, req.url, req.headers.referer);
        },
        proxyRes: (proxyRes, req, res) => {
            console.log('[Proxy] Response:', proxyRes.statusCode, req.method, req.url);
            const originCookie = proxyRes.headers['set-cookie'];
            console.log(originCookie);

            if (originCookie) {
                proxyRes.headers['set-cookie'] = originCookie.map(cookie => {
                    const modifiedCookie = cookie.replace(/Domain=([^;]+)/, 'localhost')
                    console.log(modifiedCookie);

                    return modifiedCookie;
                });
            }
        },
    },
}));
app.use(fallback('index.html', { root: distPath }));

// 启动服务器
const PORT = 8082;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});


// wsServer.listen(3002);
