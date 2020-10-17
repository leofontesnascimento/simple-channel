const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const config = require('config');
const {
  cepRoute,
  healthRoute,
  usersRoute
} = require('../src/routes');

module.exports = () => {
  const app = express();

  // Enabling cors requests
  app.use(cors())

  // Setting env vars
  app.set('port', process.env.NODE_PORT || config.get('server.port'));

  // Setting middlewares
  app.use(bodyParser.json());

  // Setting routes
  app.use('/cep', cepRoute);
  app.use('/health', healthRoute);
  app.use('/users', usersRoute);

  return app;
};