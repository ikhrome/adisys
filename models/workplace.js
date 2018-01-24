const mongoose = require('mongoose')
const Schema = mongoose.Schema

let workplaceSchema = new Schema({
	_id: { type: String },
	title: String
})

let Workplace = mongoose.model('Workplace', workplaceSchema)

module.exports = Workplace
