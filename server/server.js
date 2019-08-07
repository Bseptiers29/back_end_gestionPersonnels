const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/v1", routes);

app.get("/", function(req, res) {
  res.send(
    "Bienvenu sur l'API de l'outil de gestion de personnels SOCOMORE, vous trouverez vos ressources a ces url :<br/><br/> - Personnels : /v1/personnel <br /> - Conges : /v1/conges"
  );
});

app.listen(process.env.PORT || "3000", () => {
  console.log(`Server is running on port: ${process.env.PORT || "3000"}`);
});
