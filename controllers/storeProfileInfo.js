const profileInfo = require('../models/profileInfo');

module.exports = (req, res) =>{
    profileInfo.create(req.body, (error, profileInfo) => {
        res.redirect('/')
    });
};