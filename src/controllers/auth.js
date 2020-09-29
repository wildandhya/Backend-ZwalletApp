/** @format */

const authModel = require("../models/auth");
const formResponse = require("../helpers/form/formRespon");
const authController = {
  register: (req, res) => {
    authModel
      .register(req.body)
      .then((data) => {
        const responseData = {
          ...req.body,
          msg: "Register succses",
        };
        formResponse.success(res, responseData);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },
  login: (req, res) => {
    authModel
      .login(req.body)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  createPin: (req, res) => {
    authModel
      .createPin(req.params.id, req.body)
      .then((data) => {
        const responData ={
          ...req.body,
          msg:'update success'
        }
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = authController;
