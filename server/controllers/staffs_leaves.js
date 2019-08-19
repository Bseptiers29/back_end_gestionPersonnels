const conn = require("../configDB");

let StaffLeaves = {};

//GET all Staff with Leaves
StaffLeaves.allStaffsLeaves = () => {
  return new Promise((resolve, reject) => {
    conn.query(
      `SELECT * FROM PERSONNEL, CONGES, PERSONNEL_CONGES WHERE PERSONNEL.ID = PERSONNEL_CONGES.ID_PERSONNEL AND CONGES.IDC = PERSONNEL_CONGES.ID_CONGES ORDER BY PERSONNEL.NOM`,
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
StaffLeaves.postStaffLeaves = (PERSONNEL, CONGES, PERSONNEL_CONGES) => {
  return new Promise((resolve, reject) => {
    const params = [
      CONGES.IDC,
      PERSONNEL.ID,
      PERSONNEL_CONGES.ID_PERSONNEL,
      PERSONNEL_CONGES.ID_CONGES
    ];
    const query = `INSERT INTO PERSONNEL_CONGES (ID_PERSONNEL, ID_CONGES) SELECT ID, IDC FROM PERSONNEL, CONGES WHERE ID = ? AND IDC = ?`;
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
      `DELETE FROM PERSONNEL_CONGES WHERE ID_PERSONNEL = ?`,
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
      `DELETE FROM PERSONNEL_CONGES WHERE ID_CONGES = ?`,
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
