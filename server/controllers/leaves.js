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
Leaves.oneLeave = Id => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM Conges WHERE Id = ?`, [Id], (err, res) => {
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
    const params = [Conges.CongesDispo, Conges.DebutConges, Conges.FinConges];
    const query = `INSERT INTO Conges (CongesDispo, DebutConges, FinConges) VALUES (?, ?, ?)`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//UPDATE one Leave
Leaves.updateLeave = (Conges, Id) => {
  return new Promise((resolve, reject) => {
    const params = [
      Conges.CongesDispo,
      Conges.DebutConges,
      Conges.FinConges,
      Id
    ];
    const query = `UPDATE Conges SET CongesDispo = ?, DebutConges = ?, FinConges = ? WHERE Id = ?`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//DELETE one Leave
Leaves.deleteLeave = Id => {
  return new Promise((resolve, reject) => {
    conn.query(`DELETE FROM Conges WHERE Id = ?`, [Id], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

module.exports = Leaves;
