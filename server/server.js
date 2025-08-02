const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const server = express();

server.set("view engine", 'ejs');

server.get('/', (req, res) => {
    res.render('index');
});

server.listen(4000, () => {
    console.log('Server is listening on 4000');
})