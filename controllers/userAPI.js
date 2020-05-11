const User = require('../models/User');

module.exports = (req, res) => {
    // SAR: We want to look up the users
    // If not existing, we return 404
    User.find({}, function (err, users) {
        if(err){
            res.send('Something went wrong. No users were found');
            next();
        }
        res.json(users);
    } );
};