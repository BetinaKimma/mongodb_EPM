const profileText = require('../models/profileText');
const path = require('path');

module.exports = (req, res) =>{
    profileText.create(req.body, (error, user) => {
        res.redirect('/')
    });
};