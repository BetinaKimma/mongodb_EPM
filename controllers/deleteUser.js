const User = require('../models/User');
const path = require('path');

// BKS: kilden for denne kode: https://ejs.co/ fundet 10/05-20
// samt https://www.youtube.com/watch?v=3fF4t-s7KXY 09/05-2020 (og modificeret)
module.exports = function(req, res) {
    console.log(req.query.userName);
    User.findOneAndRemove({'username': req.query.userName},(error, result) => {
        console.log('Sletter bruger');
        res.redirect("/admin/");
    });
};
