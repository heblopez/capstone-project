import { ID, TOKEN_KEY } from '../config';
import apiFetch from './apiFetch';

const Auth = {
  async login(credentials) {
    try {
      const response = await apiFetch('/login', { body: credentials });
      const { token, id,...user } = response;
      sessionStorage.setItem(TOKEN_KEY, token);
      sessionStorage.setItem(ID, id);
      return user;
    } catch (error) {
      console.error(error);
    }
  },

  async logout() {
    try {
      const response = apiFetch('/logout', { method: 'GET' });
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};

export default Auth;
