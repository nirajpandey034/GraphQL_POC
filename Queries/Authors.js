const pool = require("../config/database");
const findAuthorByName = (name) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM Authors where name=${name}`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.find((item) => item.id === id));
    });
  });
};

const getAllAuthors = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM Authors`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = { findAuthorByName, getAllAuthors };
