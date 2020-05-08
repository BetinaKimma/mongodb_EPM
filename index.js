const express = require('express');
const path = require('path');
const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');

app.set('view engine','ejs');

app.use(fileUpload());

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.use(expressSession({
    secret: 'leeroy jenkins'
}));

app.listen(4000, ()=>{
    console.log('App listening on port 4000 ...')
});


/* SAR: Global declaration of variable loggedIn, which will be accessed by our navigation bar to change layout.*/
global.userLoggedIn = null;

app.use("*", (req, res, next) =>{
    userLoggedIn = req.session.userId;
    next()
});

/* SAR: Middleware controllers */
const validateMiddleWare = require("./middleware/validationMiddleware");
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');
app.use('/posts/store',validateMiddleWare);

/* SAR: Home page controller */
const homeController = require('./controllers/home');

/* SAR: User registration controllers */
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');

/* SAR: User login controllers */
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');

/* BKS: Profile page (info, text, skills og image) */
const ProfilePageController = require('./controllers/ProfilePage');
const storeProfileInfoController = require('./controllers/storeProfileInfo');
const storeProfileImageController = require('./controllers/storeProfileImage');
const storeProfileTextController = require('./controllers/storeProfileText');
const storeProfileSkillsController = require('./controllers/storeProfileSkills');

const projectPageController = require('./controllers/projectPage');
const applyProjectController = require('./controllers/applyProject');

/* SAR: Delete user controller */
const deleteUserPageController = require('./controllers/deleteUserPage');
const deleteUserController = require('./controllers/deleteUser');

/* SAR: User logout controller */
const logoutController = require('./controllers/logout');

/* SB ProjectLeader controller */
const storeProjectLeaderController = require('./controllers/storeProjectLeaderInfo');


/* SAR: Home Page */
app.get('/', homeController);

/* SAR: User registration */
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController);
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController);

/* SAR: User login */
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);

/* BKS: Profile page (info, text, skills og image) */
app.get('/user/userProfile', ProfilePageController);
app.post('/user/userProfile', storeProfileInfoController);
app.post('/user/userProfileImage', storeProfileImageController);
app.post('/user/storeProfileText', authMiddleware, storeProfileTextController);
app.post('/user/userProfileSkills', storeProfileSkillsController);

app.get('/user/applyProjectPage', authMiddleware, applyProjectController);
app.get('/user/projectPage', projectPageController);

/* SAR: Delete user */
app.get('/admin', deleteUserPageController);
app.delete('/admin/delete', deleteUserController);

/* SAR: User logout */
app.get('/auth/logout', logoutController);

/* SB: Project Leader page */
app.post('/leader/leaderProfile', storeProjectLeaderController);

/* SAR: If no link matches, respond with 404 not found */
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