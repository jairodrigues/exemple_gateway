const express = require('express');
const consign = require('consign');

let app = express();

consign()
  .include('src/infra/config.js')
  .then('src/middlewares/express-config.js')
  .then('src/helpers')
  .then('src/controllers')
  .then('src/routes')
  .then('src/infra/boot.js')
  .into(app);

module.exports = app;
