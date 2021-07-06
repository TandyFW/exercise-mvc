const axios = require('axios');

const getChuckJokes = async () => {
  const urlChuckJokesAPI = 'https://api.chucknorris.io/jokes/random'
  const { data } = await axios.get(urlChuckJokesAPI);
  return data.value;
};

const getChuckJokesCategories = async () => {
  const urlChuckJokesAPI = 'https://api.chucknorris.io/jokes/categories'
  const { data } = await axios.get(urlChuckJokesAPI);
  return data;
}

const getChuckJokesByCategorie = async (category) => {
  const urlChuckJokesAPI = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const { data } = await axios.get(urlChuckJokesAPI);
  return data.value;
};

module.exports = {
  getChuckJokes,
  getChuckJokesCategories,
  getChuckJokesByCategorie,
};
