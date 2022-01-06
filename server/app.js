 const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
// const io = new Server(server);
const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  var number = 1
  setInterval(() => {
      socket.emit('test-event', 'this is New data asdf asdf' + number++);
  }, 100);
});

// Server.set("origins", "*:*");

server.listen(3000, () => {
  console.log('listening on *:3000');
});