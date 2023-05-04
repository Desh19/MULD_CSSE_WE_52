const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
    {
      name:{type: String, requried: true, trim: true},
      email:{type: String, requried: true,trim: true},
      password: {type: String,required: false},
      field: {type: String, requried: true, trim: true},
      registerAt:Date
    }
 
  );
  
const User = mongoose.model("User",UserSchema);
module.exports = User; 