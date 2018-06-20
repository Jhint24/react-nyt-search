const axios = require('axios');
const router = require('express').Router();

router.get('/', (req, res) => {
  axios.get(
    'https://api.nytimes.com/svc/search/v2/articlesearch.json' +
      '?api-key=601f21569adf435ab2cde0e7dddd5139&q=' +
      'Trump'
  );
});

module.exports = router;
