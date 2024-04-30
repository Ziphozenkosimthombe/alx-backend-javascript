/*
    ==> small HTTP server
    ==> using the HTTP module
    ==>should be assigned to the variable app
    ==> and it must be exported
    ==> HTTP server should listen on port 1245
    ==> display the message on the page
*/ 

const http = require('http');

const hostname = 'localhost';
const port = 1245;
const app = http.createServer();

app.on('request', (req, res) => {
    const message = 'Hello Holberton School!';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', message.length);
    res.write(Buffer.from(message));
});

app.listen(port, hostname, () => {
    process.stdout.write(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
