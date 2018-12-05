const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', async function (next) {
  if (user.isModified('password') || user.isNew) {
    const user = this
    const hash = await bcrypt.hash(user.password, 10)
    user.password = hash
  }
})

module.exports = model('Users', userSchema)
