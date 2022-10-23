const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mysql = require('mysql');
var os = require('os');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'jh'
});

var today = new Date();
var signuptoday = (`${today.getFullYear()}년 ${today.getMonth()}월 ${today.getHours()}시 ${today.getMinutes()}분 ${today.getSeconds()}초`);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use("/", express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/login.html")
})

app.post('/', function(req,res){

    console.log(req.body);
    

    connection.connect(function(err) {

        connection.query(`select * from jhuser where id="${req.body.id}" and pw="${req.body.pw}" ;`, function(err, rows, fields){
            console.log(rows);
            if (rows.length === 1) {
                if(err) throw(err);
                return res.redirect(`${req.body.id}`);
            } else {  
                // 로그인ㄴㄴ
            }
                    
        })
    })
}) 

app.get('/signup.html', function(req,res) {
    res.sendFile(__dirname + "/signup.html")
})

app.post('/signup.html', (req, res) => {
    
    console.log(req.body);
    
    connection.connect(function(err) {

        connection.query (`select * from jhuser where id="${req.body.id}";`, function(err, rows, fields){
            if(rows.length == 0){

                
            connection.query(`INSERT INTO jhuser(name,id,pw,sex,email,date) VALUES("${req.body.name}","${req.body.id}","${req.body.pw}","${req.body.sex}","${req.body.email}", '${signuptoday}')`); {
            if(err) throw(err);
            
            return res.redirect("/");

            }

        }
            else {
                alert("아이디 중복");
                
            }

    });});
});

app.get('/main.html', function(req,res) {
    res.sendFile(__dirname + "/main.html")
})

app.post('/main.html', function(req, res) {

})

app.get('/:id', function(req,res) {
    
    let data = req.url;
    //const URL = require("url").URL;
    //let queryData = url.parse(data,true).query
    data = data.replace("/", "")
    //let title = queryData.id;
    connection.query(`select * from jhuser where id="${data}";`, (err, result) => { const id = result;
        
        })
    console.log(id);
    res.writeHead(200);
    
        var template =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="http://localhost:3000/mypage.css">
        <script src="./study4.js"></script>

    </head>
    <body>
        <div class="main">
            <div class="center">
                <div class="headline">${""} 님의 마이페이지 </div>
                <div class="nickname">별명 : ${""}</div>
                <div class="id">아이디 : ${""}</div>
                <div class="email">이메일 : ${""}</div>
                <div class="sex">성별 : ${""}</div>
                <div class="return">
                    <input type="submit" value="뒤로 돌아가기" onclick="mainpagestart()">
                </div>
            </div>
        </div>
        
    </body>
    </html>`
    
    
    res.end(template);

    
    
    //res.sendFile(__dirname + "/mypage.html")
})

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});

var mysql = require('mysql');
const { connect } = require('http2');
const { response } = require('express');

var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'jh'
});

db.connect();

