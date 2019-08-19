const conn = require("../configDB");

let Staff = {};

//GET all Staffs
Staff.allStaffs = () => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM PERSONNEL ORDER BY NOM`, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//GET one Staff
Staff.oneStaff = ID => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM PERSONNEL WHERE ID = ?`, [ID], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

//POST new Staff
Staff.postStaff = PERSONNEL => {
  return new Promise((resolve, reject) => {
    const params = [
      PERSONNEL.PRENOM,
      PERSONNEL.NOM,
      PERSONNEL.SECURITESOCIALE,
      PERSONNEL.ANCIENNETE,
      PERSONNEL.DATE_NAISSANCE,
      PERSONNEL.EMAIL,
      PERSONNEL.ADRESSE,
      PERSONNEL.TELEPHONE,
      PERSONNEL.PROFESSION,
      PERSONNEL.SERVICE,
      PERSONNEL.IMAGE
    ];
    const query = `INSERT INTO Personnel (PRENOM, NOM, SECURITESOCIALE, ANCIENNETE, DATE_NAISSANCE, EMAIL, ADRESSE, TELEPHONE, PROFESSION, SERVICE, IMAGE) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//UPDATE one Staff
Staff.updateStaff = (PERSONNEL, ID) => {
  return new Promise((resolve, reject) => {
    const params = [
      PERSONNEL.PRENOM,
      PERSONNEL.NOM,
      PERSONNEL.SECURITESOCIALE,
      PERSONNEL.ANCIENNETE,
      PERSONNEL.DATE_NAISSANCE,
      PERSONNEL.EMAIL,
      PERSONNEL.ADRESSE,
      PERSONNEL.TELEPHONE,
      PERSONNEL.PROFESSION,
      PERSONNEL.SERVICE,
      PERSONNEL.IMAGE,
      ID
    ];
    const query = `UPDATE PERSONNEL SET PRENOM = ?, NOM = ?, SECURITESOCIALE = ?, ANCIENNETE = ?, DATE_NAISSANCE = ?, EMAIL = ?, ADRESSE = ?, TELEPHONE = ?, PROFESSION = ?, SERVICE = ?, IMAGE = ? WHERE ID = ?`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//DELETE one Staff
Staff.deleteStaff = ID => {
  return new Promise((resolve, reject) => {
    conn.query(`DELETE FROM PERSONNEL WHERE ID = ?`, [ID], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

module.exports = Staff;
