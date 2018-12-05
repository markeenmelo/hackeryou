const express = require('express');
const router = express.Router();
const User = require('../models/user.js')

router.post('/', async (req, res, next) => {
  // get the email and password from the request body
  const {email, password} = req.body
  // create a new instance of the user model
  try {
    const user = new User({email, password})
    // save it
    const doc = await user.save()
    res.status(200).send({
      data: [doc]
    })
  } catch (e) {
    // if unsuccessful, send back error
    next(e)
  }
});

module.exports = router
