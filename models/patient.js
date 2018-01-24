const mongoose = require('mongoose')
const Schema = mongoose.Schema

let patientsSchema = new Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  birthdate: Date
})

patientsSchema.virtual('full_name').get(function() {
  return `${this.first_name} ${this.middle_name} ${this.last_name}`;
});

let Patient = mongoose.model('Patient', patientsSchema)

module.exports = Patient
