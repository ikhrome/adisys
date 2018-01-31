const express = require('express')
const router  = express.Router()

// Import all models!
// If I use ref fields, I need to import all of this here:
const Patient = require('../models/patient')
require('../models/workplace')

router.get('/list', function(req, res) {
	Patient.find()
		.populate('workplace')
		.exec((err, pats) => {
			res.render('patients/list', {
				patients: pats
			})
		})
})

router.get('/card/:id', function(req, res) {
	// TODO: check id by regular expression!
	res.send(`ObjectId passed into route is: ${req.params.id}. TODO: make magic!`)
})

module.exports = router
