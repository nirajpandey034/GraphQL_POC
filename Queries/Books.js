const pool = require("../config/database");
const findBookById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM Books where id=${id}`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.find((item) => item.id === id));
    });
  });
};

const getAllBooks = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM Books`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = { findBookById, getAllBooks };
