const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);

io.on('connection', (socket) => {
  socket.emit('your id', socket.id);
  socket.on('send message', (body) => {
    io.emit('message', body);
  });
});

server.listen(5000, () => {
  console.log('running on 5000');
});
