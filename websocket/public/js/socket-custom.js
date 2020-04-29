var socket = io();
socket.on('connect', function() {
    console.log('Connect to server');
});
socket.on('disconnect', function() {
    console.log('Loss connection to server');
});

socket.emit('sendMessage', {
    user: 'user',
    message: 'Hello'
}, function(resp) {
    console.log('Finished sending of message, the response is ' + resp.resp);
});

socket.on('sendMessage', function(data) {
    console.log(data.message);
});