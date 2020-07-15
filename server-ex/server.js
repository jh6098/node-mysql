// 웹서버 동작시키는 코드
// http://localhost:3000/ 라고치면 hello world가 나와야됨.
// 서버가 돌고잇으면 터미널이 멈춰있다.
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("let`s go home");
});

app.listen(3000);
