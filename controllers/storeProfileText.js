const profileText = require('../models/profileInfo');

module.exports = (req, res) =>{
    profileText.create(req.body, (error, profileInfo) => {
        res.redirect('/')
    });
};


