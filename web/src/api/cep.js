import api from './proxy';

const CepProxy = {
  get: async (number) => {
    const res = await api.get('/cep', { params: { number } });
    return res;
  }
};

export default CepProxy;