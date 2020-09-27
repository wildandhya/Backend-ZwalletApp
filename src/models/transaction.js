const connection = require("../configs/config");
// const moment = require("moment");

const transactionModel = {
  transferHistory: (id) => {
    let queryStr = `SELECT users.username AS reciever, transaction.amount, transaction.description, transaction.transfer_date
    FROM transaction JOIN users ON users.id = transaction.reciever_id WHERE transaction.sender_id = ${id}`;
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
  transfer: (body) => {
    const { sender_id, reciever_id, amount, description } = body;
    let queryStr = `INSERT INTO transaction SET sender_id = ?, reciever_id = ?, amount = ?, description = ?, transfer_date = NOW() `;
    return new Promise((resolve, reject) => {
      connection.query(
        queryStr,
        [sender_id, reciever_id, amount, description],
        (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        }
      );
    });
  },
};
module.exports = transactionModel;