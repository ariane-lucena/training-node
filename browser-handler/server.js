const http = require('http');
const router = require('./router');

const server = http.createServer();
server.on('request', function (request, response) {
  router(request, response);
});

server.listen(8080);
console.log('Server running at http://localhost:8080/');
