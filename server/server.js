const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var multer = require("multer");

const routes = require("./routes");

const app = express();

var fs = require("fs");
var path = require("path");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/v1", routes);

app.get("/", function(req, res) {
  res.send(
    "Bienvenu sur l'API de l'outil de gestion de personnels SOCOMORE, vous trouverez vos ressources a ces url :<br/><br/> - Personnels : /v1/personnels <br/><br/> - Conges : /v1/conges "
  );
});

app.get("/images", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    fs.mkdir("../static", function(err) {
      if (err) {
        console.log(err.stack);
      } else {
        callback(null, "../static");
      }
    });
  },
  filename: function(req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

app.post("/files", function(req, res) {
  var upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback) {
      var ext = path.extname(file.originalname);
      if (
        ext !== ".png" &&
        ext !== ".jpg" &&
        ext !== ".gif" &&
        ext !== ".jpeg"
      ) {
        return callback(new Error("Only images are allowed"));
      }
      callback(null, true);
    }
  }).single("userFile");
  upload(req, res, function(err) {
    if (err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
});

app.listen(process.env.PORT || "3000", () => {
  console.log(`Server is running on port: ${process.env.PORT || "3000"}`);
});
