const express = require("express");

const {
  getNews,
  getContent,
  createContent,
  deleteContent,
  updateContent,
} = require("../controller/news");

const router = express.Router();

//"/api/v1/books"
router.route("/").get(getNews).post(createContent);

router.route("/:id").get(getContent).delete(deleteContent).put(updateContent);

module.exports = router;
