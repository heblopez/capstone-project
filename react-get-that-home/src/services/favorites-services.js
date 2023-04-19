import { BASE_URI, TOKEN_KEY } from '../config';

const addFavorite = async (userId, propertyId) => {

  console.log(userId, propertyId);

  const token = sessionStorage.getItem(TOKEN_KEY);

  const options = {
    method: 'POST',
    headers: { Authorization: `Token token=${token}` },
  };

  try {
    const response = await fetch(
      `${BASE_URI}/users/${userId}/favorites/${propertyId}`,
      options
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const getFavorites = async (userId) => {
  const token = sessionStorage.getItem(TOKEN_KEY);

  const options = {
    method: 'GET',
    headers: { Authorization: `Token token=${token}` },
  };

  try {
    const response = await fetch(
      `${BASE_URI}/users/${userId}/favorites`,
      options
    );
    const favorites = await response.json();
    return favorites;
  } catch (error) {
    console.error(error);
  }
};

export { addFavorite, getFavorites };
