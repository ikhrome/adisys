const express = require('express')
const router  = express.Router()

router.get('/list', function(req, res) {
  res.send('This is "list" route!')
})

module.exports = router
