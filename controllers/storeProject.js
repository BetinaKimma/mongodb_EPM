const project = require('../models/Project');
const path = require('path');

module.exports = (req, res) =>{
    project.create(req.body, (error, project) => {
        res.redirect('/user/projectPage')
    });
};
