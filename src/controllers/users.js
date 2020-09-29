/** @format */

const usersModel = require("../models/users");
const formResponse = require("../helpers/form/formRespon");
const usersController = {
  getContact: (req, res) => {
    usersModel
      .getContact(req.query)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },
  searchReciever: (req, res) => {
    usersModel
      .searchReciever(req.query.username)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },
  editProfile: (req, res) => {
    usersModel
      .editProfile(req.params.id, req.body)
      .then((data) => {
        const responData ={
          ...req.body,
          msg:'update success'
        }
        formResponse.success(res, responData);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },
};

module.exports = usersController;
