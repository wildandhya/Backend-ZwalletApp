/** @format */

const db = require("../configs/config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel = {
  register: (body) => {
    return new Promise((resolve, reject) => {
      
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          reject(err);
        }
        const { username, email, password } = body;
        bcrypt.hash(password, salt, (err, hashedPassword) => {
          if (err) {
            reject(err);
          }
       
         const qs = "INSERT INTO users SET ?; ";
         const newBody = { ...body, password: hashedPassword };
          db.query(qs, [newBody], (err, data) => {
            if (!err) {
              resolve(data);
            } else {
              reject(err);
            }
          });
        });
      });
      // }
      // });
    });
  },
  login: (body) => {
    return new Promise((resolve, reject) => {
      const checkUsername = "SELECT email FROM users WHERE email = ?";
      db.query(checkUsername, [body.email], (err, data) => {
        if (!data.length) {
          reject("msg: email not found");
        } else {
          const qs =
            "SELECT users.id, users.username, users.image, users.balance, users.email, users.password FROM users WHERE users.email=?";
          db.query(qs, [body.email], (err, data) => {
            console.log(data)
            if (err) {
              reject(err);
            }
            if (data.length) {
              bcrypt.compare(body.password, data[0].password, (err, result) => {
                if (result) {
                  const {  email } = body;
                    const { id, username, image, balance } = data[0];
                  const payload = {
                    username,
                    email,
                  };
                  const token = jwt.sign(payload, process.env.SECRET_KEY);
                  const msg = "login success";
                  // const usernameApi = username
                  // const emailApi = email
                  // // const idApi = id
                  resolve({ msg, token, id, username, email, image, balance});
                }
                if (!result) {
                  reject({
                    msg: "wrong password",
                  });
                }
                if (err) {
                  reject(err);
                }
              });
            }
          });
        }
      });
    });
  },
  
  checkEmail:(body)=>{
    const {email} = body
    const checkEmailQuery = `SELECT email FROM users WHERE email = ?`;
    return new Promise((resolve, reject) => {
      db.query(checkEmailQuery, [email], (err, data) => {
        if (!err) {
          if (data.length) {
            resolve(data[0]);
         } else {
            reject({ msg: 'email not found..!' })
         }
          
        } else {
          reject(err);         
          }
        })
      })
    },
  resetPassword:(body)=>{
        const {password, email} = body
        const queryUpdate = `UPDATE users SET password=? WHERE email=?`;
        return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            reject(err);
          }
          bcrypt.hash(password, salt, (err, hashPass) => {
            if (err) {
              reject(err);
            }
            // const bodyNew = {...body, password:hashPass}
            db.query(queryUpdate, [hashPass, email], (err, data) => {
              if (!err) {
                resolve(data);
              } else {
                reject(err);
              }
            });
          })
        })
        })
  },
  sendEmail:(body)=>{
    const qs = `SELECT id, email FROM users WHERE email=?`;
    return new Promise((resolve, reject) => {
        db.query(qs, [body.email], (err, data) => {
          if (err) {
            reject(err);
          } 
          if (data.length){
            var otp = Math.random()
            otp = otp * 10000
            otp = parseInt(otp)
            console.log(otp)
            resolve({email:data[0].email, otp: otp});
          }
        });
      })
},

  

};

module.exports = authModel;
