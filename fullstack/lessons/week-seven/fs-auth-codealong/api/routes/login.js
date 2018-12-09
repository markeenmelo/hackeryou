const express = require('express');
const router = express.Router();
const User = require('../models/User')
const tokenService = require('../utils/tokenService')

router.post('/', async (req, res, next) => {
  // retrieve user and password from body
  const {email, password} = req.body;

  //  find user in our db via their email
  try {
    const user = await User.findOne({email})

    // if no user, send not found error
    if (!user) return next(new Error('not found'))

    // compare user password again request body password
    // if they match, match = true
    // if they don't match, match = false
    const match = await user.comparePassword(password)

    if (match) {
      // generate a token
      const token = tokenService.create(user)
      res.status(200).send({data: [token]})
    } else {
      next(new Error('unauthorized'))
    }
  } catch (e) {

  }
});

exports.router = router;
