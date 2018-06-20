import axios from 'axios';

export default {
  scrapeArticles: function(params) {
    const { searchTerm, startYear, endYear } = params;

    let queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

    queryURL += '?api-key=601f21569adf435ab2cde0e7dddd5139';

    const searchTermQuery = `${searchTerm.val().trim()};`;
    queryURL += '&q=' + searchTermQuery;

    const startYearQuery = `${startYear.val().trim()};`;
    if (parseInt(startYear, 16)) {
      queryURL += '&begin_date=' + startYearQuery + '0101';
    }
    const endYearQuery = `${endYear.val().trim()};`;
    if (parseInt(endYear, 16)) {
      queryURL += '&end_date=' + endYearQuery + '0101';
    }
    // Logging the URL so we have access to it for troubleshooting
    console.log('---------------\nURL: ' + queryURL + '\n---------------');

    return axios.get(queryURL);
  },
  // Gets all Article
  getArticles: function() {
    return axios.get('/api/Article');
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete('/api/Article/' + id);
  },
  // Saves a book to the database
  saveArticle: function(ArticleData) {
    return axios.post('/api/Article', ArticleData);
  }
};
