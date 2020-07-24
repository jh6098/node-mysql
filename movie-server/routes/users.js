const express = require("express");
const router = express.Router();
const {
  getAllMovies, // 영화데이터 불러오기
  searchMoive, // 영화명 검색해서가져오기
  year, // 연도내림차순으로 정렬해서 가져오기
  attendance, // 관객수 내림차순 정렬해서 가져오기
} = require("../controllers/users");

const router = express.Router();

router.route("/").get(getAllMovies, searchMoive, year, attendance);

module.exports = router;
