//module will give access to db connection to other programs
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
var con = mysql.createConnection({
        //should be a hidden env var
        host: "hostUrl",
        user: "userneam",
        password: process.env.MYSQLPASS,
        database: "dbname"
});

exports.con = con;
