const express = require("express");
const {
  createUser,
  loginUser,
  changePasswd,
  getMyInfo,
} = require("../controllers/users");

const router = express.Router(); // 경로입력

router.route("/").post(createUser);
router.route("/:id").get(getMyInfo);
router.route("/login").post(loginUser);
router.route("/change").post(changePasswd);

module.exports = router;
