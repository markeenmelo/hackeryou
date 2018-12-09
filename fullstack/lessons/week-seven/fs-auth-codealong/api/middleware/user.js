const User = require('../models/User')

module.exports = async (req, res, next) => {
  const {id} = req.token.user
  // find the user in our db by their id
  try {
    const doc = await User.findById(id)
    // if we find the user
    if (doc) {
      // send back the user
      req.user = doc
      next()
    } else {
      next(new Error('not found'))
    }
  } catch (e) {
    next(e)
  }
}
