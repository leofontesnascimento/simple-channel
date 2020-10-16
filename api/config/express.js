const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = () => {
  const app = express();

  // Setting env vars
  app.set('port', process.env.NODE_PORT || config.get('server.port'));

  // Setting middlewares
  app.use(bodyParser.json());

  return app;
};