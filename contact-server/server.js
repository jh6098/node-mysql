const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
// 로그 찍어주는 로거다. 미들웨어 다. app use에 추가시키는 것
const morgan = require("morgan");

// 우리가 파일로 만든것은 항상,npm 패지키의 아래쪽에 위치
const contacts = require("./router/contacts");
const users = require("./router/users");

const app = express();
// Body parser 설정. 클라이언트에서 body로 데이터 보내는것 처리.
app.use(express.json());

// 먼저 로그찍어주도록 미들웨어 설정
app.use(morgan("common")); // (중간에 추가해준것)

// API 경로연결
app.use("/api/v1/contacts", contacts);
app.unsubscribe("/api/v1/users");

const PORT = process.env.PORT || 5300;

app.listen(PORT, console.log("API SERVER"));
