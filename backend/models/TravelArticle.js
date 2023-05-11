const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const ArticleSchema = new mongoose.Schema ({
  
  userID : {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  title : {
    type: String,
    required : true
  },
  category : {
    type: String,
    required : true
  },
  description : {
    type:String,
    required: true
  },
  image : {
    type: String,
    required : true
  },
  likes : [
    {type:ObjectId,
     ref:"User"}
  ],
  postedAt:Date

});


module.exports = Article = mongoose.model('article', ArticleSchema);