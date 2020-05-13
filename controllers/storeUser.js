// SAR: Kilde: Beginning Node.js, Express & MongoDB by Greg Lim first edition 2019. Kap. 9 (modificeret og implementert)

const User = require('../models/User');
const path = require('path');

module.exports = (req, res) =>{
    User.create(req.body, (error, user) => {
        res.redirect('/')
    });
};