const axios = require('axios');
const router = require('express').Router();
const articleController = require('../controllers/articleController');

router
  .route('/')
  .get(articleController.getSaved)
  .post(articleController.saveArticle);

module.exports = router;
