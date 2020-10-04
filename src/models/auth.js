/** @format */

const db = require("../configs/config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel = {
  register: (body) => {
    return new Promise((resolve, reject) => {
      // const checkUsername = "SELECT email FROM users WHERE email = ?";
      // db.query(checkUsername, [body.email], (err, data) => {
      // if (data.length) {
      // reject({ msg: "Your name already exist" });
      // } else {
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
  createPin: (body) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          reject(err);
        }
        const { pin, id} = body;
        bcrypt.hash(pin, salt, (err, hashedPin) => {
          if (err) {
            reject(err);
          }
          const newBody = { ...body, pin: hashedPin };
          const qs = `UPDATE users SET ? WHERE id= ?`;
          db.query(qs, [newBody, id], (err, data) => {
            if (!err) {
              // console.log(data)
              resolve(data);
            } else {
              reject(err);
            }
          });
        });
      });
    });
  },
};

module.exports = authModel;
