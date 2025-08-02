const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const server = express();

server.set("view engine", 'ejs');

server.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})