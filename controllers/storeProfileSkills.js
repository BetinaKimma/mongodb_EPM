const profileSkills = require('../models/profileInfo');
const path = require('path');

module.exports = (req, res) =>{
    profileSkills.create(req.body, (error, profileInfo) => {
        res.redirect('/')
    });
};