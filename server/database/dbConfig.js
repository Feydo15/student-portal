const mysql = require("mysql");



const con = mysql.createConnection({
    user: process.env.USER,
    host: process.env.DB_HOST,
    password: process.env.DB_KEY,
    database: process.env.DB_NAME,
  });

  module.exports={con};