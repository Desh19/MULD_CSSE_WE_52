const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const HotelSchema = new mongoose.Schema(
    {
      hotelOwnerID:{
        type: String,
        required: true,
      },
      name:
      { type: String, 
        requried: true, 
        trim: true
      },
      about:
      { type: String, 
        requried: true,
        trim: true
      },
      image: 
      {type: String, 
        // requried: true
      },
      location: 
      { type: String, 
        requried: true, 
        trim: true
      },
      contact: 
      { type: String, 
        requried: true, 
        trim: true
      },
      createdAt:Date,

    }
 
  );
  
const Hotel = mongoose.model("Hotel",HotelSchema);
module.exports = Hotel; 