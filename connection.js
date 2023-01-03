//create database connection

const mysql = require('mysql');

//require dotenv
require('dotenv').config();

const conn = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

conn.getConnection((err)=>{
    if (err){
        console.log(err);
    }
    console.log('Database connected...');
});

module.exports = conn;