'use strict';

require('dotenv').config();
const ENV = process.env.NODE_ENV || 'production';
const USER_SERVICE = process.env.USER_SERVICE;
const REDIS = process.env.REDIS || 'redis';
const PORT = process.env.PORT || '6379';

let config = null;

switch (ENV) {
  case 'development':
    config = {
      host: REDIS,
      port: PORT,
      userService: USER_SERVICE,
    };
    break;
  case 'production':
    config = {
      host: REDIS,
      port: PORT,
      userService: USER_SERVICE,
    };
    break;
}

console.log('API Configuration: ' + ENV + JSON.stringify(config));

module.exports = config;
