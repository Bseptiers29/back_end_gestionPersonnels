const routes = require("express").Router();
const routerStaffs = require("./staffs");
const routerLeaves = require("./leaves");
const routerStaffLeaves = require("./staff-leaves");

routes.use("/", routerStaffs, routerLeaves, routerStaffLeaves);

module.exports = routes;
