const router = require("express").Router();
const JobVacancy = require('../models/JobVacancy');

//Add Job Vacancy
router.post('/add', (req, res) => {
    JobVacancy.create(req.body)
      .then(jobvacancy => res.json({ msg: 'place added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this places' }));
});

module.exports = router;