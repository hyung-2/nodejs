const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  password: {
   type: String,
   required: true, 
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  lastModifiedAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User

// const user = new User({
//   name: '김철수',
//   email: 'cheol@gmail.com',
//   userId: 'cheolsu',
//   password: '2341',
//   isAdmin: true,
// })

// user.save()
//   .then(() => console.log('유저 생성 완료!'))