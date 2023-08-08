const express = require('express')
const { rmSync } = require('fs')
const send = require('send')
const app = express() 
const router = express.Router()
const port = 5100 
const mongoose = require('mongoose')


//몽고db 서버와 연결하기
const CONNECT_URL = 'mongodb://127.0.0.1:27017/Book'

mongoose.connect(CONNECT_URL)
  .then(() => console.log('mongodb 연결됨..'))
  .catch(e => console.log(`연결 실패: ${e}`))

//현재 사용자의 도서목록 출력하기

const books = {
  홍길동: ['책1', '책2', '책3', '책4'],
  김영희: ['만화책1','만화책2','만화책3','만화책4'],
  김철수: ['소설책1','소설책2','소설책3','소설책4']
}

//로그기록
const log = function(req, res, next){
  req.requestTime = new Date()
  console.log(`LOG - ${req.requestTime}`)
  next()
}

app.use(log)

// /users/:name/books GET 현재 사용자의 전체 도서목록 조회
app.get('/users/:name/books', function(req, res, next){
  res.send(`${req.params.name}님의 전체 도서 목록은 ${books[req.params.name]} 입니다.`)
})

// /users/:name/books/:name GET 현재 사용자의 특정 도서 조회
app.get('/users/:name/books/:bookname', function(req, res, next){
  if(books[req.params.name].includes(req.params.bookname)) {
    res.send(`${req.params.name}님의 도서 목록 : ${req.params.bookname}`)}
    else{
      res.send(`${req.params.name}님의 도서 목록에는 없는 도서 입니다.`)
    }
  })
  
// /users/:name/books?book=해리포터 POST 현재 사용자의 도서목록에 특정 도서 추가 (쿼리스트링 값 조회)
app.post('/users/:name/books', (req, res, next) => {
  copybooks=[...books[req.params.name]]
  copybooks.push(req.query.book)
  res.send(`${req.params.name}님의 도서 목록은 ${copybooks}이며 총 ${copybooks.length}개 입니다.`)
})

// /users/:name/books/:name PUT 현재 사용자의 특정 도서내용 변경
app.put('/users/:name/books/:bookname', (req, res, next) => {
  if(books[req.params.name].includes(req.params.bookname)){
    let filtered = books[req.params.name].filter((element) => element !== req.params.bookname)
    res.send(`${req.params.name}님의 도서 목록중 ${req.params.bookname}이 ${req.query.book}(으)로 변경되었습니다.
    현재 ${req.params.name}님의 도서 목록은 ${filtered},${req.query.book} 입니다.`)
  }else{
    res.send(`${req.params.bookname}(은)는 ${req.params.name}님의 도서목록에 없는 도서입니다.`)
  }
})

// /users/:name/books/:name DELETE 현재 사용자의 특정 도서 삭제
app.delete('/users/:name/books/:bookname', (req, res, next) => {
  let filtered = books[req.params.name].filter((element) => element !== req.params.bookname)
  res.send(`${req.params.name}님의 도서 목록중 ${req.params.bookname}을 삭제하였습니다. 
  현재 ${req.params.name}님의 도서 목록은 ${filtered} 입니다.`)
})
















app.listen(port, () => {
  console.log(`현재 port 주소는 ${port}`)
})

