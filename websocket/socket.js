const { io } = require('./app');

io.on('connection', (client) => {
    console.log('connect to server');

    client.on('sendMessage', (data, callback) => {
        console.log(data);
        //if(data.name) {
        //callback({
        //    resp: 'Good function'
        //  });
        //} else {
        //      callback({
        //            resp: 'Bad function'
        //          })
        //        }
        client.broadcast.emit('sendMessage', { message: data.name, age: data.age });
    });
    for (let i = 0; i < 10; i++) {
        client.emit('sendMessage', { message: 'Hello keyring' });
        client.emit('sendMessage', { message: '' });
    }

});

io.on('diconnect', () => {
    console.log('User disconnect');
});