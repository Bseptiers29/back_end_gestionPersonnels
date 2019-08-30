const conn = require("../configDB");

let StaffLeaves = {};

//GET all Staffs & Leaves
StaffLeaves.allStaffLeaves = () => {
  return new Promise((resolve, reject) => {
    conn.query(
      "SELECT DISTINCT c.*, p.Nom FROM Conges c ,Personnel p WHERE c.ID_Personnel = p.Id ORDER BY `p`.`Nom` ASC",
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

//GET one Staff & Leaves
StaffLeaves.oneStaffLeaves = Id => {
  return new Promise((resolve, reject) => {
    conn.query(
      "SELECT c.* FROM Conges c, Personnel p WHERE c.ID_Personnel = p.Id AND c.ID_Personnel = ? ORDER BY `c`.`DebutConges` DESC",
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

module.exports = StaffLeaves;
