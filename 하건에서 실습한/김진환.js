const connection = require("../mysql_connection");

// @ 영화 예매하기
// @route POST api/v1/reservation
// @reqest showtime , user_id , movie_id , seat
exports.reservationMovie = async (req, res, next) => {
  let user_id = req.user.id;
  let showtime = req.body.showtime;
  let movie_id = req.body.movie_id;
  let seat = req.body.seat;

  let query = `insert into reservation(showtime,seat,user_id,movie_id)\
     values("${showtime}","${seat}",${user_id},${movie_id})`;

  if (seat > 100) {
    res.status(500).json({ success: false, msg: "좌석은 10자리가 최대입니다" });
    return;
  }

  try {
    [result] = await connection.query(query);
    res.status(200).json({ success: true, msg: result });
  } catch (e) {
    if (e.errno == 1062) {
      res.status(500).json({ success: false, msg: "이미 예약한 자리입니다" });
    }
  }
};

//@desc 특정 영화 , 상영시간의 좌석 정보 확인
// @ 영화 예매하기
// @route GET api/v1/reservation
// @reqest  titile , showtime
exports.selectReservation = async (req, res, next) => {
  let user_id = req.user.id;

  let query = `select m.title , r.showtime , r.seat from movie as m join reservation as r\
  on m.id = r.movie_id   group by title`;

  try {
    [rows] = await connection.query(query);
    res.status(200).json({ success: true, msg: rows });
    return;
  } catch (e) {
    res.status(400).json({ success: false, error: e });
    console.log(e);
    return;
  }
};

//@desc 내가 예약한 정보 확인하기
// @route GET api/v1/reservation/my
// @reqest user_id
exports.myReservation = async (req, res, next) => {
  let user_id = req.user.id;
  let query = `select   mu.email ,  m.title , m.year ,r.showtime\ 
    , r.seat , r.created_at as reservation_created_at\
    from movie_user as mu join reservation as r\
    on mu.id = r.user_id join movie as m\
    on r.movie_id = m.id where mu.id = ${user_id}`;

  try {
    [rows] = await connection.query(query);
    res.status(200).json({ success: true, msg: rows });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};

// @desc 예약취소
// @route GET api/v1/reservation/delete
// @reqest user_id
exports.deleteReservation = async (req, res, next) => {
  let user_id = req.user.id;
  let canceltime = req.body.canceltime;

  let query = `select * from reservation where user_id = ${user_id}`;
  let reservation;

  try {
    [rows] = await connection.query(query);
    reservation = rows[0].created_at;
    if (reservation >= canceltime) {
      res
        .status(500)
        .json({ success: false, msg: "예약을 취소 할 수 없습니다" });
      return;
    }
    query = `delete from reservation where user_id =${user_id}`;
    try {
      [result] = await connection.query(query);
      res.status(200).json({ success: true, msg: result });
    } catch (e) {
      res.status(400).json({ success: false, error: e });
    }
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};
