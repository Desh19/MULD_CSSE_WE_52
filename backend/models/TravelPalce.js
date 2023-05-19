const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const TravelPlaceSchema = new mongoose.Schema(
    {
      agentID:{type: String,required: true,},
      name:{type: String,requried: true,trim: true},
      discription:{type: String,requried: true,trim: true},
      image:{type: String, requried: true},
      location:{type: String,requried: true,trim: true},
      famousfor:{ type: String,requried: true,trim: true},
      bestTimeVisit: {type: String, requried: true, trim: true},
      attraction: {type: String, requried: true, trim: true},
      map: {type: String, requried: true, trim: true},
    }
 
  );
  
const TravelPlace = mongoose.model("TravelPlace",TravelPlaceSchema);
module.exports = TravelPlace; 