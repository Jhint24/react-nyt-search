const Article = require('../modelsArticle');

module.exports = {
  getSaved: function(req, res) {
    console.log('getSaved req.body:', req.body);
    Article.find({})
      .then(data => res.send(data))
      .catch(err => console.log('getArticle Error:', err));
  },
  saveArticle: function(req, res) {
    console.log('save req.body:', req.body);
    Article.create(req.body)
      .then(() => res.json('Saved Article in DB'))
      .catch(err => res.json(err));
  },

  delete: function(req, res) {
    console
      .log('delete req.body:', req.body)
      .then()
      .catch();
  }
};
