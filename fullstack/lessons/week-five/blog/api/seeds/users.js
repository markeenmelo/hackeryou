const User = require('../models/User')
const users = []

const mark = new User({
    name: 'Mark'
})

users.push(mark)

const talia = new User({
    name: 'Talia'
})

users.push(talia)

module.exports = users
