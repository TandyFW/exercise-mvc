const express = require('express');
const jokeController = require('./controllers/jokeController');

const app = express();

app.set('views engine', 'ejs');
app.set('./views', 'views');

app.get('/', jokeController.categoriesRedirect);
app.get('/categories', jokeController.getJokesCategories);
app.get('/jokes/:categorie', jokeController.getJokesByCategorie);
app.get('/jokes', jokeController.getAllChuckJokes);

app.listen(3000, () => console.log('Servidor aberto na porta 3000'));
