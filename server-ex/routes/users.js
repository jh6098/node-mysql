const express = require("express");
const { createUser } = require("../controllers/users");

const router = express.Router(); // 경로입력

router.route("/").post(createUser);

module.exports = router;
