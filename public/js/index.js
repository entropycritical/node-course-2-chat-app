var socket = io();

socket.on('connect', function () {
  console.log('connected to Server');

  socket.emit('createMessage', {
    from: 'Keval',
    message: 'this works for me'
  });
});

socket.on('newMessage', function (msg) {
  console.log('New message', msg);
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});
