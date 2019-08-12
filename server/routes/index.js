const routes = require("express").Router();
const routerStaffs = require("./staffs");
const routerLeaves = require("./leaves");

routes.use("/", routerStaffs, routerLeaves);

module.exports = routes;
