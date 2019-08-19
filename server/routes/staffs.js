const routerStaffs = require("express").Router();
const db = require("../controllers/staffs");

//Routes for the "Personnel" table

//Route for all Staffs
routerStaffs.get("/personnels", async (req, res) => {
  try {
    let results = await db.allStaffs();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for one Staff
routerStaffs.get("/personnels/:ID", async (req, res) => {
  try {
    let results = await db.oneStaff(req.params.ID);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for create one Staff
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

//Route for update one Staff
routerStaffs.put("/personnels/:ID", async (req, res) => {
  try {
    const staff = req.body;
    let results = await db.updateStaff(staff, req.params.ID);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for delete one Staff
routerStaffs.delete("/personnels/:ID", async (req, res) => {
  try {
    let results = await db.deleteStaff(req.params.ID);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = routerStaffs;
