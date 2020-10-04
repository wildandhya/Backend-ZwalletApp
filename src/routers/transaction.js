/** @format */

const transactionRouter = require("express").Router();
const transactionController = require("../controllers/transaction");
const uploadImage = require("../helpers/middleware/uploadImage");

transactionRouter.post("/transfer", transactionController.transfer);
transactionRouter.get("/transfer/:id", transactionController.transferHistory);
transactionRouter.get("/transferHistory/:id", transactionController.historyByWeek);
transactionRouter.get("/transferHistory/:id", transactionController.historyByMonth);

module.exports = transactionRouter;
