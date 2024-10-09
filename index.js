const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const axios = require('axios');

const app = express();

app.use(express.static('web'));

// app.use('/api/auth/login', proxy.createProxyMiddleware({ target: 'http://cloud-dev2.gl-inet.cn/cloud-basic/cloud/v2/auth/login' }));
app.use('/api', createProxyMiddleware({ target: 'https://192.168.8.240/api', secure: false }));

// app.use("/api/auth/login", async (req, res) => {
//     console.log(req.url);
//     const data = new FormData();
//     data.append("user", "admin");
//     data.append("passwd", "admin");
//     const response=  await axios.post("http://192.168.8.240/api/auth/login", data)
//     res.send("response.data");
// })

app.use(
    '/api/ws',
    createProxyMiddleware({
        target: 'wss://192.168.8.240/api/ws', // 目标WebSocket服务器
        changeOrigin: true,
        ws: true, // 启用WebSocket代理
        secure: false, // 如果目标服务器没有有效的SSL证书，可以禁用SSL验证
        logLevel: 'debug', // 启用详细日志
        onProxyReq: (proxyReq, req, res) => {
            proxyReq.method = req.method; // 确保请求方法正确传递
            console.log(`Proxying ${req.method} request to ${proxyReq.path}`);
        },
        onProxyRes: (proxyRes, req, res) => {
            console.log(`Received response from ${proxyRes.request.uri.href}`);
        },
        onError: (err, req, res) => {
            console.error('Proxy error:', err);
            res.status(500).send('Proxy error: ' + err.message);
        }
    })
);


app.listen(3001, () => console.log('Example app listening on port 3000!'));

// async function test() {
//     try {
//         const data = new FormData();
//         data.append("user", "admin");
//         data.append("passwd", "admin");
//         // const response=  await axios.post("https://www.icmb.top:16014/api/auth/login", data)
//         // const response=  await axios.post("https://192.168.8.240/api/auth/login", data)
//         const response=  await axios.post("https://cloud-dev2.gl-inet.cn/cloud-basic/cloud/v2/auth/login", data, {s})
//         console.log(response.data);
        
//     } catch (error) {
//         console.log("ERROR", error.toString?.());
//     }
// }

// test()