
const http = require('http');
const fs = require('fs');
//const HomePage = fs.readFileSync('index.html');
//const signInPage = fs.readFileSync('sigIn.html');
//const userProfilePage = fs.readFileSync('userProfile.html');
//const notFoundPage = fs.readFileSync('notFound.html');

const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log("App listening on port 3000");
});



//const server = http.createServer((req, res) =>{
//    if(req.url === '/userProfile')
//        res.end(userProfilePage)
//    else if(req.url === '/signIn')
//        res.end(signInPage)
//    else {
//        res.writeHead(404)
//        res.end(notFoundPage)
//    }
//    console.log(req.url);
//    res.end('Hello Node.js');
//});
//server.listen(3000)


