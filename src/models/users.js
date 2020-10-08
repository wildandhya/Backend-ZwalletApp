/** @format */

const connection = require("../configs/config");
const bcrypt = require("bcrypt");

let selectQuery = `SELECT id, username, phone_number, image, balance FROM users `;

const usersModel = {
  getContact: (query) => {
    let queryStr = "";
    if (query.search === undefined) {
      queryStr = `${selectQuery}`;
    } else {
      queryStr = `${selectQuery} WHERE users.username LIKE '%${query.search}%'`;
    }
    return new Promise((resolve, reject) => {
      connection.query(queryStr, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  userEdit: (body) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE users SET ? WHERE users.email = ?`;
      connection.query(queryStr, [body, body.email], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  editImage: (body) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE users SET image=? WHERE email = ?`;
      connection.query(queryStr, [body.image, body.email], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  editPin: (body) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE users SET pin=? WHERE email = ?`;
      connection.query(queryStr, [body.pin, body.email], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  checkPin: (body) => {
    const {pin ,email} = body
    let queryStr = `SELECT pin FROM users WHERE email = ? `;
    return new Promise((resolve, reject) => {
      connection.query(queryStr, [email], (err, data) => {
        if (err) {
          reject(err);          
        } else {
          console.log(pin)
          console.log(data)
          if(pin === data[0].pin){
            resolve(data);
          }else{
            reject({
              error:err,
              msg:'your pin dont match'
            })
          }

        }
      });
    });
  },
  checkPass: (body) => {
    const {password ,email, newPassword} = body
    let queryStr = `SELECT password FROM users WHERE email = ? `;
    return new Promise((resolve, reject) => {
      connection.query(queryStr, [email], (err, data) => {
        if (err) {
          reject(err);          
        } else {
          console.log(data)
          bcrypt.compare(password, data[0].password, (err, result) => {
            if (!result) {
              reject("password is incorect");
            }
            if (result) {
              const queryUpdate = `UPDATE users set password=? WHERE email=?`;
              bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                  reject(err);
                }
                bcrypt.hash(newPassword, salt, (err, hashPass) => {
                  if (err) {
                    reject(err);
                  }
                  // const newBody = { ...body, password: hashPass };
                  connection.query(queryUpdate, [hashPass, email], (err, data) => {
                    if (!err) {
                      resolve(data);
                    } else {
                      reject(err);
                    }
                  });
                })
              })
            }
          })
          

        }
      });
    });
  },
};

module.exports = usersModel;
