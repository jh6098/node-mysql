const express = require("express");
const dotenv = require("dotenv");

const morgan = require("morgan"); // (중간에 추가해준것)
// 로그 찍어주는 로거다. 미들웨어다 app.use에 추가시키는것이다.

const contacts = require("./router/contacts");

dotenv.config({ path: "./config/config.env" });

const app = express();
// Body parser 설정. 클라이언트에서 body로 데이터 보내는것 처리.
app.use(express.json());

// 먼저 로그찍어주도록 미들웨어 설정
app.use(morgan("common")); // (중간에 추가해준것)

// API 경로연결
app.use("/api/vi/contacts", contacts);

const PORT = process.env.PORT || 5300;

app.listen(PORT, console.log("API SERVER"));
