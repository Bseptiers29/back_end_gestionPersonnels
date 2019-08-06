const conn = require("../configDB");

let Leaves = {};

Leaves.allConges = () => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM conges`, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Leaves.oneConge = IDConges => {
  return new Promise((resolve, reject) => {
    conn.query(
      `SELECT * FROM conges WHERE IDConges = ?`,
      [IDConges],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res[0]);
      }
    );
  });
};

Leaves.postConges = conges => {
  return new Promise((resolve, reject) => {
    const params = [conges.joursconges, conges.congespris];
    const query = `INSERT INTO conges (joursconges, congespris) VALUES (?, ?)`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Leaves.updateConges = (conges, IDConges) => {
  return new Promise((resolve, reject) => {
    const params = [conges.joursconges, conges.congespris, IDConges];
    const query = `UPDATE conges SET joursconges = ?, congespris = ? WHERE IDConges = ?`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Leaves.deleteConges = IDConges => {
  return new Promise((resolve, reject) => {
    conn.query(
      `DELETE FROM conges WHERE IDConges = ?`,
      [IDConges],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res[0]);
      }
    );
  });
};

module.exports = Leaves;
