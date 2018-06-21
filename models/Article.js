const mongoose = reqire('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  summary: {
    type: string,
    required: true
  }
});
const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
