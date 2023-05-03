const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
  
   useNewUrlParser:true,
   useUnifiedTopology:true,


});

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB Connected Successfully");
});

const user = require("./routes/User"); //use this when implementing routes
app.use("/User", user);

const travelplace = require("./routes/TravelPlace"); //use this when implementing routes
app.use("/TravelPlace", travelplace);



app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})