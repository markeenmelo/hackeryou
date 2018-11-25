const mongoose = require('mongoose')
const seeds = require('./seeds')

const uri = 'mongodb://localhost:27017/hogwarts'

mongoose
    .connect(uri)
    .then(() => {
        console.log(`Successfully connected to: ${uri}`)
        seeds()
    })
    .catch(err => console.log(err.message))
