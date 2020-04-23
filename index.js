const express = require('express');
const path = require('path');

const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const fileUpload = require('express-fileUpload');


const homeController = require('./controllers/home')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const storeUserInfoController = require('./controllers/storeUserInfo')

const validateMiddleware = require("./middleware/validateMiddleware");
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const flash = require('connect-flash');

//app.use(fileUpload());

mongoose.connect('mongodb+srv://newuser1:superadmin@cluster0-vxjpr.mongodb.net/my_database', {useNewUrlParser: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(3000, () =>{
    console.log("App listening on port 3000...");
})

app.use('/posts/store',validateMiddleWare)

app.use(expressSession({
    secret: 'keyboard cat'
}))

global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});

app.use(flash());


app.get('/',homeController);
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController);
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController);
app.post('/userinfos/userProfile', redirectIfAuthenticatedMiddleware, storeUserInfoController);
app.use((req, res) => res.render('notfound'));

