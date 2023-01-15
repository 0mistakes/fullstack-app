import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'root',
database: 'pos_db'
});

db.connect( function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:"); throw err; 
    } else { 
        console.log("Connection established."); 
    } 
});
 
export default db;