const User = require('../models/User');

module.exports = (req, res) => {
    User.find({}, function (err, users) { // SAR: We want to look up the users
        if(err){
            res.send('Something went wrong. No users were found');
            next();
        }
        res.json(users); // SAR: We respond with a json file of the stored users
    } );
};