const express = require("express");
const { createUser, loginUser, myInfo } = require("../controllers/users");
const auth = require("../middleware/auth");
const router = express.Router();

// /api/v1/users
router.route("/").post(createUser);

// /api/v1/users/login
router.route("/login").post(loginUser);
// /api/v1/users/me
router.route("/me").get(auth, myInfo);

module.exports = router;
