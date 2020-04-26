const express = require("express");
const {
  getWelcome
} = require("../controllers/arietis");
const { isAuth, authorize } = require("../middlewares/auth");
const router = express.Router();

// Welcome Page
router
  .route("/")
  .get(isAuth, authorize("admin"), getWelcome);

module.exports = router;
