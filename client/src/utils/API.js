import axios from 'axios';

export default {
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
