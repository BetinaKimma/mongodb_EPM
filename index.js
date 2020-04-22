const express = require('express');
const path = require('path');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const fileUpload = require('express-fileUpload');

//app.use(fileUpload());

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
app.use(bodeParser.json())
app.use(bodyPaser.urlencoded({extended:true}))

app.set('view engine');

app.use(express.static('public'));

app.listen(3000, () =>{
    console.log("App listening on port 3000...");
})

const validateMiddleWare = (req,res,next)=>{
    if(req.files == null || req.body.title == null || req.body.title == null){
        return res.redirect('/posts/new')
    }
    next()
}

app.use('/posts/store',validateMiddleWare)


app.get('/',async (req,res)=>{
    console.log("home starting...")
    const blogposts = await BlogPost.find({})
    res.render('index',{
        blogposts
    });
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.get('/post',(req,res)=>{
    res.render('post')
})

app.get('/post/:id',async (req,res)=>{
    const blogpost = await BlogPost.findById(req.params.id)
    console.log(blogpost)
    res.render('post',{
        blogpost
    });
})

app.get('/posts/new',(req,res)=>{
    res.render('create');
})

app.post('/posts/store', (req,res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname,'public/img',image.name),async (error)=>{
        await BlogPost.create({
            ...req.body,
            image: '/img/' + image.name
        })
        res.redirect('/')
    })
})


//const http = require('http');
//const fs = require('fs');
//const homePage = fs.readFileSync('index.html');
//const signInPage = fs.readFileSync('signIn.html');
//const userProfilePage = fs.readFileSync('userProfile.html');
//const notFoundPage = fs.readFileSync('notFound.html');


//const server = http.createServer((req, res) => {
//      res.end(homePage)
//    else if(req.url === '/signIn')
//        res.end(signInPage)
//    else {
//        res.writeHead(404)
//        res.end(notFoundPage)
//    }
//})

//server.listen(3000)

//const app = express();



//app.get('/', (req, res) =>{
//    res.json({
//        name: 'Greg Lim'
//    });
//})

//app.get('/', (req, res)=>{
//    res.sendFile(path.resolve(__dirname, 'index.html'));
//})

//app.get('/signIn', (req,res)=>{
//    res.sendFile(path.resolve(__dirname, '/signIn.html'));
//})

//app.get('/notFound',(req,res)=>{
//    res.sendFile(path.resolve(__dirname, '/notFound.html'));
//})