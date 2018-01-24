/**
 * ADiSys - Advanced Dispensaries System
 * by Ivan Khromov with ❤️
 */
// Require all needed dependencies:
const express = require('express')
const dotenv  = require('dotenv').config()
const hbs = require('hbs');
const app = express()
const mongoose = require('mongoose')

// Connect to MongoDB:
// WARNING: don't forget to put .env file into root directory!
mongoose.connect(process.env.DB_DSN)
  .then(() =>  console.log('DB connection succesful'))
  .catch((err) => console.error(err));

// Handlebars. Register all needed functionality.
// All templates are in ./views/ directory
// All partials were placed at /views/partials
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: 'layout/app' });

// Set application default route, which performs 301 redirect
// for browser. New location is /patients/list.
// TODO: Check auth in future!
app.get('/', (req, res) => res.redirect(301, "/patients/list/"))

app.listen(process.env.PORT, () => console.log(`ADiSys listening on port ${process.env.PORT}!`))
