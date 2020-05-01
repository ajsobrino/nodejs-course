import Server from './server/server';
import router from './controller/router';
import MySQL from './db/mysql';
 

const server = Server.init(3000);
const mysql = new MySQL();

server.start();