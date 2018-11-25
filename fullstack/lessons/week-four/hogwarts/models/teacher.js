const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthday: Date,
    subjects: Array
})

module.exports = mongoose.model('Teacher', teacherSchema)
