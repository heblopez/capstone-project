import apiFetch from './apiFetch';
import { BASE_URI, TOKEN_KEY } from "../config"

const Properties = {
  async get() {
    try {
      const response = await apiFetch('/properties');
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async getProp(id) {
    try {
      const response = await apiFetch(`/properties/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};

export default Properties;

const createProperty = async (new_property) => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  try {
    await fetch(`${BASE_URI}/properties`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: new_property,
    });
  } catch (error) {
    console.error(error);
  }
};

export {
  createProperty
}
