const express = require('express');
const path = require('path');

const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const expressSession = require('express-session');

app.use(fileUpload());

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(expressSession({
    secret: 'leeroy jenkins'
}));

app.listen(4000, ()=>{
    console.log('App listening on port 4000 ...')
});

global.loggedIn = null;

app.use("*", (req, res, next) =>{ //SAR: Global declaration of variable loggedIn, which will be accessed by our navigation bar to change layout.
    loggedIn = req.session.userId;
    next()
});








const validateMiddleWare = require("./middleware/validationMiddleware");
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');

app.use('/posts/store',validateMiddleWare);


const homeController = require('./controllers/home');

const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');
const ProfilePageController = require('./controllers/ProfilePage');
const storeProfileImageController = require('./controllers/storeProfileImage');
const storeProfileInfoController = require('./controllers/storeProfileInfo');

const applyProjectController = require('./controllers/applyProject');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');

//const storeProfileSkillsController = require('./controllers/storeProfileSkills');
//const storeProfileTextController = require('./controllers/storeProfileText');


app.get('/', homeController);
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController);
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController);
app.get('/user/userProfile', ProfilePageController);

app.post('/user/userProfileInfo', authMiddleware, storeProfileInfoController);

app.get('/post/:id',getImageController)
app.post('/user/storeImage', authMiddleware, storeProfileImageController);

app.get('/user/applyProjectPage', authMiddleware, applyProjectController);
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController);
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);
app.get('/auth/logout', logoutController);
//app.post('/users/userProfileImage', storeProfileImageController);
//app.post('/user/profileInfo', storeProfileImageController);
//app.post('/user/profileInfo', storeProfileTextController);
//app.post('/user/userProfile', storeProfileSkillsController);
//app.post('/user/userProfile', storeProfileInfoController);
//app.post('/user/profileInfo', userProfileTextController);
app.use((req, res) => res.render('notFound'));



/* app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.get('/post',(req,res)=>{
    res.render('post')
}) */


//const newPostController = require('./controllers/newPost');
//const storePostController = require('./controllers/storePost');
//const getPostController = require('./controllers/getPost');
//const loginController = require('./controllers/login');
//const loginUserController = require('./controllers/loginUser');
//const logoutController = require('./controllers/logout');
// app.get('/post/:id', getPostController);
// app.post('/posts/store', storePostController);
// app.get('/posts/new', newPostController);
//app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
//app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);
//app.get('/auth/logout', logoutController);