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

  const response = await fetch(
    `${BASE_URI}/users/${userId}/favorites`,
    options
  );

  let favorites;
  if (!response.ok) {
    if (token && response.status == 401) {
      sessionStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(ID);
      window.location.reload();
    }

    try {
      favorites = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }

  try {
    favorites = await response.json();
  } catch (error) {
    favorites = response.statusText;
  }
  return favorites;
};

const contactAdvertiser = async (userId, propertyId) => {
  const token = sessionStorage.getItem(TOKEN_KEY);

  const options = {
    method: 'POST',
    headers: { Authorization: `Token token=${token}` },
  };

  try {
    const response = await fetch(
      `${BASE_URI}/users/${userId}/contacted/${propertyId}`,
      options
    );
    const contacted = await response.json();
    console.log(contacted);
    return contacted;
  } catch (error) {
    console.error(error);
  }
};

const getcontactAdvertiser = async (userId) => {
  const token = sessionStorage.getItem(TOKEN_KEY);

  const options = {
    method: 'GET',
    headers: { Authorization: `Token token=${token}` },
  };

  try {
    const response = await fetch(
      `${BASE_URI}/users/${userId}/contacted`,
      options
    );
    const contacted = await response.json();
    return contacted;
  } catch (error) {
    console.error(error);
  }
};

export { addFavorite, getFavorites, contactAdvertiser, getcontactAdvertiser };
