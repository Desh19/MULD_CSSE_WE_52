const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const TravelPlaceSchema = new mongoose.Schema(
    {
      name:{type: String, requried: true, trim: true},
      discription:{type: String, requried: true,trim: true},
      image: 
      {type: String, 
        // requried: true
      },
      transportType: {type: String, requried: true, trim: true}
    }
 
  );
  
const TravelPlace = mongoose.model("TravelPlace",TravelPlaceSchema);
module.exports = TravelPlace; 