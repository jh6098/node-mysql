// express : 웹 서버를 동작시키는 프레임워크
// npm 패키지 설치한 것들에 대한 require
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// 미들웨어 에 대한 require
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");

// 라우터에 대한 require
// 우리가 만든 라우터 파일 가져온다.
const bootcamps = require("./routes/bootcamps");
const users = require("./routes/users");

// 환경 설정 파일의 내용을 로딩한다.
dotenv.config({ path: "./config/config.env" });

// 웹서버 프레임워크인 익스프레스를 가져온다.
const app = express();

// Body 파싱할 수 있도록 설정
app.use(express.json());

// app.use 는 순서가 중요!! 순서대로 실행을 시킵니다. next()로
// 미들웨어 연결
app.use(logger);

app.use(morgan("combined"));

// app.use(function(req, res, next){
//   if(req.method === 'GET'){
//     res.send('GET 방식은 안됩니다.')
//   }
//   next()
// })

// app.use(function (req, res, next) {
//   res.status(503).send("사이트 점검중입니다.");
// });

// 라우터 연결 : url의 path 와 라우터 파일과 연결
app.use("/api/v1/bootcamps", bootcamps);

// 라우터 연결 : url의 path 와 라우터 user 연결
app.use("/api/v1/users", users);

// 위의 에러를 처리하기 위해서, 에러 핸들러 미들웨어 연결
app.use(errorHandler);

// 환경설정 파일인, config.env 파일에 있는 내용을 불러오는 방법.
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// 익스프레스 서버 실행은 : 터미널에서 npm run dev

// // sever.js
// var jwt = require("jsonwebtoken");
// // 토큰 생성
// var token = jwt.sign({ user_id: 1 }, process.env.ACCESS_TOKEN_SECRET);
// console.log(token);
// console.log(process.env.ACCESS_TOKEN_SECRET);

// // 클라언트로부터 받은 토큰이, 진짜인지 확인하는 작업
// const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
// console.log(data);