const connection = require("../configs/config");
const db = require("../configs/config");
// const moment = require("moment");

const transactionModel = {
  transferHistory: (id, query) => {
    const page = query.page
    const limit = query.limit
    const offset = (page - 1) * query.limit
    let queryStr = `
    SELECT users.username, users.image, transaction.trans_amount, transaction.transfer_date
    FROM transaction JOIN users ON users.id = transaction.reciever_id 
    WHERE transaction.sender_id = ${id} ORDER BY transfer_date DESC LIMIT ? OFFSET ?`;
    return new Promise((resolve, reject) => {
      connection.query(queryStr, [Number(limit), offset], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  historyByWeek: (id) => {
    let queryStr= `SELECT users.username, users.image, transaction.trans_amount, transaction.transfer_date
     FROM transaction JOIN users ON users.id = transaction.reciever_id WHERE transaction.sender_id = ${id} 
     AND YEARWEEK(transfer_date) = YEARWEEK(NOW()) ORDER BY transfer_date DESC`
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
  historyByMonth: (id) => {
    let queryStr= `
    SELECT users.username, users.image, transaction.trans_amount, transaction.transfer_date
    FROM transaction JOIN users ON users.id = transaction.reciever_id 
    WHERE transaction.sender_id = ${id} AND MONTH(transfer_date) = MONTH(NOW()) ORDER BY transfer_date DESC`
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
    return new Promise((resolve, reject) => {
      const { sender_id, reciever_id, trans_amount, notes } = body;
      let queryStr = `INSERT INTO transaction SET sender_id = ?, reciever_id = ?, trans_amount = ?, notes= ?, transfer_date = NOW() `;
      connection.query(
        queryStr,
        [sender_id, reciever_id, trans_amount, notes],
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            let qb = `SELECT balance FROM users WHERE id=? `;
            db.query(qb, [body.sender_id],(err, resData)=>{
              console.log(resData)
              if(err){
                reject({msg: 'Transaction Failed 1'})
              }else{
                let qbs = 'UPDATE users SET balance =? WHERE id =?'
                let balanceNew = (resData[0].balance === null?0 - Number(body.trans_amount)
                :Number(resData[0].balance) - Number(body.trans_amount))
                db.query(qbs, [balanceNew, body.sender_id], (err)=>{
                  if(err){
                    reject(err,{msg: 'Transaction Failed 2'})
                  }
                })
                db.query(qb, [body.reciever_id], (err, resDataReciver)=>{
                  if(err){
                    reject({msg:'Transaction Failed 3'})
                  }
                  let balanceNew = (resDataReciver[0].balance === null?0 + Number(body.trans_amount)
                :Number(resDataReciver[0].balance) + Number(body.trans_amount))
                db.query(qbs, [balanceNew, body.reciever_id], (err)=>{
                  if(err){
                    reject({msg:'Transaction Failed 4'})
                  }
                  resolve(data)
                })
                })
              }
            })
          }
        }
      );
    });
  },
};
module.exports = transactionModel;