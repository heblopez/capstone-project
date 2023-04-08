
import { TOKEN_KEY } from '../config';
import apiFetch from './apiFetch';

export function login(credentials) {
  return apiFetch('/login', { body: credentials }).then((user) => {
    const { token, ...userdata } = user;
    sessionStorage.setItem(TOKEN_KEY, token);
    return userdata;
  });
}

export function logout() {
  return apiFetch('/logout', { method: 'DELETE' });
}