const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));

// template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// routes
const newsRouter = require('./routes/news');

app.use('/', newsRouter);

module.exports = app;
