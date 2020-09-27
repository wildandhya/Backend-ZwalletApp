/** @format */

const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const usersRouter = require("./users");
const transactionRouter = require("./transaction");

router.use("/", authRouter);
router.use("/", usersRouter);
router.use("/", transactionRouter);

module.exports = router;
