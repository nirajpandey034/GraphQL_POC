const pool = require("../../config/database");
const findAuthorByName = (name) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM authors where name="${name}"`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.find((author) => author.name === name));
    });
  });
};

const getAllAuthors = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM authors`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = { findAuthorByName, getAllAuthors };
