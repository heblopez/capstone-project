import apiFetch from './apiFetch';
const tokenKey = import.meta.env.VITE_API_TOKEN_KEY;
const BASE_URI = import.meta.env.VITE_API_BASE_URI;

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
  const token = sessionStorage.getItem(tokenKey);
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
