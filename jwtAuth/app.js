require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/user/:id', (req, res) => {
    let id = req.params.id;
    res.json("GET " + id);
})

app.post('/user', (req, res) => {
    let body = req.body;
    if (body.name == undefined) {
        res.status(400).json({
            message: 'The name is neccesary',
            ok: false
        })
    }
    res.json({
        method: 'Post ',
        body: body
    });
});

app.put('/user', (req, res) => {
    res.json('Put');
});

app.delete('/user', (req, res) => {
    res.json('delete');
});


app.listen(process.env.PORT, () => {
    console.log('The app is listening in ' + process.env.PORT);
});