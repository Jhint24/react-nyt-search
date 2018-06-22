const Article = require('../models/Article');

module.exports = {
  getSaved: function(req, res) {
    console.log('getSaved req.body:', req.body);
    Article.find({})
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },
  saveArticle: function(req, res) {
    console.log('save req.body:', req.body);
    Article.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  //   delete: function(req, res) {
  //     console
  //       .log('delete req.body:', req.body)
  //       .findById({ _id: req.params.id })
  //       .then(dbModel => dbModel.remove())
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};
