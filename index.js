const express = require('express');
const http = require('http');
const fs = require('fs');
const homePage = fs.readFileSync('index.html');
const signInPage = fs.readFileSync('signIn.html');
//const userProfilePage = fs.readFileSync('userProfile.html');
const notFoundPage = fs.readFileSync('notFound.html');


const app = express();
app.listen(3000, () =>{
    console.log("App listening on port 3000");
});


const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.end(homePage)
    else if(req.url === '/signIn')
        res.end(signInPage)
    else {
        res.writeHead(404)
        res.end(notFoundPage)
    }
    console.log(req.url)
    res.end('Hello Node.js')
})

server.listen(3000)


