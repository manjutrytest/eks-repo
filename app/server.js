// app/server.js
const http = require('http');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  if (req.url === '/health') return res.end('ok');
  res.end('Hello from EKS - ' + (process.env.REVISION || 'dev'));
});
server.listen(port, ()=> console.log('listening', port));
