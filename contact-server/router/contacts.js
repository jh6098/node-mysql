const express = require("express");

// 컨트롤러 컨텍츠 다하고 수정해줘야됨(일단 다 지웠음.)
// 컨트롤러에 작성한,api 함수를 가져온다.
const {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
  searchContact,
} = require("../controllers/contacts");

const router = express.Router();

// 컨트롤러에서 보면 get함수 post 함수 어떻게 들어올지 정의를 내려줬엇고
// 그것을 토대로 가져온것이다.
router
  .route("/")
  .get(getAllContacts)
  .post(createContact)
  .put(updateContact)
  .delete(deleteContact);
router.route("/search").get(searchContact);
module.exports = router;
