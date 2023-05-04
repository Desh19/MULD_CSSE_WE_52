const router = require("express").Router();
const TravelPlace = require('../models/TravelPalce');

//Add Travel Place
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const discription = req.body.discription;
    const image = req.body.image;
    const location = req.body.location;
    const famousfor = req.body.famousfor;
    const bestTimeVisit = req.body.bestTimeVisit;
    const attraction = req.body.attraction;
    

    const newplace = new TravelPlace({

        name,
        discription,
        image,
        location,
        famousfor,
        bestTimeVisit,
        attraction
    })

    newplace.save().then(()=>{
        res.json("New Post Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//Get All Travel Place
router.route("/").get((req,res)=>{
    TravelPlace.find().then((places)=>{
        res.json(places)
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;