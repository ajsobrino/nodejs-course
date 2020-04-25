const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'COtent-Type': 'applicationCache/json' });

    res.write(JSON.stringify({
        name: 'Antonio',
        surname: 'Sobrino',
        age: 23
    }));
    res.end();
}).listen(3000);

console.log('listen the port 3000');