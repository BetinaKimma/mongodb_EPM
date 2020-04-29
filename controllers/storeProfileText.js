const profileText = require('../models/profileInfo');
const path = require('path');

module.exports = (req, res) =>{
    profileText.create(req.body, (error, profileInfo) => {
        res.redirect('/')
    });
};