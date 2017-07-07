const http = require('http');
const port = 3000;

const server = http.createServer(requestHandler);
server.listen(port, serverHandler);

////////////

function requestHandler(request, response) {
    console.log(request.url);

    switch(request.url) {
        case '/time': 
            const now = new Date();
            response.end(now.toString());
            break;
        default:
            response.end('Hello world!');
            break;
    }
}

function serverHandler() {
    console.log(`server is listening on port ${port}`);
}