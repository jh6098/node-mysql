//aws에 접속할 connection을 export하시오
// await 기능을 사용해줘야되서  npm i mysql2
// const mysql = require("mysql"); 이거를 바꿔주엇다.

const mysql = require("mysql2");
// db-confing.json에 저장된, 중요 정보를 여기서 셋팅.
const db_config = require("../config/db-config.json");

// 커넥션 풀 (Connection Pool)을 만든다.
// 이유? 풀이 알아서, 커넥션 연결을 컨트롤 한다.
const pool = mysql.createPool({
  host: db_config.MYSQL_HOST,
  user: db_config.MYSQL_USER,
  database: db_config.DB_NAME,
  password: db_config.DB_PASSWD,
  waitForConnections: true,
  connectionLimit: 10,
});
// await 으로 사용하기 위해, 프라미스로 저장.
const connection = pool.promise();

module.exports = connection;
