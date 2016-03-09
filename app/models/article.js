var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  body: String,
  image: String,
  username: String,
  date: Date
});

module.exports = mongoose.model('Article', ArticleSchema);