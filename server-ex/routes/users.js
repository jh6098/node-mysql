const express = require("express");
const auth = require("../middleware/auth"); //auth란 ?
const {
  createUser,
  loginUser,
  changePasswd,
  getMyInfo,
} = require("../controllers/users");

const router = express.Router(); // 경로입력

//경로가 똑같으면 합칠수가 있다.
router.route("/").post(createUser).get(auth, getMyInfo);
router.route("/login").post(loginUser);
router.route("/change").post(changePasswd);

module.exports = router;
