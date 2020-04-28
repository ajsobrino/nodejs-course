require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const _ = require('underscore');

const UserApp = require('./model/user');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, dbName: 'fuck', useCreateIndex: false, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log('Start connect to mongodb');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/user', (req, res) => {
    let page = req.query.page || 0;
    let numberItem = req.query.numberItem || 5;
    let totalNumber;
    UserApp.count({}, (err, res) => {
        if (err) throw err;
        totalNumber = res;
    })
    UserApp.find({}).skip(page * numberItem).limit(+numberItem).exec((err, users) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: err
            })
        }
        res.json({
            count: totalNumber,
            users: users
        });
    });

})

app.post('/user', (req, res) => {
    let body = req.body;
    if (body.name == undefined) {
        res.status(400).json({
            message: 'The name is neccesary',
            ok: false
        })
    }
    let user = new UserApp({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role,
    });
    user.save((err, userDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                error: err
            })
        };
        res.json(userDB)
    });

});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'img', 'role', 'state']);
    console.log(body);
    UserApp.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userDB) => {
        if (err) return res.status(500).json({
            ok: false,
            message: err
        });
        res.json(userDB);
    })
});

app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    UserApp.findByIdAndDelete(id, (err, resp) => {
        if (err) throw err;
    });
    res.status(204).json();
});

app.path('/user/:id', (req, res) => {
    let id = req.params.id;
    UserApp.findByIdAndUpdate(id, { state: false }, { new: true }, (err, resp) => {
        if (err) throw err;
    });
    res.status(204).json();
});
app.options('/user', (err, res) => {
    res.json(['put', 'post']);
});
app.listen(process.env.PORT, () => {
    console.log('The app is listening in ' + process.env.PORT);
});