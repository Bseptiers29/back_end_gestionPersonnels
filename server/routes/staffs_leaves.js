const routerStaffsLeaves = require("express").Router();
const db = require("../controllers/staffs_leaves");

//Route for all StaffsLeaves
routerStaffsLeaves.get("/personnels_conges", async (req, res) => {
  try {
    let results = await db.allStaffsLeaves();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for create one StaffsLeaves
routerStaffsLeaves.post("/personnels_conges", async (req, res) => {
  try {
    const staffLeave = req.body;
    let results = await db.postStaffLeaves(staffLeave);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for delete one Staff
routerStaffsLeaves.delete("/personnels/:ID_PERSONNEL", async (req, res) => {
  try {
    let results = await db.deleteStaffLeave(req.params.ID_PERSONNEL);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for delete one Staff
routerStaffsLeaves.delete("/personnels/:ID_CONGES", async (req, res) => {
  try {
    let results = await db.deleteLeaveStaff(req.params.ID_CONGES);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = routerStaffsLeaves;
