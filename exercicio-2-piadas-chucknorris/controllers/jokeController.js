const {
  getChuckJokes,
  getChuckJokesCategories,
  getChuckJokesByCategorie } = require('../models/jokeModel');

const categoriesRedirect = (_req, res) => {
  res.redirect(301, '/categories');
};

const getJokesCategories = async (_req, res) => {
  const categories = await getChuckJokesCategories();
  res.status(200).render('categories/index.ejs', { categories });
};

const getJokesByCategorie = async (req, res) => {
  const { categorie } = req.params;
  const joke = await getChuckJokesByCategorie(categorie);
  res.status(200).render('jokes/index.ejs', { joke });
};

const getAllChuckJokes = async (_req, res) => {
  const joke = await getChuckJokes();
  res.status(200).render('jokes/index.ejs', { joke });
}

module.exports = {
  getJokesCategories,
  categoriesRedirect,
  getJokesByCategorie,
  getAllChuckJokes,
};
