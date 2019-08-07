const routerPersonal = require("express").Router();
const db = require("../db/personal");

//Routes pour la table "personnel"

//Route pour toutes les données
routerPersonal.get("/personnel", async (req, res) => {
  try {
    let results = await db.allPersonals();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

routerPersonal.get("/personnels", async (req, res) => {
  try {
    let results = await db.joint();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route pour un seul personnel
routerPersonal.get("/personnel/:id", async (req, res) => {
  try {
    let results = await db.onePersonal(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route pour créer un personnel
routerPersonal.post("/personnel", async (req, res) => {
  try {
    const personal = req.body;
    let results = await db.postPersonal(personal);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route pour mettre a jour un personnel
routerPersonal.put("/personnel/:id", async (req, res) => {
  try {
    const personal = req.body;
    let results = await db.updatePersonal(personal, req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route pour supprimer un personnel
routerPersonal.delete("/personnel/:id", async (req, res) => {
  try {
    let results = await db.deletePersonal(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = routerPersonal;
