/**
 * ADiSys - Advanced Dispensaries System
 * by Ivan Khromov with ❤️
 */

const express = require('express')
const dotenv  = require('dotenv').config()
const hbs = require('hbs');
const app = express()

const mongoose = require('mongoose')

mongoose.connect(process.env.DB_DSN)
  .then(() =>  console.log('DB connection succesful'))
  .catch((err) => console.error(err));
const Patient = require('./models/patient')

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: 'layout/app' });

app.get('/', function(req, res) {
  Patient.find({}, function(err, patients) {
    if (err) throw err
    res.render('patients/list', {
      patients: patients
    })
  })
})

app.listen(process.env.PORT, () => console.log('ADiSys listening on port 3000!'))
