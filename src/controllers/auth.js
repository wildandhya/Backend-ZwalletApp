/** @format */

const authModel = require("../models/auth");
const formResponse = require("../helpers/form/formRespon");
const nodemailer = require("nodemailer")


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
  sendEmail: (req, res) => {
    authModel
      .sendEmail(req.body)
      .then((data) => {
        const transporter = nodemailer.createTransport({
          service:"gmail",
          auth:{
            user:"zwalletapps@gmail.com",
            pass:"zwallet15"
          }
        })

        console.log(data.email)
        console.log(data.otp)
        const mailOptions = {
          from: 'zwalletapps@gmail.com',
          to: data.email,
          subject:'Reset Password',
          text:`Here OTP code make it secret for anyone ${data.otp}`
        }

        transporter.sendMail(mailOptions, (error, info)=>{
          if(error){
            console.log(error)
          }else{
            console.log('Email Sent: ' + info.response)
          }
        })
        formResponse.success(res, data);
  }) 
  .catch((err) => {
    formResponse.error(res, err);
  });
  },
}


module.exports = authController;
