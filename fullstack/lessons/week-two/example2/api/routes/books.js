const express = require('express')

const router = express.Router()

const books = [
    {id: '1', name: 'Civil war', publisher: 'Marvel'},
    {id: '2', name: 'Dark knight', publisher: 'DC'},
    {id: '3', name: 'Constantine', publisher: 'Vertigo'},
    {id: '4', name: 'Watchmen', publisher: 'Vertigo'},
]

router.route('/:identifier')
    .get((req, res) => {
        const { identifier } = req.params
        const matchingBooks = books.filter(book => book.id === Number(identifier))
        if (matchingBooks > 0) {
            res.json({data: matchingBooks})
        } else {
            res.status(400).send()
        }
    })

router.route('/')
    .get((req, res) => {
        res.json({data: books})
    })
    .post((req, res) => {
        const { body } = req
        const {name, publisher} = body
        const id = books.length

        const book = {
            id,
            name,
            publisher,
        }
        books.push(book)
        res.json({ data: [ { id } ] })
    })

exports.router = router
