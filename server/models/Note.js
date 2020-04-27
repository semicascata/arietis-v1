const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please, insert a title"],
    unique: true
  },
  text: {
    type: String,
    required: [true, "Please, insert a text"],
    maxlength: [1000, "Text cannot be more than 1000 characters"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Note", noteSchema);
