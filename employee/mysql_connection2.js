// mysql db에 접속할수 있는 커넥션을 여기서 
// 하나 만들어 놓고,
// 다른 파일에서 가져다 쓸수 있게 한다.

// 방금전 패키지 설치한 mysql 이용하겟다.
const mysql = require('mysql') 

const connection = mysql.createConnection(
    {
        host : 'database-1.cfekh2snwkj6.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'node1234test' 
     }
)
// 다른 파일에서 aws 커넥션 사용할 수 있도록 하는 명령어.
module.exports = connection