const { UniqueConstraintError } = require('sequelize');
const { InvalidCep } = require('../../services/viacep/errors');

const {
  somethingWentWrong, 
  documentIdError,
  cepError
} = require('./constants');

module.exports = {
  errorHandler(error) {
    if (error instanceof UniqueConstraintError) {
      return documentIdError;
    } else if (error instanceof InvalidCep) {
      return cepError;
    } else {
      return somethingWentWrong;
    }
  }
}