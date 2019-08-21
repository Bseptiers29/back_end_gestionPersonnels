const routerLeave = require("express").Router();
const db = require("../controllers/leaves");
//Roads for the "Personnel" table

//Road for all Leaves
routerLeave.get("/conges", async (req, res) => {
  try {
    let results = await db.allLeaves();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Road for one Leave
routerLeave.get("/conges/:Idc", async (req, res) => {
  try {
    let results = await db.oneLeave(req.params.Idc);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Road for create one Leave
routerLeave.post("/conges", async (req, res) => {
  try {
    const leave = req.body;
    let results = await db.postLeave(leave);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Road for update one Leave
routerLeave.put("/conges/:Idc", async (req, res) => {
  try {
    const leave = req.body;
    let results = await db.updateLeave(leave, req.params.Idc);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Road for delete one Leave
routerLeave.delete("/conges/:Idc", async (req, res) => {
  try {
    let results = await db.deleteLeave(req.params.Idc);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = routerLeave;
