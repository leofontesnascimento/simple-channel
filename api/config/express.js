const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const {
  healthRoute,
  usersRoute
} = require('../src/routes');

module.exports = () => {
  const app = express();

  // Setting env vars
  app.set('port', process.env.NODE_PORT || config.get('server.port'));

  // Setting middlewares
  app.use(bodyParser.json());

  // Setting routes
  app.use('/health', healthRoute);
  app.use('/users', usersRoute);

  return app;
};