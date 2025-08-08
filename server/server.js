const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('./config/db');
const cors = require('cors');

dotenv.config();

const userRoutes = require('./routes/userRoutes');

mongodb.connect();

const server = express();

server.set("view engine", 'ejs');

server.use(cors());
server.use(express.json());



server.get('/', (req, res) => {
    res.render('index');
});

server.use('/api/user', userRoutes.router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});