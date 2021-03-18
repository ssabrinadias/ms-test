const express = require("express");
const router = express.Router();
const catalog = require("../services/catalog");

router.get("/", catalog)


module.exports = router;