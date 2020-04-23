const express = require('express');
const path = require('path');

const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const fileUpload = require('express-fileUpload');



//app.use(fileUpload());

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');

app.use(express.static('public'));

app.listen(3000, () =>{
    console.log("App listening on port 3000...");
})

const validateMiddleWare = (req,res,next)=>{
    if(req.files == null || req.body.title == null || req.body.title == null){
        return res.redirect('/posts/new')
    }
    next()
};

app.use('/posts/store',validateMiddleWare)

app.get('/',(req,res)=>{
//    res.sendFile(path.resolve(__dirname, 'index.ejs'));
      res.render('index');
});

app.get('/userProfile',(req,res)=>{
//   res.sendFile(path.resolve(__dirname, 'userProfile.ejs'));
    res.render('userProfile');
});

app.get('/applyProject',(req,res)=>{
//    res.sendFile(path.resolve(__dirname, 'applyProject.ejs'));
    res.render('applyProject');
});

app.get('/register',(req,res)=>{
//    res.sendFile(path.resolve(__dirname, 'register.ejs'));
    res.render('register');
});

app.get('/notFound',(req,res)=>{
//    res.sendFile(path.resolve(__dirname, '/notFound.ejs'));
    res.render('notFound');
});


/*app.get('/',async (req,res)=>{
    console.log("home starting...")
    const blogposts = await BlogPost.find({})
    res.render('index',{
        blogposts
    });
})
*/

//app.get('/post/:id',async (req,res)=>{
 //   const blogpost = await BlogPost.findById(req.params.id)
  //  console.log(blogpost)
  //  res.render('post',{
  //      blogpost
  //  });
//})

//app.get('/posts/new',(req,res)=>{
//    res.render('create');
//})

//app.post('/posts/store', (req,res)=>{
//    let image = req.files.image;
//    image.mv(path.resolve(__dirname,'public/img',image.name),async (error)=>{
//        await BlogPost.create({
//            ...req.body,
//           image: '/img/' + image.name
//        })
//        res.redirect('/')
//    })
//})


//const http = require('http');
//const fs = require('fs');
//const homePage = fs.readFileSync('index.ejs');
//const signInPage = fs.readFileSync('signIn.ejs');
//const userProfilePage = fs.readFileSync('userProfile.ejs');
//const notFoundPage = fs.readFileSync('notFound.ejs');


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


