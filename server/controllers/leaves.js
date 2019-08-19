const conn = require("../configDB");

let Leaves = {};

//GET all Leaves
Leaves.allLeaves = () => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM CONGES`, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//GET one Leave
Leaves.oneLeave = IDC => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM CONGES WHERE IDC = ?`, [IDC], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

//POST new Leave
Leaves.postLeave = CONGES => {
  return new Promise((resolve, reject) => {
    const params = [CONGES.Nbconges, CONGES.Debutconges, CONGES.Finconges];
    const query = `INSERT INTO CONGES (Nbconges, Debutconges, Finconges) VALUES ( ?, ?, ?)`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//UPDATE one Leave
Leaves.updateLeave = (CONGES, IDC) => {
  return new Promise((resolve, reject) => {
    const params = [CONGES.Nbconges, CONGES.Debutconges, CONGES.Finconges, IDC];
    const query = `UPDATE CONGES SET Nbconges = ?, Debutconges = ?, Finconges = ? WHERE IDC = ?`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//DELETE one Leave
Leaves.deleteLeave = IDC => {
  return new Promise((resolve, reject) => {
    conn.query(`DELETE FROM CONGES WHERE IDC = ?`, [IDC], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

module.exports = Leaves;
