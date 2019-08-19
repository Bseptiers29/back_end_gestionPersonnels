const conn = require("../configDB");

let Staff = {};

//GET all Staffs
Staff.allStaffs = () => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM Personnel ORDER BY NOM`, (err, res) => {
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
    conn.query(`SELECT * FROM Personnel WHERE ID = ?`, [ID], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

//POST new Staff
Staff.postStaff = Personnel => {
  return new Promise((resolve, reject) => {
    const params = [
      Personnel.Prenom,
      Personnel.Nom,
      Personnel.Securitesociale,
      Personnel.Anciennete,
      Personnel.Date_naissance,
      Personnel.Email,
      Personnel.Adresse,
      Personnel.Telephone,
      Personnel.Profession,
      Personnel.Service,
      Personnel.Image
    ];
    const query =
      "INSERT INTO `Personnel` (`Prenom`, `Nom`, `Securitesociale`, `Anciennete`, `Date_naissance`, `Email`, `Adresse`, `Telephone`, `Profession`, `Service`, `Image`) VALUES ( `?`, `?`, `?`, `?`, `?`, `?`, `?`, `?`, `?`, `?`, `?` )";
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//UPDATE one Staff
Staff.updateStaff = (Personnel, ID) => {
  return new Promise((resolve, reject) => {
    const params = [
      Personnel.Prenom,
      Personnel.Nom,
      Personnel.Securitesociale,
      Personnel.Anciennete,
      Personnel.Date_naissance,
      Personnel.Email,
      Personnel.Adresse,
      Personnel.Telephone,
      Personnel.Profession,
      Personnel.Service,
      Personnel.Image,
      ID
    ];
    const query = `UPDATE Personnel SET Prenom = ?, Nom = ?, Securitesociale = ?, Anciennete = ?, Date_naissance = ?, Email = ?, Adresse = ?, Telephone = ?, Profession = ?, Service = ?, Image = ? WHERE ID = ?`;
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
    conn.query(`DELETE FROM Personnel WHERE ID = ?`, [ID], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

module.exports = Staff;
