const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(requestHandler);
server.listen(port, serverInit);

function requestHandler(request, response) {
    
    switch(request.url) {
        case '/time':
            const now = new Date();
            response.end(now.toString());
            break;
        case '/randomquote':
            response.end(Math.random().toString());
            break;
        case '/topspots':
            fs.readFile('./topspots.json', 'utf-8', function(err, data) {
                response.end(data);
            });
            break;
        default:
            response.end('Hello world!');
            break;
    }

}

function serverInit() {
    console.log('The server is running');
}