const express = require("express");
const {
  getLogin,
  getRegister,
  loginHandler,
  registerHandler,
  logoutSession
} = require("../controllers/users");

const router = express.Router();

// Login
router
  .route("/login")
  .get(getLogin)
  .post(loginHandler);

// Register
router
  .route("/register")
  .get(getRegister)
  .post(registerHandler);

// Logout
router
  .route("/logout")
  .get(logoutSession);

module.exports = router;
