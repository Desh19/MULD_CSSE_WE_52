const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema ({
  
  userID : {
    type: String,
    required: true
  },
  userName : {
    type: String,
    required: true
  },
  ArticleTitle : {
    type: String,
    required : true
  },
  description : {
    type:String,
    required: true
  },
  image : {
    type: String,
    // required : true
  }

});

module.exports = Article = mongoose.model('article', ArticleSchema);