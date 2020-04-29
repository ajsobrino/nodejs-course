const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
let server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

module.exports.io = socketIO(server);
require('./socket');



server.listen(3000, (err, resolve) => {
    if (err) throw err;
    console.log('Start server');
})