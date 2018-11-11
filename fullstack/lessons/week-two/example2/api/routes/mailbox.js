const express = require('express')

const router = express.Router()

const letters = [
    {type: 'letter', from: 'Marcos', to: 'Nara'},
    {type: 'letter', from: 'Nara', to: 'Marcos'},
    {type: 'letter', from: 'Marcos', to: 'Leda'},
    {type: 'letter', from: 'Marcos', to: 'Antonio'},
    {type: 'package', from: 'Amazon', to: 'Marcos'}
]

router.route('/')
    .get((req, res) => {
        const result = {
            data: letters,
        }
        res.json(result)
    })
    .post((req, res) => {
        const {type, from, to} = req.body
        if (type && from && to) {
            const mail = {
                type: req.body.type,
                from: req.body.from,
                to: req.body.to
            }
            letters.push(mail)
            res.send('got it')
        } else {
            res.status(400).send()
        }
    })

exports.router = router
