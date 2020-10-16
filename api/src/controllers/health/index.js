module.exports = {
  async get(req, res, next) {
    return res.status(200).json({'status': 'working'});
  }
}