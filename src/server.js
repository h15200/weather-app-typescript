const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const myHtml = fs.createReadStream(
      __dirname + '/public/index.html',
      'utf8'
    );
    res.writeHead(200, { 'Content-Type': 'text/html' });
    myHtml.pipe(res);
  } else if (req.url === '/index.css') {
    const myCss = fs.createReadStream(__dirname + '/public/index.css', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    myCss.pipe(res);
  } else if (req.url === '/index.js') {
    const myJs = fs.createReadStream(__dirname + '/public/index.js', 'utf8');
    res.writeHead(200, { 'content-Type': 'text/javascript' });
    myJs.pipe(res);
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
