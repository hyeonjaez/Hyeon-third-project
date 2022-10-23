const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "4"));


app.get('/', function(req,res) {
    res.sendFile(__dirname + "/login.html")
})


app.get('/signup.html', function(req,res) {
    res.sendFile(__dirname + "/signup.html")
})

app.get('/main.html', function(req,res) {
    res.sendFile(__dirname + "/main.html")
})

app.get('/mypage.html', function(req,res) {
    res.sendFile(__dirname + "/mypage.html")
})





app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});