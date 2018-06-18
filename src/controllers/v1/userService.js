'use strict';

const httpProxy = require('express-http-proxy');
// const permissoes = require('../../helpers/permissoes.js');

// verifica se o usuario pode acessar o serviço se sim redireciona, se não retorna uma mensagem de erro
module.exports = app => {
  const url = app.src.infra.config.userService;
  const permissoes = app.src.helpers.permissoes;
  this.getUsers = async (req, res) => {
    const role = permissoes.getUsuarios;

    if (req.roles.indexOf(role) >= 0) {
      const UserServiceProxy = httpProxy(`${url}/users`);
      // return UserServiceProxy(req, res);
      return res.json({ msg: 'usuário possui permissão' });
    } else {
      return res.json({ err: 'usuário não possui permissão' });
    }
  };

  return this;
};
