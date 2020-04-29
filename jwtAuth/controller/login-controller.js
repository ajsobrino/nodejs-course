const express = require('express');
const _ = require('underscore');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const UserApp = require('../model/user');
const app = express();


mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, dbName: 'fuck', useCreateIndex: false, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log('Start connect to mongodb');
});

app.post('/login', (req, res) => {
    let body = req.body;
    UserApp.findOne({ email: body.email }, (err, userSaved) => {
        if (err) throw err;

        if (!bcrypt.compareSync(body.password, userSaved.password)) {
            res.status(500).json({
                ok: false,
                message: 'Error can not login'
            })
        }
        let token = jwt.sign({
            user: userSaved
        }, 'secret', { expiresIn: 60 * 60 * 24 * 30 });
        res.json({
            ok: true,
            token
        })
    });


});

module.exports = app;