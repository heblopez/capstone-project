import { TOKEN_KEY } from '../config';
import apiFetch from './apiFetch';

const User = {
  async createUser(data) {
    try {
      const response = await apiFetch('/users', { body: data });
      const { token, ...user } = response;
      sessionStorage.setItem(TOKEN_KEY, token);
      return user;
    } catch (error) {
      console.error(error);
    }
  },

  async getUser(id) {
    try {
      const response = await apiFetch(`/users/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};

export default User;
