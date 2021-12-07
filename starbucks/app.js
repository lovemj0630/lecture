//모듈추출및서버생성
var express = require('express');
var ejs = require('ejs');
var path = require('path');
var expressSession = require("express-session");// 세션을 쉽게생성 웹 서버에 정보를 저장
var bodyParser = require("body-parser");
const { response } = require('express');

var app = express();

//세션 설정
app.use(
    expressSession({
      secret: "my key",
      resave: true,
      saveUninitialized: true,
    })
  );

  
app.use(bodyParser.urlencoded({ extended: false }));

// view 엔진설정
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static(__dirname+ "/public"));


// 메인페이지 -> 127.0.0.1:3001/
app.get('/', function(request, response){
    if (request.session.user) {
        // id 값을 보내는 이유
        // starucks.ejs에서 if문으로 Logout 버튼 만들라고
        response.render("starbucks", {id : request.session.user.id});
    }
    else{
        // 로그인 안된 상태
        response.render("starbucks")
    }
});

// 로그인 처리 페이지
// 메인에 있는 로그인 버튼을 누른 경우
app.get('/login', function(request, response){
    // 이미 로그인이 된 경우
    if (request.session.user) {
        response.render("starbucks");
    }
    // 로그인 안된 경우
    else{
        // 로그인 페이지 보여줘
        response.render("login");
    }
});

// 로그인 처리
app.post('/login', function(request, response){
    // 사용자가 입력한 ID, PW 값
    var Id = request.body.id;
    var Password = request.body.password;

    // 로그인 비교해서 로그인이 성공한 경우
    if(Id=="mj" && Password == "1234")
    {
        // 세션 생성
        // 세션 이름 = user
        request.session.user = {
        id: Id,
        name: "mj",
        authorized: true,
      };

      // / 페이지(메인) 이동 
      response.redirect("/");
    }
    else{
        // 로그인 실패
        // 다시 로그인 페이지 보여줘
        response.render("login");
    }
});

// 로그아웃
app.get('/logout', function(request, response){
    // 세션이 있으면(로그인 되어있으면)
    if (request.session.user) {
        console.log("로그아웃합니다.");
    
        // 세션 삭제
        request.session.destroy(function (err) {
          if (err) {
            console.log("error");
          } else {
            console.log("세션을 삭제하고 로그아웃되었습니다.");

            // / 페이지(메인) 이동
            response.redirect("/");
          }
        });
      } else {
        // 로그인 안된 상태
        console.log("아직 로그인되어있지 않습니다.");
        response.render("login");
      }
});
// 가입 처리 페이지
// 메인에 있는 join now 버튼을 누른 경우
app.get('/join', function(request, response){
      response.render("join");
});
app.post("/join", function (request, response) {
  // ejs에서 값 가져오기
  id = request.body.id;
  Name = request.body.name;
  month =request.body.month;
  day =request.body.day;
  birthday= month+day;
  email = request.body.email;
  phone = request.body.phone;

});

app.get('/new', function(request, response){
  response.render("new");
});

app.get('/location', function(request, response){
  response.render("location");
});
app.get('/menu', function(request, response){
  response.render("menu");
});
app.get('/reward', function(request, response){
  response.render("reward");
});
app.get('/card', function(request, response){
  response.render("card");
});
app.get('/shop', function(request, response){
  response.render("shop");
});


// 서버실행
app.listen(3001, function(){
    console.log("Server Running at http://127.0.0.1:3001");
});