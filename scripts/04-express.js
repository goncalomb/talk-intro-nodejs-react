const express = require('express');

// https://expressjs.com/
// https://expressjs.com/en/starter/hello-world.html

// npm install express

const app = express();

app.get('/', (req, res, next) => {
    res.send('hello world');
    next();
});

app.get('/file', (req, res, next) => {
    // implement reading some file
    next();
});

app.get('/brew/:brewId', (req, res, next) => {
    res.statusCode = 404;
    res.send(`Cannot brew '${req.params.brewId}'!`);
    next();
});

const server = app.listen(9000, () => {
    console.log('server listening')
});

server.on('close', () => {
    console.log('server closed')
});

process.on('SIGINT', () => {
    console.log('received SIGTERM')
    server.close();
});
