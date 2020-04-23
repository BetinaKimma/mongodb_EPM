/*
const app = new express()

const newPostController = require('./controllers/newPost')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const expressSession = require('express-session');
const logoutController = require('./controllers/logout')

app.get('/posts/new',authMiddleware, newPostController)
app.get('/post/:id',getPostController)
app.post('/posts/store', authMiddleware, storePostController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.post('/users/login',redirectIfAuthenticatedMiddleware, loginUserController)
app.get('/auth/logout', logoutController)
*/

/*

const validateMiddleWare = (req,res,next)=>{
    if(req.files == null || req.body.title == null || req.body.title == null){
        return res.redirect('/posts/new')
    }
    next()
}

app.get('/post/:id',async (req,res)=>{
    const blogpost = await BlogPost.findById(req.params.id)
    console.log(blogpost)
    res.render('post',{
        blogpost
    });
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

app.get('/',async (req,res)=>{
    console.log("home starting...")
    const blogposts = await BlogPost.find({})
    res.render('index',{
        blogposts
    });
})
*/

/*
app.get('/userProfile',(req,res)=>{
//    res.sendFile(path.resolve(__dirname, 'userProfile.ejs'));
    res.render('userProfile');
});

app.get('/register',(req,res)=>{
//    res.sendFile(path.resolve(__dirname, 'register.ejs'));
    res.render('register');
});

app.get('/notFound',(req,res)=>{
//    res.sendFile(path.resolve(__dirname, '/notFound.ejs'));
    res.render('notFound');
});
*/

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


/*const validateMiddleWare = (req,res,next)=>{
    if(req.files == null || req.body.title == null || req.body.title == null){
        return res.redirect('/posts/new')
    }
    next()
};*/