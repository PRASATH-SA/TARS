const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user:'PRASATH',
    password:'123456789',
    database:'prasath'
});

db.connect((err)=>{
    if(err) throw err;
    // db.query("INSERT INTO `users`(`Roll_No`, `Name`) VALUES ('78','Rak')");
    console.log('Connected to mysql');
});

module.exports=db;