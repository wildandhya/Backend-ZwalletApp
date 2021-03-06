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
  userEdit: (req, res) => {
    usersModel
      .userEdit( req.body)
      .then((data) => {
        // console.log(req.body)
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
  editImage: (req, res) => {
    usersModel
      .editImage( req.body)
      .then((data) => {
        const responData ={
          image:req.body.image
        }
        formResponse.success(res, responData);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },
  checkPin: (req, res) => {
    usersModel
      .checkPin(req.body)
      .then((data) => {
        const responData ={
          ...req.body,
          msg:'Pin Match'
        }
        formResponse.success(res, responData);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },
  editPin: (req, res) => {
    usersModel
      .editPin(req.body)
      .then((data) => {
        const responData ={
          pin:req.body.pin
        }
        formResponse.success(res, responData);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },
  checkPass: (req, res) => {
    usersModel
      .checkPass(req.body)
      .then((data) => {
        const responData ={
          ...req.body,
          msg:'Password Match'
        }
        formResponse.success(res, responData);
      })
      .catch((error) => {
        formResponse.error(res, error);
      });
  },
};

module.exports = usersController;
