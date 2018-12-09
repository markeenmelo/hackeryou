const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const user = require('../middleware/user')

router.get('/me', auth, user, async (req, res, next) => {
  res.status(200).send({ data: [req.user] })
})

exports.router = router
