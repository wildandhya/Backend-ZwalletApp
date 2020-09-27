/** @format */

const transactionRouter = require("express").Router();
const transactionController = require("../controllers/transaction");
const uploadImage = require("../helpers/middleware/uploadImage");

transactionRouter.post("/transfer", transactionController.transfer);
transactionRouter.get("/transfer/:id", transactionController.transferHistory);

module.exports = transactionRouter;
