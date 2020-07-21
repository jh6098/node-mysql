const connection = require("../db/mysql_connection");

// 모든 주소록 데이터를 다 가져와서, 클라이언트한테 보내는것은
// 문제가 있다. 데이터를 모두 다 보내지 않고, 끊어서 보내야 함
// 현업에서는 20~30개 사이로 끊어서 보낸다.
//

// 이쪽 함수처리해주는게 중요한건데
// @desc   모든 주소록 가져오기
// @route  GET /api/vi/contacts?offset=0&limit= 20
//        매소드/    path     /  쿼리스트링
exports.getAllContacts = async function (req, res, next) {
  let offset = req.query.offset;
  let limit = req.query.limit;

  let query = `select * from contact limit ${offset}, ${limit} `;

  try {
    [rows, fields] = await connection.query(query);
    let count = rows.length;
    res.status(200).json({ succes: true, items: rows });
  } catch (e) {}
  res.status(500).json({ succes: false, message: "DB ERROR", error: e });
};

// 실습조건 보고 만든거임 연락처 추가 화면 부분.
// @desc   주소록 1개 추가하기
// @route  POST /api/vi/contacts
// @parameters name,phone
// [result]   await,async 같이써주는거임.
exports.createContact = async (req, res, next) => {
  // 포스트맨에서 만들어준거 그대로 적어주는거임.
  // 김나나,번호
  let name = req.body.name;
  let phone = req.body.phone;

  let query = "insert into contact (name, phone) values ? ";
  let data = [name, phone];

  try {
    [result] = await connection.query(query, [[data]]);
    res.status(200).json({ succes: true, result: result });
  } catch (e) {
    res.status(500).json({ succes: false, message: "DB ERROR", error: e });
  }
};

// @desc   주소록 1개 수정
// @route  PUT /api/vi/contacts
// @parameters id, name, phone
exports.updateContact = async (req, res, next) => {
  let id = req.body.id;
  let name = req.body.name;
  let phone = req.body.phone;

  let query = "update contact set name = ? , phone = ? where id = ?";
  let data = [name, phone, id];

  try {
    [result] = await connection.query(query, data); //쿼리끝날떄까지 기다려라
    res.status(200).json({ succes: true, result: result });
  } catch (e) {
    res.status(500).json({ succes: false, message: "DB ERROR", error: e });
  }
};

// 그 다음 화면보고 삭제하는거 추가하기
// @desc  주소록 1개 삭제
// @route  DELETE /api/vi/contacts
// @parameters id
exports.deleteContact = async (req, res, next) => {
  let id = req.body.id;

  let query = "delete from contact where id =?";
  let data = [id];

  try {
    [result] = await connection.query(query, data); // await 을 안쓴다면 cpu가 아래로 실행을해버린다
    res.status(200).json({ succes: true, result: result });
  } catch (e) {
    res.status(500).json({ succes: false, message: "DB ERROR", error: e });
  }
};
// ----여기까지 실습문제8의 화면처리 완료.---------

// @desc    이름이나, 전화번호로 검색하는 API
// @route   GET /api/v1/contacts/search?keyword=67
// @route   GET /api/v1/contacts/search?keyword=길동

// 일단 워크벤치로가야됨. 하나씩 실행해본다...

exports.searchContact = async (req, res, next) => {
  let keyword = req.query.keyword;
  let query = `select * from contact
   where name = "%${keyword}%" or phone like "%${keyword}%"`;

  try {
    [rows, fields] = await connection.query(query);
    res.status(200).json({ succes: true, items: rows });
  } catch (e) {
    res.status(500).json({ succes: false, message: "DB ERROR", error: e });
  }
};
