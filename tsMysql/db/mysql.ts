import mysql = require('mysql');


export default class MySQL{
    private static _instance:MySQL;

    cnn:mysql.Connection;
    connected: boolean = false;

    constructor(){
        this.cnn = mysql.createConnection({
            host:'localhost',
            user:'usercourse',
            password:'12345',
            database:'coursedb'
        });
       this.connect();
    }

    private connect(){
        this.cnn.connect((err:mysql.MysqlError)=>{
            if(err) console.log(err);
        });

    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }
    
    static executeQuery(query:string,callback:Function){
        this.instance.cnn.query(query,(err,results:Object[],fields)=>{
            if(err) throw err;
            if(results.length===0){
                callback('nothing objects');
            }else{
                callback(null,results);
            }
        });
    }

}