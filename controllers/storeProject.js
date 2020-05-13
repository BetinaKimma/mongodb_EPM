const project = require('../models/Project');
const path = require('path');

module.exports = (req, res) =>{
    project.findOne({'profileId': req.session.userId}, req.body,(error, result) => {
        console.log('opdaterer');
        if (result == null)
        {
            project.create(req.body, (error, project) => {
                console.log('Created');
            });
        }
        res.redirect('projectPage')
    });
};