const router = require("express").Router();
const TravelPlace = require('../models/TravelPalce');

//Add Travel Place
router.post('/add', (req, res) => {
    TravelPlace.create(req.body)
      .then(place => res.json({ msg: 'place added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this places' }));
  });
// router.route("/add").post((req,res)=>{
//     const name = req.body.name;
//     const discription = req.body.discription;
//     const image = req.body.image;
//     const location = req.body.location;
//     const famousfor = req.body.famousfor;
//     const bestTimeVisit = req.body.bestTimeVisit;
//     const attraction = req.body.attraction;
    

//     const newplace = new TravelPlace({

//         name,
//         discription,
//         image,
//         location,
//         famousfor,
//         bestTimeVisit,
//         attraction
//     })

//     newplace.save().then(()=>{
//         res.json("New Post Added")
//     }).catch((err)=>{
//         console.log(err);
//     })
// })

//Get All Travel Place
router.route("/").get((req,res)=>{
    TravelPlace.find().then((places)=>{
        res.json(places)
    }).catch((err)=>{
        console.log(err);
    })
})

//Get a Travel Place by ID
router.get('/:id', (req, res) => {
    TravelPlace.findById(req.params.id)
      .then(travelplace => res.json(travelplace))
      .catch(err => res.status(404).json({ noitemfound: 'No place found' }));
  });


  //get own added places
  router.route("/ownplace/:id").get((req,res)=>{

    const id = req.params.id;
  
    TravelPlace.find({agentID:id}).then((travelplace)=>{
        res.json(travelplace)
    }).catch((err)=>{
        console.log(err)
    })
  
  })

  //update place
  router.put('/update/:id', (req, res) => {
    TravelPlace.findByIdAndUpdate(req.params.id, req.body)
      .then(travelplace => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });


module.exports = router;