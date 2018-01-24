/**
 * ADiSys - Advanced Dispensaries System
 * by Ivan Khromov with ❤️
 */

const express = require('express')
let app = express()

app.get('/', (req, res) => res.send('Hi, adisys!'))

app.listen(7421, () => console.log('ADiSys listening on port 3000!'))
