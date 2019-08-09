const routes = require("express").Router();
const routerPersonal = require("./personal");

routes.use("/", routerPersonal);

module.exports = routes;
