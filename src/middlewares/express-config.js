"use strict";

const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../infra/swagger.json");

module.exports = app => {
  app.set("port", 3000);
  app.use(bodyParser.json());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
