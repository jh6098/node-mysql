const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "database-1.cfekh2snwkj6.ap-northeast-2.rds.amazonaws.com",
  user: "node_user",
  database: "my_test",
  password: "node1234test",
});
module.exports = connection;
