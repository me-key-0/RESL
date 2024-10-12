const express = require("express");
const router = express.Router();
const {
  
} = require("../controllers/managerController");


router.route("/").get();

router.route("/").post();

router.route("/").put();

router.route("/").delete();

module.exports = router;
