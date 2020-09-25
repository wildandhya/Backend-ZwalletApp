/** @format */

require("dotenv/config");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected");
});

module.exports = db;
