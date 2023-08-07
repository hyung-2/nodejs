const express = require('express') // 모듈 임포트
const { rmSync } = require('fs')
const send = require('send')
const app = express() //app:객체 express():함수
const router = express.Router()
const port = 3000 // 서버 포트

//미들웨어(middleware)
//라우트 핸들러 함수 : 미들웨어 중에서 라우트 경로가 포함된 미들웨어 
// '/' : 라우트(route) : 이경로로 들어오면 req, res실행
// .get : HTTP 메서드(get메서드가 왔을때 처리해달라)
// HTTP 메서드 (GET, POST, PUT, DELETE ...)

//req(request): 요청 객체, res(response):응답 객체
//send : 브라우저한테 데이터 전송
// app.get('/', (req, res) => {
//   res.send('Hellow world!')
// })
// app.post('/', function (req, res){
//   res.send('Got a POST request')
// })
// //put : 데이터 업데이트,변경
// app.put('/user', function(req,res){
//   res.send('Got a PUT request at /user')
// })
// //delete : 해당 데이터 삭제
// app.delete('/user', function(req,res){
//   res.send('Got a DELETE request at /user')
// })
//----------------------------------------------------------------------------
// // 모든 요청에 대하여 항상 실행되는 미들웨어, req, res 객체도 중간에서 변경함
// const myLogger = function(req, res, next){
//   req.requestTime = new Date()
//   //req : {requestTime : 'Mon Aug 07 2023 11:01:09 GMT+0900'}
//   console.log(`LOGGED - ${req.requestTime}`)
//   next() //요청을 다음 미들웨어로 전달하는(넘겨주는) 함수
// }

// //미들웨어 등록
// app.use(myLogger)

// // app.use가 send보다 아래에있으면 이미 브라우저에 응답했기때문에 실행하지 않음 (return같은 느낌)
// app.get('/', function(req, res){ //미들웨어 - 라우트 핸들러 함수 (/라는 주소가 들어가야만 실행)
//   res.send(`Hellow world! - ${req.requestTime}`)
// })

//----------------------------------------------------------------------------

// router.use(function (req, res, next){
//   console.log('Time:', Date.now())
//   next() //아직 서버에서 처리가 끝나지 않은 상태
// })

// // :id : URL 파라미터 (/user/사용자 아이디값)
// // use : 모든 HTTP 메서드에 대하여 해당 경로와 일치하면 실행
// router.use('/user/:id', function(req, res, next){
//   console.log('Request URL: ', req.originalUrl)
//   next()
//   // res.status(200).send(`user id: ${req.params.id}`)
//   //status코드에 따라 응답이 바뀜 200-성공 404-Not Found
// }, function(req, res, next){
//   console.log('Request Type: ', req.method)
//   next()
// })

// router.get('/user/:id', function(req, res, next){
//   if(req.params.id == 0) next('route')
//   else next()
//   // console.log('유저 ID: ', req.params.id)
//   next()
// }, function(req, res, next){
//   // res.send('User Info')
//   res.send('일반 사용자')
//   // 일반 홈페이지
// })
// // 위에서 send 'User Info'로 종료되었기때문에 아래코드는 영원히 실행되지 않음

// //req.qarams.id === 0 인경우 실행
// router.get('/user/:id', function(req, res, next){
//   res.send('관리자 유저')
//   // 어드민페이지
// })

// app.use('/api', router) // router -> 서버 URL에 대한 처리 로직을 생성
// // /api 라는 URL 주소부터 시작해서 하위에 서브 URL을 만들고 그 안에 라우트핸들러 함수로 실행 (하나의 모듈)
//----------------------------------------------------------------------------

// app.set('case sensitive routing', true);

// app.get('/about', (req, res) => {
//   res.send('this is about page !')
// })
//----------------------------------------------------------------------------

// // * : 와일드카드 (/users로 시작하는 모든 URL은 이 로직 실행-뒤 contact나 city는 실행되지 않음)
// app.get("/users*", (req, res) => {
//   res.send("users wildcards !")
// })
// app.get("/users/contact", (req, res) => {
//   res.send("contact page !")
// })
// app.get("/users/city", (req, res) => {
//   res.send("city page !")
// })


// //서버 통합하고싶으면 이런식으로도 사용가능
// app.get("/about*", (req, res) => {
//   if(req.originalUrl === '/about'){
//     res.send("users wildcards !")
//   }else if(req.originalUrl === '/about/users'){
//     //유저관련 로직
//   }else if(req.originalUrl === '/about/comments'){
//     //댓글관련 로직
//   }
// })
//----------------------------------------------------------------------------

// app.get('/shirts', (req, res) => {
//   // res.send(`color: ${req.query.color} / ${req.query.size} `)
//   //url에서 쿼리스트링 읽어옴
// })
//----------------------------------------------------------------------------

// //HTML문서로도 전송 가능
// app.get('/hello', (req,res) => {
//   res.send(`
//     <html>
//       <head></head>
//       <body>
//           <h1>Hello world !</h1>
//           <input type='button' value='Submit'/>
//       </body>
//     </html>
//   `)
// })

// app.get('/google', (req, res) => {
//   res.redirect('https://google.com')
// })
//----------------------------------------------------------------------------



//(app.listen이 실행되면) 서버를 구동하고 브라우저 요청을 기다림
//맨 하단에 위치하는게 좋음
app.listen(port, () =>{
  console.log(`Example app listening on port ${port}`)
})