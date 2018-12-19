const Movie = require('../models/Movie')
const movies = []

/* SAMPLE SEED
const aquaman = new Movie({
  title: 'Aquaman',
  overview: "The film reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime—one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be… a king.",
  release_data: 2018,
  rate: 7,
  poster_path: "http://image.tmdb.org/t/p/original/"
})
movies.push(aquaman)
*/

const aquaman = new Movie({
  title: 'Aquaman',
  overview: "The film reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime—one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be… a king.",
  release_date: 2018,
  rate: 7,
  poster_path: "http://image.tmdb.org/t/p/original/ydUpl3QkVUCHCq1VWvo2rW4Sf7y.jpg"
})
movies.push(aquaman)

const venom = new Movie({
  title: 'Venom',
  overview: "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of an alien symbiote that gives him a violent super alter-ego: Venom. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
  release_date: 2018,
  rate: 7,
  poster_path: "https://image.tmdb.org/t/p/original/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg"
})
movies.push(venom)

const avengers = new Movie({
  title: 'Avengers: Infinity War',
  overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
  release_date: 2018,
  rate: 7,
  poster_path: "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
})
movies.push(avengers)

module.exports = movies

