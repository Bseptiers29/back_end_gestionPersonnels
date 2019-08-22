const conn = require("../configDB");

let Staff = {};

//GET all Staffs
Staff.allStaffs = () => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM Personnel ORDER BY Nom`, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//GET one Staff & Leaves
Staff.oneStaffLeaves = Id => {
  return new Promise((resolve, reject) => {
    conn.query(
      ` SELECT c.* FROM Conges c, Personnel p WHERE c.ID_Personnel = p.Id AND c.ID_Personnel = ? ORDER BY DebutConges;`,
      [Id],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

//GET one Staff
Staff.oneStaff = Id => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM Personnel WHERE Id = ?`, [Id], (err, res) => {
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
      Personnel.SecuriteSociale,
      Personnel.Anciennete,
      Personnel.Date_naissance,
      Personnel.Email,
      Personnel.Adresse,
      Personnel.Telephone,
      Personnel.Profession,
      Personnel.Service,
      Personnel.CongesDispo,
      Personnel.Image
    ];
    const query = `INSERT INTO Personnel (Prenom, Nom, SecuriteSociale, Anciennete, Date_naissance, Email, Adresse, Telephone, Profession, Service, CongesDispo, Image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    console.log(__filename);
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//UPDATE one Staff
Staff.updateStaff = (Personnel, Id) => {
  return new Promise((resolve, reject) => {
    const params = [
      Personnel.Prenom,
      Personnel.Nom,
      Personnel.SecuriteSociale,
      Personnel.Anciennete,
      Personnel.Date_naissance,
      Personnel.Email,
      Personnel.Adresse,
      Personnel.Telephone,
      Personnel.Profession,
      Personnel.Service,
      Personnel.CongesDispo,
      Personnel.Image,
      Id
    ];
    const query =
      `UPDATE Personnel SET Prenom = ?, Nom = ?, SecuriteSociale = ?, Anciennete = ?, Date_naissance = ?, Email = ?, Adresse = ?, Telephone = ?, Profession = ?, Service = ?, CongesDispo = ?, Image = ` +
      __filename` WHERE Id = ?`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

//DELETE one Staff
Staff.deleteStaff = Id => {
  return new Promise((resolve, reject) => {
    conn.query(`DELETE FROM Personnel WHERE Id = ?`, [Id], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

module.exports = Staff;
