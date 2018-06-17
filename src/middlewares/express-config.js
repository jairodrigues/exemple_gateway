"use strict";

const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../infra/swagger.json");
const cacheHelpers = require("../helpers/cache.js");
module.exports = app => {
  app.set("port", 3000);
  app.use(bodyParser.json());

  var cache = cacheHelpers;

  app.use(cache);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
