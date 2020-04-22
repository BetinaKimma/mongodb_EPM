const express = require('express');
const path = require('path');
//const http = require('http');
//const fs = require('fs');
//const HomePage = fs.readFileSync('index.html');
//const signInPage = fs.readFileSync('sigIn.html');
//const userProfilePage = fs.readFileSync('userProfile.html');
//const notFoundPage = fs.readFileSync('notFound.html');


const app = new express();
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'views/register.html'))
});

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


