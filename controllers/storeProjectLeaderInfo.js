const projectLeader = require('../models/projectLeader');
const path = require('path');

module.exports = (req, res) =>{
    projectLeader.create(req.body, (error, projectLeader) => {
        res.redirect('% plProfile')
    });
};

// res.redirect den rigtige path