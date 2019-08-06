const routerLeave = require("express").Router();
const db = require("../db/leave");

//Routes pour la table "conges"

//Route pour toutes les données
routerLeave.get("/conges", async (req, res, next) => {
  try {
    let results = await db.allConges();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route pour une seule ligne congés
routerLeave.get("/conges/:IDConges", async (req, res, next) => {
  try {
    let results = await db.oneConge(req.params.IDConges);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route pour créer un congé
routerLeave.post("/conges", async (req, res) => {
  try {
    const conges = req.body;
    let results = await db.postConges(conges);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route pour modifier un congé
routerLeave.put("/conges/:IDConges", async (req, res) => {
  try {
    const conges = req.body;
    let results = await db.updateConges(conges, req.params.IDConges);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route pour supprimer un congé
routerLeave.delete("/conges/:IDConges", async (req, res) => {
  try {
    let results = await db.deleteConges(req.params.IDConges);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = routerLeave;
