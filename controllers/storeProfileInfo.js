const profileInfo = require('../models/profileInfo');
const path = require('path');

module.exports = (req, res) =>{
    profileInfo.create(req.body, (error, profileInfo) => {
        res.redirect('/')
    });
};