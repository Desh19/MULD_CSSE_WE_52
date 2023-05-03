const router = require("express").Router();
const TravelPlace = require('../models/TravelPalce');

//Add Travel Place
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const discription = req.body.discription;
    const image = req.body.image;
    const transportType = req.body.transportType;
    

    const newplace = new TravelPlace({

        name,
        discription,
        image,
        transportType
    })

    newplace.save().then(()=>{
        res.json("New Post Added")
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;