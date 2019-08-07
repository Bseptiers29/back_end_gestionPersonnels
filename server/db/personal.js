const conn = require("../configDB");

let Personal = {};

Personal.allPersonals = () => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM personnel`, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Personal.joint = () => {
  return new Promise((resolve, reject) => {
    conn.query(
      `SELECT * FROM personnel,conges where personnel.IDConges = conges.IDConges`,
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

Personal.onePersonal = id => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM personnel where id = ?`, [id], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

Personal.postPersonal = personnel => {
  return new Promise((resolve, reject) => {
    const params = [
      personnel.prenom,
      personnel.nom,
      personnel.anciennete,
      personnel.email,
      personnel.profession,
      personnel.service,
      personnel.image,
      personnel.date_naissance
    ];
    const query = `INSERT INTO personnel (prenom, nom, anciennete, email, profession, service, image, date_naissance) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Personal.updatePersonal = (personnel, id) => {
  return new Promise((resolve, reject) => {
    const params = [
      personnel.prenom,
      personnel.nom,
      personnel.anciennete,
      personnel.email,
      personnel.profession,
      personnel.service,
      personnel.image,
      personnel.date_naissance,
      id
    ];
    const query = `UPDATE personnel SET prenom = ?, nom = ?, anciennete = ?, email = ?, profession = ?, service = ?, image = ?, date_naissance = ? WHERE id = ?`;
    conn.query(query, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Personal.deletePersonal = id => {
  return new Promise((resolve, reject) => {
    conn.query(`DELETE FROM personnel where id = ?`, [id], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res[0]);
    });
  });
};

module.exports = Personal;
