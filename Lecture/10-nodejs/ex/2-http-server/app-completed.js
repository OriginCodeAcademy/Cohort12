const http = require('http');
const port = 3000;

const server = http.createServer(requestHandler);
server.listen(port, serverHandler);

////////////

function requestHandler(request, response) {
    console.log(request.url);
    response.end('Hello World!');
}

function serverHandler() {
    console.log(`server is listening on port ${port}`);
}
