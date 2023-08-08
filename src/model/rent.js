const mongoose = require('mongoose')
const moment = require('moment')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const book = require('./book.js')
const user = require('./user.js')

const rentSchema = new Schema({
bookObjectId:{
  type: String,
  // required: true,
},
rentUsers: [{ 
  type : ObjectId, 
  ref: 'User', 
  // required: true,
}],
userEmail:{
  type: String,
  // required: true,
},
isRent: {
  type: Boolean,
  default: false,
},
rentDate: {
  type: Date,
  default: Date.now,
},
finishRentDate:{
  type: Date,
  default: Date.now,
},
})


const Rent = mongoose.model('rent',rentSchema)
module.exports = Rent

const rent = new Rent({
  bookObjectId: book,
  rentUser: user.name,
  userEmail: user.name,
  rentDate: moment().format("2023-08-05T16:40:58.375+00:00")
  
})

rent.save()
  .then(() => console.log('생성완료', user, user.name, book))