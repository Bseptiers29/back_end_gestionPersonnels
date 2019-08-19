const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/v1", routes);

app.get("/", function(req, res) {
  res.send(
    "Bienvenu sur l'API de l'outil de gestion de personnels SOCOMORE, vous trouverez vos ressources a ces url :<br/><br/> - Personnels : /v1/personnels <br/><br/> - Conges : /v1/conges "
  );
});

app.listen(process.env.PORT || "3000", () => {
  console.log(`Server is running on port: ${process.env.PORT || "3000"}`);
});
