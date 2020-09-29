/** @format */

const connection = require("../configs/config");

let selectQuery = `SELECT username, phone_number, image FROM users `;

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
      const queryStr = `UPDATE users SET ? WHERE users.id = ${id}`;
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
