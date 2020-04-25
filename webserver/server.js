var express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

//app.get('/', function(req, resp) {
//  resp.send('Hello world');
//});



const port = process.env.PORT | 3000;
app.listen(port);