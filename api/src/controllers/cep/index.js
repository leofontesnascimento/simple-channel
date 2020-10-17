const viacep = require('../../../services/viacep');
const { errorHandler } = require('../../../middlewares/handlererror');

module.exports = {
  async get(req, res, next) {
    const { query } = req;

    const { number } = query;

    try {
      const data = await viacep.validate(number);
      return res.status(200).json({ data });
    } catch (error) {
      console.trace(error);
      const formattedError = errorHandler(error);
      return res.status(500).json(formattedError);
    }


  }
}