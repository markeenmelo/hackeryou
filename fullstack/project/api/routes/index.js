const express = require('express');

const app = express();

app.get('/', (req, res, err) => {
  res.send('Welcome to Marcos final HackerYou Project')
})

module.exports = app
