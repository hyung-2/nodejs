const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const bookSchema = new Schema ({
  author: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  release:{
    type: Number,
    trim: true,
  },
  grade:{
    type: Number,
    trim: true,
  },
  isRent: {
    type: Boolean,
    default: false,
  },
  rentDate: {
    type: Date,
    default: Date.now
  },
  finishRentDate:{
    type: Date,
    default: Date.now
  }
})

const Book = mongoose.model('Book',bookSchema)
module.exports = Book

// const book = new Book({
//   author: '111111111111111111111111',
//   title : '시집1',
//   category: '시집',
//   release: 2019,
//   grade: 4.1,
// })
// const book2 = new Book({
//   author: '222222222222222222222222',
//   title: '시집2',
//   category: '시집',
//   release: 2022,
//   grade: 2.9,
//   isRent: true,
// })
// const book3 = new Book({
//   author: '333333333333333333333333',
//   title: '시집3',
//   category: '시집',
//   release: 2003,
//   grade: 3.5,
//   isRent: true
// })
// const book4 = new Book({
//   author: '444444444444444444444444',
//   title: '시집4',
//   category: '시집',
//   release: 1994,
//   grade: 4.2,
// })

// saving(book)
// saving(book2)
// saving(book3)
// saving(book4)



// function saving(book){
//   book.save()
//     .then(() => console.log(`${book.title} 생성 완료!`))
// }