const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  release_date: {
    type: Number,
    required: false
  },
  rate: {
    type: Number,
    require: false
  },
  poster_path: {
    type: String,
    require: false
  }
})

module.exports = mongoose.model('Movie', MovieSchema)
