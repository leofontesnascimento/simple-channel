const _ = require('lodash');

module.exports = {
  async post(req, res, next) {
    const {
      body,
      query
    } = req;

    const user = _.pick(body, ['name', 'password', 'email', 'phone']);
    const address = _.pick(body, ['zipCode', 'street', 'number', 'neighbour', 'complement']);

    return res.status(201).json({
      user,
      address
    });
  }
}