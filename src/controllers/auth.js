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
          id:data.insertId,
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
  checkEmail: (req, res) => {
    authModel
      .checkEmail(req.body)
      .then((data) => {
        const responData ={
          ...req.body,
          msg:'your email match'
        }
        formResponse.success(res, responData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  resetPassword: (req, res) => {
    authModel
      .resetPassword(req.body)
      .then((data) => {
        const responData ={
          ...req.body,
          msg:'your password was successfuly updated'
        }
        formResponse.success(res, responData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = authController;
