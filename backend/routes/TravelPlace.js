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

  //delete place
  router.delete("/delete/:id", (req, res) => {
    TravelPlace.findByIdAndRemove(req.params.id, req.body)
      .then((travelplace) => res.json({ msg: "Place entry deleted successfully" }))
      .catch((err) => res.status(404).json({ error: "No such a Place" }));
  });

  // // Create a new route that handles GET requests for deleted posts
  // router.get('/deleted', async (req, res) => {
  //   try {
  //     // Use a MongoDB query to find all deleted posts
  //     const travelplace = await Post.find({ deleted: true });

  //     // Return the deleted posts in the response
  //     res.status(200).json({ travelplace });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ message: 'Server error' });
  //   }
  // });


module.exports = router;