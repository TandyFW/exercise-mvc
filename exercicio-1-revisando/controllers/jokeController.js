const { getJoke } = require('../models/jokeModel');

const listJokes = async (_req, res) => {
  const joke = await getJoke();
  res.status(200).render('jokeView.ejs', { joke });
};

module.exports = {
  listJokes,
}