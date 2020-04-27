const express = require("express");
const {
  getNotes,
  getNote,
  createNote
} = require("../controllers/notes");
const { isAuth, authorize } = require("../middlewares/auth");
const router = express.Router();

// Notes Page
router
  .route("/")
  .get(isAuth, getNotes)
  .post(isAuth, authorize("admin"), createNote);

// Single Note
router
  .route("/:id")
  .get(isAuth, getNote);

module.exports = router;
