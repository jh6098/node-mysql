const connection = require("../db/mysql_connection");
const bcrypt = require("bcrypt");

//@desc     reservation
//@route    POST /api/v1/reservations
//@parameters   reservation_number , movie_id, start_time
exports.reservation = async (req, res, next) => {
  let reservation_number = req.body.reservation_number;
  let movie_id = req.body.movie_id;
  let start_time = req.body.start_time;
  let user_id = req.movie_token.user_id;

  let query = `insert into movie_reservation(reservation_number,movie_id,user_id,start_time) values(${reservation_number},${movie_id},${user_id},"${start_time}")`;

  try {
    [result] = await connection.query(query);
    if (!result.affectedRows == 1) {
      res.status(400).json({ success: false });
      return;
    }
    res.status(200).json({ success: true, result });
  } catch (e) {
    res.status(500).json({ success: false, e });
  }
};
//@desc     delete reservation
//@route    DELETE /api/v1/reservations/delete
//@parameters   reservation_number , movie_id, start_time
exports.deleteReservation = async (req, res, next) => {
  let reservation_number = req.body.reservation_number;
  let movie_id = req.body.movie_id;
  let start_time = req.body.start_time;
  let user_id = req.movie_token.user_id;

  try {
    let query = `select *,case when TIMESTAMPDIFF(minute,now() ,start_time) >= 30 then true else false end as end from movie_reservation where user_id = ${user_id} and movie_id = ${movie_id} and start_time = "${start_time}"`;
    console.log(query);
    [rows] = await connection.query(query);
    console.log("hi", rows[0].end);
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].end == 0) {
        res
          .status(401)
          .json({ success: false, message: "예약 취소 시간 오버" });
        break;
      }
    }
  } catch (e) {
    res.status(500).json({ success: false, e });
    return;
  }

  try {
    for (let i = 0; i < reservation_number.length; i++) {
      let number = reservation_number[i];

      let query = `delete from movie_reservation where reservation_number = ${number} and movie_id =${movie_id} and user_id = ${user_id} and start_time = "${start_time}"`;
      console.log(query);
      [result] = await connection.query(query);
      if (!result.affectedRows == 1) {
        res.status(400).json({ success: false });
        return;
      }
    }
    res.status(200).json({ success: true, result });
  } catch (e) {
    res.status(500).json({ success: false, e });
  }
};
//@desc     get reservation
//@route    GET /api/v1/reservations?offset=0&limit
//@parameters
exports.getMyReservation = async (req, res, next) => {
  let user_id = req.movie_token.user_id;
  let offset = req.query.offset;
  let limit = req.query.limit;
  if (limit > 50) {
    res.status(400).json({ success: false });
    return;
  }

  let query = `select * from movie_reservation where user_id = ${user_id} limit ${offset},${limit}`;
  try {
    [rows] = await connection.query(query);
    for (let i = 0; i < rows.length; i++) {
      delete rows[i].user_id;
    }
    res.status(200).json({ success: true, rows });
  } catch (e) {
    res.status(500).json({ success: false, e });
  }
};

//@desc     get searchReservation
//@route    GET /api/v1/reservations/search?movie_id=1&datetime=&offset=0&limit
//@parameters
exports.searchReservation = async (req, res, next) => {
  let datetime = req.query.datetime;
  let movie_id = req.query.movie_id;
  let offset = req.query.offset;
  let limit = req.query.limit;
  if (limit > 50) {
    res.status(400).json({ success: false });
    return;
  }

  let query = `select * from movie_reservation where movie_id = ${movie_id} and start_time = "${datetime}" limit ${offset},${limit}`;
  if (datetime == null) {
    query = `select * from movie_reservation where movie_id = ${movie_id} limit ${offset},${limit}`;
  } else if ((movie_id = null)) {
    query = `select * from movie_reservation where start_time = "${datetime} limit ${offset},${limit}`;
  }

  try {
    [rows] = await connection.query(query);

    res.status(200).json({ success: true, rows });
  } catch (e) {
    res.status(500).json({ success: false, e });
  }
};
