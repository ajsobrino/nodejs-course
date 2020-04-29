require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const _ = require('underscore');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./controller/login-controller'));
app.use(require('./controller/user-controller'));

app.listen(process.env.PORT, () => {
    console.log('The app is listening in ' + process.env.PORT);
});