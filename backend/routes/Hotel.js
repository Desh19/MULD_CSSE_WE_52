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
      Hotels.find().then((hotels)=>{
        res.json(hotels)
    }).catch((err)=>{
        console.log(err);
    })
})

//Get a Hotel by ID
router.get('/:id', (req, res) => {
      Hotels.findById(req.params.id)
      .then(hotel => res.json(hotel))
      .catch(err => res.status(404).json({ noitemfound: 'No hotel found' }));
  });


  //get own added hotels
  router.route("/ownhotel/:id").get((req,res)=>{

    const id = req.params.id;
  
    Hotels.find({hotelOwnerID:id}).then((hotel)=>{
        res.json(hotel)
    }).catch((err)=>{
        console.log(err)
    })
  
  })

  //update hotel
  router.put('/update/:id', (req, res) => {
      Hotels.findByIdAndUpdate(req.params.id, req.body)
      .then(hotel => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });

  //delete hotel
  router.delete("/delete/:id", (req, res) => {
      Hotels.findByIdAndRemove(req.params.id, req.body)
      .then((hotel) => res.json({ msg: "Hotel deleted successfully" }))
      .catch((err) => res.status(404).json({ error: "No such a Hotel" }));
  });


module.exports = router;