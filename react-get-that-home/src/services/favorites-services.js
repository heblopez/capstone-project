import { BASE_URI, TOKEN_KEY } from '../config';

// add to favorites
const addFavorite = async (userId, propertyId) => {
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
  } catch (error) {
    console.error(error);
  }
};

// get yout favorites properties
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

const removeFavorite = async (userId, propertyId) => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  const options = {
    method: 'DELETE',
    headers: { Authorization: `Token token=${token}` },
  };
  try {
    await fetch(`${BASE_URI}/users/${userId}/favorites/${propertyId}`, options);
  } catch (error) {
    console.error(error);
  }
};

// contact with property landlord
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
    return contacted;
  } catch (error) {
    console.error(error);
  }
};

// get all properties contacted
const getAllPropsContacted = async (userId) => {
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

// delete contact
const removeContact = async (user_id, property_id) => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  const options = {
    method: 'DELETE',
    headers: { Authorization: `Token token=${token}` },
  };

  try {
    await fetch(
      `${BASE_URI}/users/${user_id}/contacted/${property_id}`,
      options
    );
  } catch (error) {
    console.error(error);
  }
};

export {
  addFavorite,
  getFavorites,
  removeFavorite,
  contactAdvertiser,
  getAllPropsContacted,
  removeContact,
};
