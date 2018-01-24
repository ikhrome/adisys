const mongoose = require('mongoose')
const Schema = mongoose.Schema

let patientsSchema = new Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  birthdate: Date
})

let Patient = mongoose.model('Patient', patientsSchema)

module.exports = Patient
