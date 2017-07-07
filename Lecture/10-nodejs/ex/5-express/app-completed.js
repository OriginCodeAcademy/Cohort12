const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/time', (req, res) => {
    const todaysDate = new Date();
    res.send(todaysDate);
});

app.get('/topspots', (req, res) => {
    fs.readFile('./topspots.json', 'utf-8', (err, data) => {
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});