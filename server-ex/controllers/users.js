const connection = require("../db/mysql_connection");
const ErrorResponse = require("../utils/errorResponse");
const validator = require("validator");

// @desc    회원가입
// @route   POST /api/v1/users
// @route   POST /api/v1/users/register
// @route   POST /api/v1/users/signup      3가지방식이있는데 똑같은거다.
// @parameters email, passwd
exports.createUser = async (req, res, next) => {
  let email = req.body.email;
  let passwd = req.body.passwd;

  // 이메일이 정상적인가 체크
  if (!validator.isEmail(email)) {
    res.status(500).json({ success: false });
    return;
  }
  let query = "insert into user (email, passwd) values ? ";
  let data = [email, passwd];

  try {
    [result] = await connection.query(query, [[data]]);
    res.status(200).josn({ succes: true, result: result });
  } catch (e) {
    res.status(500).json({ succes: false, error: e });
  }
};
// 여기까지 입력후 postman으로. add리퀘스트
