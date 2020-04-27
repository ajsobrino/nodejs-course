const express = require('express');
const app = express();


app.get('/user', (req, res) => {
    res.json("GET");
})

app.post('/user', (req, res) => {
    res.json('Post');
});

app.put('/user', (req, res) => {
    res.json('Put');
});

app.delete('/user', (req, res) => {
    res.json('delete');
});


app.listen(3000);