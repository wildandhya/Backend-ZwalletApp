/** @format */

const transactionModel = require("../models/transaction");
const formResponse = require("../helpers/form/formRespon");
const transactionController = {
  transfer: (req, res) => {
    transactionModel
      .transfer(req.body)
      .then((data) => {
          const responData={
              ...req.body,
          }
        formResponse.success(res, responData);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },
  transferHistory: (req, res) => {
    transactionModel
      .transferHistory(req.params.id, req.query)
      .then((data) => {
        formResponse.pagination(req, res, data);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },
  historyByWeek: (req, res) => {
    transactionModel
      .historyByWeek(req.params.id)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },
  historyByMonth: (req, res) => {
    transactionModel
      .historyByWeek(req.params.id)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },

};

module.exports = transactionController;
