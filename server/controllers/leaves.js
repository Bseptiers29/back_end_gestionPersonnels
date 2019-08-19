const conn = require("../configDB");

let Leaves = {};

//GET all Leaves
Leaves.allLeaves = () => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM Conges`, (err, res) => {
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
    conn.query(`SELECT * FROM Conges WHERE IDC = ?`, [IDC], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

//POST new Leave
Leaves.postLeave = Conges => {
  return new Promise((resolve, reject) => {
    const params = [Conges.Nbconges, Conges.Debutconges, Conges.Finconges];
    const query = `INSERT INTO Conges (Nbconges, Debutconges, Finconges) VALUES ( ?, ?, ?)`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//UPDATE one Leave
Leaves.updateLeave = (Conges, IDC) => {
  return new Promise((resolve, reject) => {
    const params = [Conges.Nbconges, Conges.Debutconges, Conges.Finconges, IDC];
    const query = `UPDATE Conges SET Nbconges = ?, Debutconges = ?, Finconges = ? WHERE IDC = ?`;
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
    conn.query(`DELETE FROM Conges WHERE IDC = ?`, [IDC], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

module.exports = Leaves;
