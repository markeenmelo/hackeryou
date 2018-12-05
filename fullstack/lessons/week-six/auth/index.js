'use strict';

const mongoose = require('mongoose')

const server = require('./api/server')
const { PORT, DB_URI } = require('./api/utils/constants')
const uri = 'mongodb://localhost:27017/auth'

server.listen(PORT, async () => {
  await mongoose.connect(uri)
  console.log(`App listening on port ${PORT}`)
});
