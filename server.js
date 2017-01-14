
const apiRouter = require('./routes/api');
const mongoose = require('./mongoose');
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const db = mongoose();

///
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', ()=>{
    res.sendfile('./client/dist/index.html');
});

const PORT = 80 || process.env.PORT;

const Server = http.createServer(app);

Server.listen(PORT, ()=>{
    console.log('Server on Port'+PORT);
})