var testController = require("../../controllers/index");

var router = require('express').Router();

router.get("/", testController.testFunction);
router.get("/count", testController.counts);

module.exports = router;