const viacep = require('../../../services/viacep');

module.exports = {
  async get(req, res, next) {
    const { query } = req;

    const { number } = query;

    try {
      const data = await viacep.validate(number);
      return res.status(200).json({ data });
    } catch (error) {
      console.trace(error);
      return res.status(500).send(`Something went wrong! Error: ${error}`);
    }


  }
}