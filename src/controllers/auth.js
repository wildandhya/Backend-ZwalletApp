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
  createPin: (req, res) => {
    authModel
      .createPin(req.body)
      .then((data) => {
        // console.log(req.body)
        const responData ={
          ...req.body,
          msg:'create pin success'
        }
        formResponse.success(res, responData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = authController;
