const User = require('../models/User');
const path = require('path');

// BKS: denne sletter en bruger.
// Kode fundet: 09/05-2020 Kilde: https://www.youtube.com/watch?v=3fF4t-s7KXY (og modificeret)
module.exports = function(req, res) {
    console.log(req.query.userName);
    User.findOneAndRemove({'username': req.query.userName},(error, result) => {
        console.log('Sletter bruger');
        res.redirect("/admin/");
    });
}

