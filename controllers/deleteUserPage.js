const User = require('../models/User.js');

module.exports = (req,res) => {
    let users;
    User.find({}, (error, result) => {
        console.log('users found')
        users = result;
        res.render('deleteUser',{users: result})
    });

};
