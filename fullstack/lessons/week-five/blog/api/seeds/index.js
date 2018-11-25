const mongoose = require('mongoose')

const User = require('../models/User')
const { Post } = require('../models/Post')
const users = require('./users')
const post = require('./post')
const uri = 'mongodb://localhost:27017/blog'

const truncateDatabase = async () => {
    return Promise.all([User.deleteMany(), Post.deleteMany()])
}

const makeSeeds = async () => {
    await mongoose.connect(uri)
    await truncateDatabase()
    await Promise.all(users.map(user => user.save()))
    await post.save()
    mongoose.connection.close()
}

makeSeeds()
