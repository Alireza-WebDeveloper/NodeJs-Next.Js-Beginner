const http = require('http');
const fs = require('fs');

const server = http.createServer(async (requestServer, responseClient) => {
  //  Stream Solution 1
  const readable = fs.createReadStream('./auth.txt');
  readable.on('data', (chunk) => {
    responseClient.write(chunk);
  });
  readable.on('end', (data) => {
    responseClient.statusCode = 200;
    responseClient.end();
  });
  readable.on('error', (err) => {
    responseClient.statusCode = 500;
    responseClient.end('File Not Found');
  });
  // Stream Solution 2
  const readable2 = fs.createReadStream('./auth.txt');
  readable2.pipe(responseClient);
});

server.listen(8000, () => console.log('Server Running Port 8000'));
