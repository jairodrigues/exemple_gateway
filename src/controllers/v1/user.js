"use strict";

const httpProxy = require("express-http-proxy");
const url = "http://localhost:3000/api/v1";

module.exports = app => {
  this.getUsers = async (req, res, next) => {
    const role = req.roles;

    res.json(role);
    // const UserServiceProxy = httpProxy(`${url}/users`);
    // UserServiceProxy(req, res, next);
  };

  return this;
};
