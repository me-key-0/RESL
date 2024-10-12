const express = require("express");
const router = express.Router();
const {
  
} = require("../controllers/userController");


router.route("/").get();

router.route("/").post();

router.route("/").put();

router.route("/").delete();

module.exports = router;
