// 데이터베이스 연결
const connection = require("../db/mysql_connection");
// Json Web Token
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

// 레퍼런스 참조해서 하는거임 주석다는것도.
// @desc 회원가입
// @route POST/api/v1/users
// @parameters email, passwd
exports.createUser = async (req, res, next) => {
  // 클라이언트로부터 이메일,비번 받아서 변수로 만들자
  let email = req.body.email; //파라미터이름 그대로 쓰는거다.
  let passwd = req.body.passwd;

  if (validator.isEmail(email) == false) {
    res.status(400).json({ success: false });
    return;
  } // npm에서 Email 검색하면 쓰는방법 나오는데
  // 그 방법 그대로하는거임.
  // 리턴은꼭해줘야됨 if를 썻으면
  // 이메일 형식맞는지 확인하는 npm i validator
  // 패스워드 암호화 해야됨    npm i bcrypt
  // 설치후 맨위에 라이브러리 넣어줘야됨 const~

  const hashedPasswd = await bcrypt.hash(passwd, 8); // 단방향암호화

  let query = "insert into memo_user (email, passwd) values (?, ?)";
  let data = [email, hashedPasswd]; //              자바에서 []는 array
  let user_id;
  try {
    [result] = await connection.query(query, data);
    user_id = result.insertId;
  } catch (e) {
    //                                            인서트문이라 result 라고 변수이름 썻다고함
    res.status(500).json({ success: false, error: e }); // 인서트를 하면 인서트한 유저의 id값을 바로따올수잇다
    return;
  }
  // 토큰만들기 시작.
  const token = jwt.sign({ user_id: user_id }, process.env.AUTH_TOKEN_SECRET);

  query = "insert into memo_token (token, user_id) values (? ,?)";
  data = [token, user_id];
  try {
    [result] = await connection.query(query, data);
  } catch (e) {
    res.status(500).json({ success: false });
    return;
  }

  res.status(200).json({ success: true, token: token });
};

// @desc 로그인
// @url POST /api/v1/users/login
// @request email, passwd
// @response success,token

exports.loginUser = async (req, res, next) => {
  let email = req.body.email;
  let passwd = req.body.passwd;

  let query = "select * from memo_user where email = ?";
  let data = [email];

  let user_id;
  try {
    [rows] = await connection.query(query, data);
    if (rows.length == 0) {
      res.status(400).json({ success: false, message: "없는 아이디" });
      return; //res. 이있으면 return잇어야됨.
    }

    const isMatch = await bcrypt.compare(passwd, rows[0].passwd);
    if (isMatch == false) {
      res.status(401).json({ success: false, message: "비밀빈호 틀림" });
      return;
    }
    user_id = rows[0].id; //토큰을 가져오기위해서
  } catch (e) {
    res.status(500).json({ success: false });
    return;
  }

  let token = jwt.sign({ user_id: user_id }, process.env.AUTH_TOKEN_SECRET);

  query = "insert into memo_token (token, user_id) values (?, ?) ";
  data = [token, user_id];
  try {
    [result] = await connection.query(query, data);
    res.status(200).json({ success: true, token: token });
    return;
  } catch (e) {
    res.status(500).json({ success: false });
    return;
  }
};

// @desc 내 정보 가져오는 API
// @uri  GET/api/v1/users/me
// @request 아무것도 전달 안해도됨
// @response id, eamil, created_at

exports.myInfo = (req, res, next) => {
  // 인증 토큰 검증 통과해서 이 함수로 온다

  let userInfo = req.user;

  res.status(200).json(userInfo);
};
