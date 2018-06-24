const axios = require('axios');
const router = require('express').Router();
const articleController = require('../controllers/articleController');

router
  .route('/api/articles')
  .post(articleController.saveArticle)
  .get(articleController.getSaved);

router.route('/api/articles/:id').delete(articleController.deleteArticle);

module.exports = router;
