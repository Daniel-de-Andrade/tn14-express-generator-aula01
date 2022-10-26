const express = require("express"),
  router = express.Router(),
  controller = require('../controllers/users')

router.get("/:id", controller.show)
router.get("/", controller.index)

module.exports = router
