const Movie = require('../models/Movie')
const movies = []

const ghostbuster = new Movie({
  title: 'Ghostbusters',
  overview: "Who you are gonna call?",
  release_data: 1984,
  rate: 8,
  poster_path: "https://upload.wikimedia.org/wikipedia/en/3/32/Ghostbusters_2016_film_poster.png"
})
movies.push(ghostbuster)

const matrix = new Movie({
  title: 'Matrix',
  overview: "Neo saves the world",
  release_data: 2001,
  rate: 8,
  poster_path: "https://i.movieposter.com/posters/22548.jpg"
})
movies.push(matrix)

module.exports = movies

