const express = require('express');
const newsRouter = express.Router();

const newsController = require('../controller/newsController');

newsRouter.get('', newsController.getNews);

newsRouter.post('', newsController.searchNews);

module.exports = newsRouter;
