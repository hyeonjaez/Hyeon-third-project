
const http = require("http");

const server = http.createServer(function(req,res){
   const url = req.url;
   if(req.url =='/'){
    url = '/login.html';
   }
   if(req.url == '/favicon.ico'){
        return res.writeHead(404);
  }
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));


});


server.listen(3000,function(){
    console.log("The server is listening on port 3000")
});
