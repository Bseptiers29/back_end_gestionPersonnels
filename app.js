//Import des différents modules nécéssaires au bon fonctionnement de l'API
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var multer = require("multer");
var path = require("path");
const { existsSync, mkdirSync } = require("fs");
const slugify = require("slugify");

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

//Page d'acceuil de l'API
app.get("/", function(req, res) {
  res.send(
    "Bienvenu sur l'API de l'outil de gestion de personnels SOCOMORE, vous trouverez vos ressources a ces url :<br/><br/> - Personnels : /v1/personnels <br/><br/> - Conges : /v1/conges "
  );
});

//MULTER

//Stockage pour les images (et seulement les images)
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, "files", "images"));
  },
  filename: function(req, file, cb) {
    console.log("in filename");
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
        new Error("Seuls les formats 'png','jpg','gif' et 'jpeg' sont acceptés")
      );
    }
    callback(null, true);
  }
});

// S'assurer que le dossier images existe
const filesPath = path.join(__dirname, "files");
if (!existsSync(filesPath)) {
  mkdirSync(filesPath);
  mkdirSync(path.join(filesPath, "images"));
} else if (!existsSync(path.join(filesPath, "images"))) {
  mkdirSync(path.join(filesPath, "images"));
}

//Requete POST pour les images
app.post("/files", upload.single("profiles"), (req, res) => {
  console.log(req.file, req.files);
  try {
    res.json({
      ok: true,
      url: `${req.baseUrl}/images/${req.file.filename}`
    });
  } catch (err) {
    res.send(400);
  }
});

//Declaration du dossier d'uploads comme dossier statique
app.use(express.static(path.join(__dirname, "files")));

module.exports = app;
