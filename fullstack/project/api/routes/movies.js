const express = require('express')
const Router = express.Router
const router = Router()

const Movie = require('../models/Movie')

router.get('/', async (req, res, next) => {
  try {
    const docs = await Movie.find()
    res.status(200).send(docs)
  } catch (e) {
    next(e)
  }
})

router.get('/:movie_id', async (req, res, next) => {
  const {movie_id} = req.params
  try {
    const doc = await Movie.findById(movie_id)
    res.status(200).send({
      data: [doc]
    })
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  const {title, overview, release_date, rate, poster_path} = req.body
  try {
    const doc = new Movie({title, overview, release_date, rate, poster_path})
    await doc.save()
    res.status(201).send({data: [doc]})
  } catch (e) {
    next(e)
  }
})

router.delete('/:movie_id', async (req, res, next) => {
  const {movie_id} = req.params
  try {
    await Movie.findOneAndDelete(movie_id)
    res.status(204)
  } catch (e) {
    next(e)
  }
})

module.exports = router
