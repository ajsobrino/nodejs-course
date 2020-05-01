"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.connected = false;
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'usercourse',
            password: '12345',
            database: 'coursedb'
        });
        this.connect();
    }
    connect() {
        this.cnn.connect((err) => {
            if (err)
                console.log(err);
        });
    }
}
exports.default = MySQL;
