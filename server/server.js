const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var multer = require("multer");

const routes = require("./routes");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/v1", routes);

app.listen(process.env.PORT || "3000", () => {
  console.log(`Server is running on port: ${process.env.PORT || "3000"}`);
});

app.get("/", function(req, res) {
  res.send(
    "Bienvenu sur l'API de l'outil de gestion de personnels SOCOMORE, vous trouverez vos ressources a ces url :<br/><br/> - Personnels : /v1/personnels <br/><br/> - Conges : /v1/conges "
  );
});

// Essais
const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

const upload = multer({
  dest: "../tmp"
});

app.get("/try", express.static(path.join(__dirname, "./public")));

app.post("/profile", upload.single("photoPersonnel"), function(req, res) {
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, "../static/image.png");

  if (path.extname(req.file.originalname).toLowerCase() === ".png") {
    fs.rename(tempPath, targetPath, err => {
      if (err) return handleError(err, res);

      res
        .status(200)
        .contentType("text/plain")
        .end("File uploaded!");
    });
  } else {
    fs.unlink(tempPath, err => {
      if (err) return handleError(err, res);

      res
        .status(403)
        .contentType("text/plain")
        .end("Only .png files are allowed!");
    });
  }
});
