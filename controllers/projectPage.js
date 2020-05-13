const project = require('../models/Project.js');
const path = require('path');

// BKS: Kilde: Beginning Node.js, Express & MongoDB by Greg Lim first edition 2019 (modificeret)
module.exports = (req,res) => {
    let projects;
    project.find({}, (error, result) => {
        console.log('projects found');
        projects = result;
        res.render('projectPage', {
            projects: result,
            userId: req.session.userId
        })
    });
};