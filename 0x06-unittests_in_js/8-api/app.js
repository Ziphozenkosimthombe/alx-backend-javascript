const express = require('express');
const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
    res.status(200);
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;