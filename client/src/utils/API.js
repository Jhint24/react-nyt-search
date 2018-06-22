import axios from 'axios';

const API = {
  scrapeArticles: function(searchParams) {
    const { searchTerm, startYear, endYear } = searchParams;
    const authKey = '601f21569adf435ab2cde0e7dddd5139';
    const queryURL =
      'https://api.nytimes.com/svc/search/v2/articlesearch.json' +
      '?api-key=' +
      authKey +
      '&q=' +
      searchTerm +
      '&begin_date=' +
      startYear +
      '&end_date=' +
      endYear;
    // Logging the URL so we have access to it for troubleshooting
    console.log('---------------\nURL: ' + queryURL + '\n---------------');

    return axios.get(queryURL);
  },

  getSavedArticles: function() {
    return axios.get('/api/articles');
  },

  deleteArticle: function(id) {
    return axios.delete('/api/articles/' + id);
  },

  saveArticle: function(articleData) {
    return axios.post('/api/articles', articleData);
  }
};

export default API;
