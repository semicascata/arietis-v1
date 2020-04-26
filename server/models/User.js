const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "Insert a user"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "Insert an email"]
  },
  password: {
    type: String,
    required: [true, "Insert an password"]
  },
  role: {
    type: String,
    default: "user"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Encrypting password before saving
userSchema.pre("save", async function(next) {
  if(!this.isModified("password")) {
    next();
  }

  // Hashing password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", userSchema);
