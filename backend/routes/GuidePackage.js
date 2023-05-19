const express = require('express');
const router = express.Router();

// Load Item model
const Guide = require('../models/GuidePackage');


// @description add/save package
router.post('/add', (req, res) => {
    Guide.create(req.body)
    .then(Guide => res.json({ msg: 'Guide Package Published successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to publish this Guide' }));
});

// @description Get all packages
router.get('/', (req, res) => {
    Guide.find().populate("userID")
    .then(Guides => res.json(Guides))
    .catch(err => res.status(404).json({ noGuidesfound: 'No Guide Packages found' }));
});

// @description Get single package by id
router.get('/:id', (req, res) => {
    Guide.findById(req.params.id).populate("userID")
    .then(Guide => res.json(Guide))
    .catch(err => res.status(404).json({ noGuidefound: 'No Guide Package found' }));
});

// @description Update package
router.put('/update/:id', (req, res) => {
    Guide.findByIdAndUpdate(req.params.id, req.body)
    .then(Guide => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @description Delete package by id
router.delete('/delete/:id', (req, res) => {
    Guide.findByIdAndRemove(req.params.id, req.body)
    .then(Guide => res.json({ msg: 'Guide entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Guide' }));
});

// @description GET OwnPackages by id
router.route("/ownPackage/:id").get((req,res)=>{
  const id = req.params.id;
  Guide.find({userID:id}).populate("userID").then((Guide)=>{
      res.json(Guide)
  }).catch((err)=>{
      console.log(err)
  })

})

module.exports = router;