const express = require("express");
const {
  getWelcome
} = require("../controllers/arietis");
const { isAuth } = require("../middlewares/auth");
const router = express.Router();

// Welcome Page
router
  .route("/")
  .get(isAuth, getWelcome);

module.exports = router;
