/** @format */

const connection = require("../configs/config");

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
};

module.exports = usersModel;
