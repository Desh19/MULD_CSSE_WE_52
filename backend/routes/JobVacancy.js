const router = require("express").Router();
const JobVacancy = require('../models/JobVacancy');

//Add Job Vacancy
router.post('/add', (req, res) => {
    JobVacancy.create(req.body)
      .then(jobvacancy => res.json({ msg: 'job added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this job' }));
});

router.route("/").get((req,res)=>{
  JobVacancy.find().then((jobvacancy)=>{
      res.json(jobvacancy)
  }).catch((err)=>{
      console.log(err);
  })
})

//Get a job by ID
router.get('/:id', (req, res) => {
  JobVacancy.findById(req.params.id)
    .then(jobvacancy => res.json(jobvacancy))
    .catch(err => res.status(404).json({ noitemfound: 'No job found' }));
});

  //get own added jobs
  router.route("/ownjob/:id").get((req,res)=>{

    const id = req.params.id;
  
    JobVacancy.find({createdByID:id}).then((jobvacancy)=>{
        res.json(jobvacancy)
    }).catch((err)=>{
        console.log(err)
    })
  
  })

module.exports = router;