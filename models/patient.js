const mongoose = require('mongoose')
const Schema = mongoose.Schema

let patientsSchema = new Schema({
	first_name: String,
	middle_name: String,
	last_name: String,
	home_address: String,
	workplace: {
		type:String,
		ref: 'Workplace'
	},
	status: {
		type: String,
		ref: 'Status'
	},
	insurance: {
		type: String,
		ref: 'Insurance'
	},
	birthdate: Date,
	notes: String,
	created_at: Date,
	updated_at: Date
})

patientsSchema.virtual('full_name').get(function() {
	return `${this.first_name} ${this.middle_name} ${this.last_name}`
})

let Patient = mongoose.model('Patient', patientsSchema)

module.exports = Patient
