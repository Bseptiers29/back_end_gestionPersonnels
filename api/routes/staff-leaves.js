const routerStaffLeaves = require("express").Router();
const db = require("../controllers/leaves");
//Roads for the joint "Personnel with Conges" tables

//Road for all staffs and leaves
routerStaffsLeaves.get("/personnels_conges", async (req, res) => {
  try {
    let results = await db.allStaffLeaves();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Road for a staff and his leaves
routerStaffsLeaves.get("/personnels_conges/:Id", async (req, res) => {
  try {
    let results = await db.oneStaffLeaves(req.params.Id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = routerStaffLeaves;
