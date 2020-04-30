const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const myHtml = fs.createReadStream(
      // remember, this is from the compiled js code which lives inside build
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
    console.log('hi');
    fs.readFile(
      path.join(__dirname, 'public', 'index.js'),
      (error, content) => {
        if (error) {
          throw error;
        }
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(content);
      }
    );
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
