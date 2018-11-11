const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const mailboxHandler = require('./routes/mailbox')
const bookHandler = require('./routes/books')

app.use(bodyParser.json())
app.use('/mailbox', mailboxHandler.router)
app.use('/books', bookHandler.router)

app.get('/', (req, res) => {
    res.send("Hello, world!")
})

app.get('/name', (req, res) => {
    res.send("Marcos Melo")
})

module.exports = app
