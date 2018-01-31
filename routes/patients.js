const express = require('express')
const router  = express.Router()
const mongoose = require('mongoose');

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
	if(!mongoose.Types.ObjectId.isValid(req.params.id))
		res.status(403).send("Nope! This is not valid MongoDB ObjectId!")
	Patient.findOne({ _id: req.params.id }, function(err, patient) {
		res.render('patients/card', { patient: patient })
	})
})

module.exports = router
