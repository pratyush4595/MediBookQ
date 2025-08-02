const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const server = express();

server.get('/', (req, res) => {
    res.send("Welcome to MediBookQ API");
});

server.listen(4000, () => {
    console.log('Server is listening on 4000');
})