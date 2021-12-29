"user strict";

const mysql = require("mysql");

//local mysql db connection
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  port : '3307',
  password: "",
  database: "node_mysql_crud_db",
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
