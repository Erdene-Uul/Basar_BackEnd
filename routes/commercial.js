const express = require("express");

const {
  getCommercials,
  getCommercial,
  createCommercial,
  deleteCommercial,
  updateCommercial,
} = require("../controller/commercial");

const router = express.Router();

//"/api/v1/books"
router.route("/").get(getCommercials).post(createCommercial);

router.route("/:id").get(getCommercial).delete(deleteCommercial).put(updateCommercial);

module.exports = router;
