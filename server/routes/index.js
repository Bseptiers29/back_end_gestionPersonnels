const routes = require("express").Router();
const routerStaffs = require("./staffs");
const routerLeaves = require("./leaves");
const routerStaffsLeaves = require("./staffs_leaves");

routes.use("/", routerStaffs, routerLeaves, routerStaffsLeaves);

module.exports = routes;
