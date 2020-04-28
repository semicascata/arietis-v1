const express = require("express");
const {
  loginHandler,
  registerHandler,
  logoutSession
} = require("../controllers/users");

const router = express.Router();

// Login
router
  .route("/login")
  .post(loginHandler);

// Register
router
  .route("/register")
  .post(registerHandler);

// Logout
router
  .route("/logout")
  .get(logoutSession);

module.exports = router;
