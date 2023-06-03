const express = require("express");
const { ctrlWrapper } = require("../../middlewares");

const { orders: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/", ctrlWrapper(ctrl.add));

module.exports = router;
