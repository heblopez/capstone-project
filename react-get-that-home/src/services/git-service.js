import { GITHUB_API, GIT_TOKEN } from '../config';
const TOKEN_API = `Bearer ${GIT_TOKEN}`;

const getGithubUser = async (username) => {
  const url = `${GITHUB_API}/${username}`;
  const config = {
    method: 'GET',
    Headers: {
      Authorization: TOKEN_API,
    },
  };
  try {
    const response = await fetch(url, config);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getGithubUser };
