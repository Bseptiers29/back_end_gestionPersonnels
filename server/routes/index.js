const routes = require("express").Router();
const routerLeave = require("./leave");
const routerPersonal = require("./personal");

routes.use("/", routerLeave);
routes.use("/", routerPersonal);

module.exports = routes;
