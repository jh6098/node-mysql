const express = require("express");
const dotenv = require("dotenv");
const memos = require("./routes/memos");

// 환경설정파일 로딩
dotenv.config({ path: "./config/config.env" });

const app = express();
// post 사용시, body 부분을 json으로 사용하겟다라고 명시를해줘야됨.
app.use(express.json());

app.use("/api/v1/memos", memos);
// 라우터 : 해당주소가 들어오면 해당주소의 함수를 실행하라는 코드.
// 이 코드가 서버다.  클라이언트(포스트맨) > 서버  요청하고 응답하고
// 포스트맨에서 send 버튼 누르면 nodejs에 요청하는거임.
// req ,res 가 그뜻임. reqset할떄 제이슨으로 보내줘야한다고함.
// req= request 요청 res= response 응답
// postman에 localhost:5100 라고 치면
// "API 서버 개발" 이라고 뜬다.
// /을 path 라고하고 여기서는  localhost:5100 를 가리킴.
// path에 /api라고 치면 포스트맨에서 오류가 걸리고
// 오류안걸리게하려면 포스트맨에서 localhost:5100/api 라고입력하면 안걸림.
// 모든 메모를 가져오는 api

// app.get("/api/v1/memos", (req, res) => {
//   res.status(200).json({ title: "모든 메모를 db에서 가져온다." });
// });

// // 메모 생성화면
// app.post("/api/v1/memo", (req, res) => {
//   console.log(req.body);
//   res.status(200).json({ title: "메모를 생성" });
// });

// // 업데이트 메모를 수정
// app.put("/api/v1/memo/:id", (req, res) => {
//   console.log(req.body);
//   res.status(200).json({ title: `${req.params.id}번 메모 수정` });
// });

// // 메모를 삭제
// app.delete("/api/v1/memo/:id", (req, res) => {
//   console.log(req.body);
//   res.status(200).json({ title: `${req.params.id}번 메모 삭제` });
// });

const PORT = process.env.PORT || 5100;

app.listen(PORT, console.log("App listening on port 5100!"));
//app.listen 입력하면 자동으로생김
