const http = require('http');
const fs = require('fs');

const server = http.createServer((req: Request, res: Response) => {
  if (req.url === '/') {
    fs.ReadStream();
  }
});
console.log('hi');
