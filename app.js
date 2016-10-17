const express = require('express');
const app = express();
const hbs = require('hbs');
const blogEngine = require('./blog');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'My Blog', entries: blogEngine.getBlogEntries() });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'about me' });
});

app.get('/article/:id', (req, res) => {
  const entry = blogEngine.getBlogEntry(req.params.id);
  res.render('article', { title: entry.title, blog: entry });
});

app.listen(3000);
