/**
 * ADiSys - Advanced Dispensaries System
 * by Ivan Khromov with ❤️
 */

const express = require('express')
const dotenv  = require('dotenv').config()
const app = express()

app.get('/', (req, res) => res.send('Hi, adisys!'))

app.listen(process.env.PORT, () => console.log('ADiSys listening on port 3000!'))
