'use strict';

// const redis = require("redis");
// const client = redis.createClient();

//descriptografar token que virá na requisição com o perfil do usuario
//buscar no redis se já existe o perfil e suas features, se não existir, consultar no serviço de usuários
//retorna as features na resposta para ser tratada no controller
function getRole(req, res, next) {
  // const searchCache = await getAsync(role);
  // let role;
  // if (searchCache != 0) {
  //   role = searchCache;
  //   return res.role(role)
  // } else {
  // //vai até o serviço, busca as roles do usuario e salva no redis
  //   client.set("NomePerfil", JSON.stringify(resposeServiço));
  //   client.expire("NomePerfil", 20);
  //   return res.role(role)
  // }
  req.roles = [
    'Carga',
    'Descarga',
    'criação de usuário',
    'vizualizar usuarios',
  ];
  next();
}

module.exports = { getRole };
