const express = require('express');
const app = express();
const fs = require('fs');

// 1. Make your port number dynamic
//    Use the environment variables for port number
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send('Hello world!');
});
app.get('/time', function (request, response) {
    const now = new Date();
    response.send(now.toString());
});
app.get('/randomnumber', function (request, response) {
    response.send(Math.random().toString());
});

app.get('/topspots', function (request, response) {
    fs.readFile('./topspots.json', 'utf-8', function (err, data) {
        response.send(data);
    });
});

app.listen(port, function () {
    console.log('Server running on port ' + port);
});