const pool = require("./config.js");

let back_personnel = {};

back_personnel.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM personnel, conges where personnel.IDConges = conges.IDConges`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

back_personnel.one = id => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM personnel where id = ?`, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results[0]);
    });
  });
};

module.exports = back_personnel;
