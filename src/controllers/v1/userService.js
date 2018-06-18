'use strict';

const httpProxy = require('express-http-proxy');

module.exports = app => {
  const url_user = app.src.infra.config;
  console.log(url_user);

  this.getUsers = async (req, res) => {
    // const role = req.roles;
    // res.json(role);
    //FAZ O SERIÇO DO PROXY
    // const UserServiceProxy = httpProxy(`${url}/users`);
    // UserServiceProxy(req, res, next);
  };

  return this;
};
