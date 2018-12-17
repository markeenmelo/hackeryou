const mongoose = require('mongoose')
const server = require('./api/server')
require('dotenv').config()

server.listen(process.env.API_PORT, async () => {
    await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
    console.log(`Database connected at ${process.env.DB_URI}`)
    console.log(`App listening on port ${process.env.API_PORT}`)
});
