const http = require('http');

// https://nodejs.org/api/http.html

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.write('hello world');
            res.end();
            break;
        case '/file':
            // implement reading some file
            break;
        case '/brew':
            res.write('I\'m not a teapot!');
            res.end();
            break;
        case '/close':
            res.write('bye');
            res.end();
            server.close();
            break;
        default:
            res.statusCode = 404;
            res.write(`not found: ${req.url}`);
            res.end();
    }
}).listen(9000);

server.keepAliveTimeout = 500;
server.setTimeout(1000);

server.on('listening', () => {
    console.log('server listening')
});

server.on('close', () => {
    console.log('server closed')
});

process.on('SIGINT', () => {
    console.log('received SIGTERM')
    server.close();
});
