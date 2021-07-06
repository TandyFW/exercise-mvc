const axios = require('axios');

const getJoke = async () => {
  try {
    const urlJoke = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';
    const { data } = await axios.get(urlJoke);
    return data.joke;
  } catch (error) {
      return error.message;
  }
};

module.exports = {
  getJoke,
};
