/*
    ==> small http server using express module
    ==> should assign to the variable app
    ==> listen on port 1245
    ==> display the message on the page
*/

const express = require('express');

const app = express();
const PORT = 1245;
const HOSTNAME = 'localhost';

const message = 'Hello Holberton School!';

app.get('/', (req, res) => {
    res.send(message);
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening at http://${HOSTNAME}:${PORT}`);
});

module.exports = app;
