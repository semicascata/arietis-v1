const express = require("express");
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
} = require("../controllers/notes");
const { isAuth, authorize } = require("../middlewares/auth");
const router = express.Router();

// Notes Page
router
  .route("/")
  .get(getNotes)
  .post(isAuth, authorize("admin"), createNote);

// Single Note
router
  .route("/:id")
  .get(getNote)
  .put(isAuth, updateNote)
  .delete(isAuth, deleteNote);

module.exports = router;
