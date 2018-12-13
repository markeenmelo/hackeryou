const mongoose = require('mongoose')

const server = require('./api/server');
const { PORT, DB_URI } = require('./api/utils/constant');

server.listen(PORT, async () => {
  await mongoose.connect(DB_URI)
  console.log(`App listening on port ${PORT}`)
})
