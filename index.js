const express = require("express");
const consign = require("consign");

let app = express();

consign()
  .include("src/middlewares/express-config.js")
  .then("src/controllers")
  .then("src/routes")
  .then("src/infra/boot.js")
  .into(app);

module.exports = app;
