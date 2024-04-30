/*
    ==> small HTTP server
    ==> using the HTTP module
    ==>should be assigned to the variable app
    ==> and it must be exported
    ==> HTTP server should listen on port 1245
    ==> display the message on the page
*/ 

const {createServer} = require('http');

const hostname = 'localhost';
const port = 1245;

const app = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});