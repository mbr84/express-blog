const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/article', (req, res) => {
  res.render('article');
});

app.listen(3000);
