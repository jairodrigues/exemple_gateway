"use strict";

module.exports = app => {
  const UserControllers = app.src.controllers.v1.user;
  app
    .route("/users")
    //usuario precisa existir, aqui deverá ficar uma logica para resgatar no redis('all()')
    .all()
    .get(UserControllers.getUsers);
};
