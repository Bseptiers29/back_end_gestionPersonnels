const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  password: "azsd",
  user: "users",
  database: "back_personnel",
  host: "localhost",
  port: "3306"
});

module.exports = pool;
