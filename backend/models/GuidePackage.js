const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const GuidePackageSchema = new mongoose.Schema ({
  
  userID : {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  userName : {
    type: String,
    required : true
  },
  userDP : {
    type: String,
    required : true
  },
  mobileNo : {
    type: String,
    required : true
  },
  priceRange : {
    type: String,
    required : true
  },
  guiderBio : {
    type:String,
    required: true
  },
  languages : {
    type:String,
    required: true
  },
  image : {
    type: String,
    // required : true
  },
  
  postedAt:Date

});

module.exports = Package = mongoose.model('Guidepackage', GuidePackageSchema);