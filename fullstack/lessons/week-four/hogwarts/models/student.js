const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthday: Date,
    house: String,
    friends: Array
})

module.exports = mongoose.model('Student', studentSchema)
