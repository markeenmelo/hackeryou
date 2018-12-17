const express = require('express')
const path = require('path')
const app = express()

app.use('/', express.static('public'))

app.get('*', (req, res) => {
  res.send(`<h1>Not found</h1>`)
})

app.listen(3000, () => {
  console.log('Listening on 3000')
})
