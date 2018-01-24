/**
 * ADiSys - Advanced Dispensaries System
 * by Ivan Khromov with ❤️
 */

const express = require('express')
const dotenv  = require('dotenv').config()
const app = express()

const mongoose = require('mongoose')

mongoose.connect(process.env.DB_DSN)
  .then(() =>  console.log('DB connection succesful'))
  .catch((err) => console.error(err));
const Patient = require('./models/patient')

app.get('/', function(req, res) {
  Patient.find({}, function(err, patients) {
    if (err) throw err
    res.json(patients)
  })
})

app.listen(process.env.PORT, () => console.log('ADiSys listening on port 3000!'))
