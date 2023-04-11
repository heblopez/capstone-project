import apiFetch from './apiFetch';

const Properties = {
  async get() {
    try {
      const response = await apiFetch('/properties');
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};

export default Properties;
