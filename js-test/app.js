// fs 파일시스템이라는 라이브러리를 사용하겟다.
// const 상수.(불러온 라이브러리는 변경이되면안된다.) 변경되지않게한다.
// 라이브러리 이름과 변수이름은 통일시켜야됨 fs / fs
const fs = require('fs')  //이게 전통방식이다.

// validator 패키지 가져다쓰기
const validator = require('validator')  //이메일체크하는 코드
let ret = validator.isEmail('abc.ddd@naver.com')
ret = validator.isURL('http://naver.com')
console.log(ret) 

// 실습1
// 1. chalk 라는 패키지(라이브러리, 모듈)을 설치하시오. 
// npm 에서 chalk 검색
// 2. app.js 파일에서 로딩하세요   
// 3. 문자열로 "Success!" 라고 출력할건데, 녹색(green)으로 출력하시오.
// 4. 3번의 문제에 추가하여 bold 체로 출력해보세요.

const chalk = require('chalk'); //2. 로딩 Usage 나온대로
console.log(chalk.green.bold('Hello Success!'));

// 실습2
// 1.mysql 모듈설치
// 2.mysql 디렉토리 생성후 디렉토리로 이동
// 3.npm init 하고 
// npm init -y 엔터 자동으로 치게하는것
// 4.mysqljs 모듈설치
// 5.mysql_connection.js 파일만들고,
// 6.aws에 접속할 connection을 export하시오

// fs = 'aaa' 이렇게 쓰면 값이 달라져서 에러가뜸.
// 아래는 레퍼런스임.
// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefilesync_file_data_options

// fs.writeFileSync(file(파일), data(내용)[, options]) 
// fs.writeFileSync('notes.txt', '안녕하세요?') // 파일 하나 만들기

// 1. appendFileSync 라는 함수를 이용해서
// 2. notes.txt 파일에 , 새로운 내용을 추가하세요.
// 3. 실행하여 결과를 확인합니다.

// fs.appendFileSync('notes.txt','\n하이하이')  //저장할떄마다 추가됨.
// 밑에줄에 추가하고싶으면 \n 하고 입력하면됨.








