const connection = require("../configs/config");
// const moment = require("moment");

const transactionModel = {
  transferHistory: (id) => {
    let queryStr = `SELECT reciever_id, transaction.amount, transaction.notes, transaction.transfer_date
    FROM transaction WHERE transaction.sender_id = ${id}`;
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
    const { sender_id, reciever_id, amount, notes } = body;
    let queryStr = `INSERT INTO transaction SET sender_id = ?, reciever_id = ?, amount = ?, notes= ?, transfer_date = NOW() `;
    return new Promise((resolve, reject) => {
      connection.query(
        queryStr,
        [sender_id, reciever_id, amount, notes],
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