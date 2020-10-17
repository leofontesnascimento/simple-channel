import api from './proxy';

const UsersProxy = {
  post: async (body) => {
    const res = await api.post('/users', body);
    return res;
  }
};

export default UsersProxy;