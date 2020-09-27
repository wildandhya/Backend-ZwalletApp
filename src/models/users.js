/** @format */

const connection = require("../configs/config");

let selectQuery = `SELECT users.username, users_detail.phone_number FROM users JOIN users_detail ON users.id = 
users_detail.user_id`;

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
  editProfile: (id, body) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE users, users_detail SET ? WHERE users.id = users_detail.user_id AND users.id = ${id}`;
      connection.query(queryStr, body, (err, data) => {
        if (!err) {
          console.log(data);
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = usersModel;
