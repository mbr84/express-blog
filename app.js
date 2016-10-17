const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendfile('./views/index.html');
});

app.get('/about', (req, res) => {
  res.sendfile('./views/about.html');
});

app.get('/article', (req, res) => {
  res.sendfile('./views/article.html');
});

app.listen(3000);
