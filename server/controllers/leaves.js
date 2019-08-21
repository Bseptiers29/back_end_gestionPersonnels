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
Leaves.oneLeave = Id_Personnel => {
  return new Promise((resolve, reject) => {
    conn.query(
      `SELECT * FROM Conges WHERE Id_Personnel = ?`,
      [Id_Personnel],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res[0]);
      }
    );
  });
};

//POST new Leave
Leaves.postLeave = Conges => {
  return new Promise((resolve, reject) => {
    const params = [
      Conges.CongesDispo,
      Conges.DebutConges,
      Conges.FinConges,
      Conges.ID_Personnel
    ];
    const query = `INSERT INTO Conges (DebutConges, FinConges, ID_Personnel) VALUES (?, ?, ?, ?)`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//UPDATE one Leave
Leaves.updateLeave = (Conges, Idc) => {
  return new Promise((resolve, reject) => {
    const params = [
      Conges.CongesDispo,
      Conges.DebutConges,
      Conges.FinConges,
      Conges.ID_Personnel,
      Idc
    ];
    const query = `UPDATE Conges SET DebutConges = ?, FinConges = ?, ID_Personnel = ? WHERE Idc = ?`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//DELETE one Leave
Leaves.deleteLeave = Idc => {
  return new Promise((resolve, reject) => {
    conn.query(`DELETE FROM Conges WHERE Idc = ?`, [Idc], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

module.exports = Leaves;
