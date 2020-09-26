/** @format */

const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const usersRouter = require("./users");

router.use("/", authRouter);
router.use("/", usersRouter);

module.exports = router;
