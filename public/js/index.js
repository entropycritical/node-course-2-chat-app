var socket = io();

socket.on('connect', function () {
  console.log('connected to Server');
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function (msg) {
  console.log('New message', msg);
});
