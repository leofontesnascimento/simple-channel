const _ = require('lodash');
const { 
  users,
  addresses
} = require('../../models');
const { errorHandler } = require('../../../middlewares/handlererror');
const viacep = require('../../../services/viacep');

module.exports = {
  async post(req, res, next) {
    const {
      body,
      query
    } = req;

    try {
      const zipCode = _.pick(body, ['zipCode']);
      await viacep.validate(zipCode.zipCode);

      const user = _.pick(
        body,
        ['name', 'password', 'email', 'phone', 'documentId']);

      const createdUser = await users.create(user);

      const address = _.pick(
        body,
            ['zipCode', 'street', 'number', 'neighbour', 'complement', 'city', 'state']);

      const createdAddress = await addresses.create({
        ...address,
        userId: createdUser.id
      });

      return res.status(201).json({
        user: createdUser,
        address: createdAddress
      });

    } catch (error) {
      console.trace(error);
      const formattedError = errorHandler(error)
      return res.status(500).json(formattedError);
    }

  }
}