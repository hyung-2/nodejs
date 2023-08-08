const express = require('express')
const { rmSync } = require('fs')
const send = require('send')
const app = express() 
const router = express.Router()
const port = 5100 
const mongoose = require('mongoose')
const user = require('./src/model/user.js')
const book = require('./src/model/book.js')
const Rent = require('./src/model/rent.js')

//몽고db 서버와 연결하기
const CONNECT_URL = 'mongodb://127.0.0.1:27017/Book'

mongoose.connect(CONNECT_URL)
  .then(() => console.log('mongodb 연결됨..'))
  .catch(e => console.log(`연결 실패: ${e}`))


//로그기록
const log = function(req, res, next){
  req.requestTime = new Date()
  console.log(`LOG - ${req.requestTime}`)
  next()
}

app.use(log)














app.listen(port, () => {
  console.log(`현재 port 주소는 ${port}`)
})
  
  