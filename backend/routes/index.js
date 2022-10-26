var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express Generator",
    subtitle: "Aula 01 de Express Generator",
  });
});

module.exports = router;
