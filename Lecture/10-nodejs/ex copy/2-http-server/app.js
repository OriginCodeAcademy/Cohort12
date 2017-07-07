const http = require('http');
const port = 3000;

const server = http.createServer(requestHandler);
server.listen(port, serverInit);

function requestHandler(request, response) {
    console.log(request.url);
    response.end('Hello world!');
}

function serverInit() {
    console.log('The server is running');
}