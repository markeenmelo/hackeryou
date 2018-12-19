const mongoose = require('mongoose')
const Movie = require('../models/Movie')
const movies = require('./movies')
require('dotenv').config()

const truncateDatabase = async () => {
  return Promise.all([Movie.deleteMany(), Movie.deleteMany()])
}

const makeSeeds = async () => {
  await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
  await truncateDatabase()
  await Promise.all(movies.map(movie => movie.save()))
  mongoose.connection.close()
}

makeSeeds()
