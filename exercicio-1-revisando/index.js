const express = require('express');
const jokeController = require('./controllers/jokeController');

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', jokeController.listJokes);

app.listen(3000, () => console.log('Servidor aberto na porta 3000'));
