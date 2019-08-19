const conn = require("../configDB");

let StaffLeaves = {};

//GET all Staff with Leaves
StaffLeaves.allStaffsLeaves = () => {
  return new Promise((resolve, reject) => {
    conn.query(
      `SELECT * FROM Personnel, Conges, Personnel_Conges WHERE Personnel.ID = Personnel_Conges.ID_PERSONNEL AND Conges.IDC = Personnel_Conges.ID_CONGES ORDER BY Personnel.Nom`,
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

//POST Staff_Leaves
StaffLeaves.postStaffLeaves = (Personnel, Conges, Personnel_Conges) => {
  return new Promise((resolve, reject) => {
    const params = [
      Conges.IDC,
      Personnel.ID,
      Personnel_Conges.ID_PERSONNEL,
      Personnel_Conges.ID_CONGES
    ];
    const query = `INSERT INTO Personnel_Conges (ID_PERSONNEL, ID_CONGES) SELECT ID, IDC FROM Personnel, Conges WHERE ID = ? AND IDC = ?`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//DELETE Staff_Leaves for Personnel
StaffLeaves.deleteStaffLeave = ID_PERSONNEL => {
  return new Promise((resolve, reject) => {
    conn.query(
      `DELETE FROM Personnel_Conges WHERE ID_PERSONNEL = ?`,
      [ID_PERSONNEL],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res[0]);
      }
    );
  });
};

//DELETE Staff_Leaves for CONGES
StaffLeaves.deleteLeaveStaff = ID_CONGES => {
  return new Promise((resolve, reject) => {
    conn.query(
      `DELETE FROM Personnel_Conges WHERE ID_CONGES = ?`,
      [ID_CONGES],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res[0]);
      }
    );
  });
};

module.exports = StaffLeaves;
