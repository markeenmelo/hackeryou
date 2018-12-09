const { SECRET } = require('./constants')
const jwt = require('jsonwebtoken')

const create = user => {
  // grab the user`s id
  const id = user._id

  // create our payload
  const payload = {
    user: {
      id
    }
  }

  return jwt.sign(payload, SECRET)
}

const verify = token => jwt.verify(token, SECRET)

module.exports = {
  create,
  verify
}
