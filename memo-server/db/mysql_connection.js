//aws에 접속할 connection을 export하시오
const mysql = require("mysql");
const db_config = require("../config/db-config.json");

// 정보노출 안되게 config db~에 ㄶ어줌
const connection = mysql.createConnection({
  host: db_config.MYSQL_HOST,
  user: db_config.MYSQL_USER,
  database: db_config.DB_NAME,
  password: db_config.DB_PASSWD,
});

module.exports = connection;
