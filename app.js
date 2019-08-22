//Import des différents modules nécéssaires au bon fonctionnement de l'API
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var multer = require("multer");
var path = require("path");

//Import de toutes les routes
const routes = require("./api/routes");

const app = express();

//CORS pour les requetes
app.use(cors());

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Utilisation des routes
app.use("/v1", routes);

//Declaration du dossier uploads comme dossier statique
app.use("api/uploads", express.static("uploads"));

//Page d'acceuil de l'API
app.get("/", function(req, res) {
  res.send(
    "Bienvenu sur l'API de l'outil de gestion de personnels SOCOMORE, vous trouverez vos ressources a ces url :<br/><br/> - Personnels : /v1/personnels <br/><br/> - Conges : /v1/conges "
  );
});

//MULTER

//Stockage pour les images
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "api/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

//Filtre pour accepter que les formats "images"
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: function(req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(
        new Error("Seul les formats 'png','jpg','gif','jpeg' sont acceptés")
      );
    }
    callback(null, true);
  }
});

//Requete POST pour les images
app.post("/files", upload.single("profiles"), (req, res) => {
  console.log(req.file);
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});

//Requete GET pour les images
app.get("/file", function(req, res) {
  res.sendFile(
    "/home/bas/app_c7edeb26-e069-443f-8987-b321e80adc7b/api" + "/uploads"
  );
});

module.exports = app;
