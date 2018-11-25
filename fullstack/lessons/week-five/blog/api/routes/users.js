const express = require('express')
const Router = express.Router
const router = Router()

const User = require('../models/User')

router.get('/', async (req, res, next) => {
    try {
        const docs = await User.find()
        res.status(200).send({
            data: docs
        })
    } catch (e) {
        next(e)
    }
})

router.get('/:user_id', async (req, res, next) => {
    const { user_id } = req.params
    try {
        const doc = await User.findById(user_id)
        res.status(200).send({
            data: [doc]
        })
    } catch (e) {
        next(e)
    }
})

module.exports = router
