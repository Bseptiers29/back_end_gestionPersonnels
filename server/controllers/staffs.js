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
      PERSONNEL.Prenom,
      PERSONNEL.Nom,
      PERSONNEL.Securitesociale,
      PERSONNEL.Anciennete,
      PERSONNEL.Date_naissance,
      PERSONNEL.Email,
      PERSONNEL.Adresse,
      PERSONNEL.Telephone,
      PERSONNEL.Profession,
      PERSONNEL.Service,
      PERSONNEL.Image
    ];
    const query = `INSERT INTO PERSONNEL (Prenom, Nom, Securitesociale, Anciennete, Date_naissance, Email, Adresse, Telephone, Profession, Service, Image) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`;
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
      PERSONNEL.Prenom,
      PERSONNEL.Nom,
      PERSONNEL.Securitesociale,
      PERSONNEL.Anciennete,
      PERSONNEL.Date_naissance,
      PERSONNEL.Email,
      PERSONNEL.Adresse,
      PERSONNEL.Telephone,
      PERSONNEL.Profession,
      PERSONNEL.Service,
      PERSONNEL.Image,
      ID
    ];
    const query = `UPDATE PERSONNEL SET Prenom = ?, Nom = ?, Securitesociale = ?, Anciennete = ?, Date_naissance = ?, Email = ?, Adresse = ?, Telephone = ?, Profession = ?, Service = ?, Image = ? WHERE ID = ?`;
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
