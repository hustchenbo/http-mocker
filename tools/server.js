/**
 * @file server
 * @author chenbo09
 */

const express = require('express');
const proxyMiddleware = require('http-proxy-middleware');
const app = express();


app.use(
    proxyMiddleware('/api', {
        // 转发到mockup的服务上了 具体见mockup/server
        target: 'http://localhost:3001',
        pathRewrite: {'^/api': ''}
    })
);

// Serve the files on port 3000.
app.listen(3000, () => {
    console.log('The React app is listening on port 3000!\n');
});
