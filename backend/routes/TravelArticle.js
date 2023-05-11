const express = require('express');
const router = express.Router();

// Load Item model
const Article = require('../models/TravelArticle');


// @description add/save Article
// @access Public
router.post('/add', (req, res) => {
    Article.create(req.body)
    .then(article => res.json({ msg: 'Article Published successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to publish this Article' }));
});

// @description Get all Articles
// @access Public
router.get('/', (req, res) => {
    Article.find().populate("userID")
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Articles found' }));
});

// @description Get single Article by id
// @access Public
router.get('/:id', (req, res) => {
    Article.findById(req.params.id).populate("userID")
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ noarticlefound: 'No Article found' }));
});

// @description Update Article
// @access Public
router.put('/update/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body)
    .then(article => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @description Delete Article by id
// @access Public
router.delete('/delete/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, req.body)
    .then(article => res.json({ msg: 'Article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Article' }));
});

// @description GET OwnArticles by id
// @access Public
router.route("/ownarticles/:id").get((req,res)=>{
  const id = req.params.id;
  Article.find({userID:id}).populate("userID").then((article)=>{
      res.json(article)
  }).catch((err)=>{
      console.log(err)
  })

})

// @description PUT Like Article by id
router.put('/like', (req,res)=>{
    Article.findByIdAndUpdate(req.body.ArticleId,{
        $push:{likes:req.User._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

// @description PUT Unlike Article by id
router.put('/unlike', (req,res)=>{
    Article.findByIdAndUpdate(req.body.ArticleId,{
        $push:{likes:req.User._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})


module.exports = router;