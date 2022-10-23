var mysql = require('mysql');
var os = require('os');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'jh'
});




function create_id() {
    var name = document.getElementById('name', name);
    var id = document.getElementById('id', id);
    var password = document.getElementById('password', password);
    var password2 = document.getElementById('password2');
    var sex = document.getElementById('sex', sex);
    var email = document.getElementById('email', email);

    var pattern1 = /[0-9]/;
    var pattern2 = /[a-zA-Z]/;
    var pattern3 = /[~!@\#$%<>^&*]/;
    var email_pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    
/*  var id = id.value;
    var pw = password.value;
    var name = name.value;
    var sex = sex.value;
    var email = email.value;*/
    

    if (name.value == "" || id.value == "" || password.value == "" || password2.value == "" ||  email.value == "" ) {
        alert("빈칸이 있습니다.");
    }

    else if (password.value !== password2.value) {
        
            alert("비밀번호를 확인 해 주세요");
        
    }
    
    else if (sex.value == "---"){

        

        alert("성별을 골라주세요");

        
        
    }

    else if(!pattern1.test(pw) || !pattern2.test(pw) || !pattern3.test(pw) || pw.length < 8 || pw.length > 50 ){

        alert("영문+숫자+특수기호 8자리 이상으로 구성하여야 합니다.");

        
    }

    else if (email_pattern.test(email.value)) {
        alert("이메일 형식이 아닙니다!");
    }

    else {

        alert("회원가입 완료!");
        location.href = "http://localhost:3000";

    }
    
}


function login() {

    
    location.href = "./main.html"

}

function rm() {
    

    localStorage.clear('id', id)
    localStorage.clear('password', pw)
    localStorage.clear('name', name)
    localStorage.clear('sex', sex)
    localStorage.clear('email', email)
}


function main() {

    

}

function mypagestart(){
    location.href = "./mypage.html";
}

function mainpagestart() {
    location.href = "./main.html";
}

function mypage() {
    
    
    }