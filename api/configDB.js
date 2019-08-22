var mysql = require("mysql");

//Informations de connection a la base de donnée
var conn = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  database: process.env.MYSQL_ADDON_DB,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD
});

module.exports = conn;
