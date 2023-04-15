import { ID, TOKEN_KEY } from '../config';
import apiFetch from './apiFetch';

const User = {
  async createUser(data) {
    try {
      const response = await apiFetch('/users', { body: data });
      const { token, id, ...user } = response;
      sessionStorage.setItem(TOKEN_KEY, token);
      sessionStorage.setItem(ID, id);
      return user;
    } catch (error) {
      console.error(error);
    }
  },

  async getUser(id) {
    try {
      const response = await apiFetch(`/users/${id}`);
      const { _token, ...user } = response;
      return user;
    } catch (error) {
      console.error(error);
    }
  },

  async upDateUser(id, data) {
    try {
      const response = await apiFetch(`/users/${id}`, {
        method: 'PATCH',
        body: data,
      });
      const { _token, ...user } = response;
      window.location.reload();
      return user;
    } catch (error) {
      console.error(error);
    }
  },
};

export default User;
