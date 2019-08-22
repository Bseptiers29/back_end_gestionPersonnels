const routerStaffs = require("express").Router();
const db = require("../controllers/staffs");

//Roads for the "Personnel" table

//Road for all Staffs
routerStaffs.get("/personnels", async (req, res) => {
  try {
    let results = await db.allStaffs();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Road for a staff and one leave
routerStaffs.get("/personnel_conge/:Id", async (req, res) => {
  try {
    let results = await db.oneStaffLeave(req.params.Id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Road for a staff and his leaves
routerStaffs.get("/personnels_conges/:Id", async (req, res) => {
  try {
    let results = await db.oneStaffLeaves(req.params.Id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Road for one Staff
routerStaffs.get("/personnels/:Id", async (req, res) => {
  try {
    let results = await db.oneStaff(req.params.Id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Road for create one Staff
routerStaffs.post("/personnels", async (req, res) => {
  try {
    const staff = req.body;
    let results = await db.postStaff(staff);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Road for update one Staff
routerStaffs.put("/personnels/:Id", async (req, res) => {
  try {
    const staff = req.body;
    let results = await db.updateStaff(staff, req.params.Id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Road for delete one Staff
routerStaffs.delete("/personnels/:Id", async (req, res) => {
  try {
    let results = await db.deleteStaff(req.params.Id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = routerStaffs;
