const userImage = require('../models/userImage');
const path = require('path');

module.exports = (req, res) =>{
    userImage.create(req.body, (error, userImage) => {
        res.redirect('/')
    });
};