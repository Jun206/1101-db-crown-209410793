var express = require("express");
var router = express.Router();
const crown2Controller_93 = require("../controllers/crown2Controller_93");

/* GET home page. */
router.get("/", crown2Controller_93.getCategories);

module.exports = router;
