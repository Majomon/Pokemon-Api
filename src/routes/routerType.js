const { Router } = require("express");
const getType = require("../handlers/getType");

const typeRouter = Router();

// Petición tipo GET
typeRouter.use("/", getType);

module.exports = typeRouter;
