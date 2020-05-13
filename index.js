/* BKS: når der skal laves gitlog, skriv: git log > loggen.txt ("loggen" er hvad filen kommer til at hedde) */
/* BKS: Link til github repository: https://github.com/BetinaKimma/mongodb_EPM */

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

/* BKS: Profile page (info/text/skills og image) */
const ProfilePageController = require('./controllers/ProfilePage');
const storeProfileInfoController = require('./controllers/storeProfileInfo');
const storeProfileImageController = require('./controllers/storeProfileImage');


/* BKS: apply projectPage controller, denne side taler ikke med databasen endnu */
const applyProjectController = require('./controllers/applyProject');

const projectPageController = require('./controllers/projectPage');
const storeProjectController = require('./controllers/storeProject');

/* SAR: Delete user controller */
const deleteUserPageController = require('./controllers/deleteUserPage');
const deleteUserController = require('./controllers/deleteUser');

/* SAR: User logout controller */
const logoutController = require('./controllers/logout');

/* SB ProjectLeader controller */
const pLeaderPageController = require('./controllers/pLeaderPage');
const storeProjectLeaderController = require('./controllers/storeProjectLeaderInfo');

/* SAR: API controllers for development & checking */
const userAPIController = require('./controllers/userAPI');
const findUserAPIController = require('./controllers/findUserAPI');


/* SAR: Home Page */
app.get('/', homeController);

/* SAR: User registration */
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController);
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController);

/* SAR: User login */
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);

/* BKS: Profile page (info/text/skills og image) */
app.get('/user/userProfile', authMiddleware, ProfilePageController);
app.post('/user/userProfile', authMiddleware, storeProfileInfoController);
app.post('/user/userProfileImage', authMiddleware, storeProfileImageController);


/* BKS: apply for project page, denne side taler ikke med databasen endnu */
app.get('/user/applyProjectPage', authMiddleware, applyProjectController);

app.get('/user/projectPage', projectPageController);
app.post('/user/projectPage', storeProjectController);

/* SAR: Delete user */
app.get('/admin', authMiddleware, deleteUserPageController);
app.get('/admin/delete', authMiddleware, deleteUserController);

/* SAR: User logout */
app.get('/auth/logout', logoutController);

/* SB: Project Leader page */
app.get('/leader/leaderProfile', pLeaderPageController);
app.post('/leader/leaderProfile', storeProjectLeaderController);

/* SAR: APIs for server development & checking */
app.get('/api/user', userAPIController); // Checks to see if server has stored users correctly
app.get('/api/user/:id', findUserAPIController); // Checks to see if server can find a specific user
app.get('');

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