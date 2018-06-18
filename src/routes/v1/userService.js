'use strict';

module.exports = app => {
  const UserControllers = app.src.controllers.v1.userService;
  const Roles = app.src.helpers.role;
  app
    .route('/users')
    //usuario precisa existir, aqui deverá ficar uma logica para resgatar as roles no redis('all()')
    .all(Roles.getRole)
    .get(UserControllers.getUsers);
};
