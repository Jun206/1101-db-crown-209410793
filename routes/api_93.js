var express = require("express");
var router = express.Router();
const apiCrown2Controller_93 = require("../controllers/apiCrown2Controller_93");

/* GET home page. */
router.get("/category_93", apiCrown2Controller_93.getCategories);

module.exports = router;
