const router = require("express").Router();
const Hotels = require('../models/Hotel');

//Add Hotel
router.post('/add', (req, res) => {
      Hotels.create(req.body)
      .then(hotel => res.json({ msg: 'hotel added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this hotel' }));
  });

//Get All Hotels
router.route("/").get((req,res)=>{
      Hotels.find().then((places)=>{
        res.json(places)
    }).catch((err)=>{
        console.log(err);
    })
})

//Get a Hotel by ID
router.get('/:id', (req, res) => {
      Hotels.findById(req.params.id)
      .then(travelplace => res.json(travelplace))
      .catch(err => res.status(404).json({ noitemfound: 'No hotel found' }));
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


module.exports = router;