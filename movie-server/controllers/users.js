// 데이터베이스 연결
const connection = require("../db/mysql_connection");

//@ desc 영화데이터 불러오기
//@ url
//@request
//@response
exports.getAllContacts = async function (req, res, next) {
  let query = `select * from movie limit 25;`;

  try {
    [rows, fields] = await connection.query(query);
    let count = rows.length;
    res.status(200).json({ succes: true, items: rows });
  } catch (e) {}
  res.status(500).json({ succes: false, message: "DB ERROR", error: e });
};
//@ desc 영화명 검색해서 가져오기
//@ url
//@request
//@response
exports.searchMoive = async (req, res, next) => {
  let keyword = req.query.keyword;
  let query = `select * from movie
     where title = "%${keyword}%" or like "%${keyword}%"`;

  try {
    [rows, fields] = await connection.query(query);
    res.status(200).json({ succes: true, items: rows });
  } catch (e) {
    res.status(500).json({ succes: false, message: "DB ERROR", error: e });
  }
};

//@ desc 연도 내림차순 정렬해서 가져오기
//@ url
//@request
//@response
exports.year = async (req, res, next) => {
  try {
    const [rows, fields] = await connection.query("select * from movie ");
    res.status(200).json({ success: true, items: rows });
  } catch (e) {
    next(new ErrorResponse("가져오기 실패", 400));
  }
};

//@ desc 관객수 내림차순 정렬해서 가져오기
//@ url
//@request
//@response
