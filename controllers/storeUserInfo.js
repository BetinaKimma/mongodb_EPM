const userInfo = require('../models/userInfo');
const path = require('path');

module.exports = (req, res) =>{
    userInfo.create(req.body, (error, userInfo) => {
        res.redirect('/')
    });
};