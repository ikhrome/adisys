const express = require('express')
const router  = express.Router()
const logger  = require('winston')

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

module.exports = router
