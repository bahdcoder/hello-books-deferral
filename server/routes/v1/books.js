const express = require("express");

const router = express.Router();
const {
  BookController
} = require("../../middlewares/controllers/bookControllers");

router.post("/add", BookController.addBooks);

module.exports = router;
