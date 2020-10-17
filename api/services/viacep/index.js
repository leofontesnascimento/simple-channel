const axios = require('axios');
const { 
  BASEURL,
  BASEFORMAT
} = require('./constants');
const { InvalidCep } = require('./errors');

module.exports = {
  async validate(number) {
    try {
      data = {};
      const url = `${BASEURL}/${number}/${BASEFORMAT}/`;
      await axios.get(url)
        .then( res => {
          console.log(res.data);
          data = res.data;
        })
        .catch( error => {
          console.trace(error);
          throw new InvalidCep();
        });
        return data;
    } catch (error) {
      throw error;
    }
  }
}