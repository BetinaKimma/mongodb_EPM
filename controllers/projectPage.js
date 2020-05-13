const project = require('../models/Project.js');
const path = require('path');

module.exports = (req, res) => {
    let projectInfoResult;
    project.findOne({'profileId': req.session.userId}, (error, info) => {
        if (info == null)
        {
            projectInfoResult = new project();
            console.log('no');
        }
        else {
            projectInfoResult = info;
            console.log('yes');
        }
        console.log(projectInfoResult);
        res.render('projectPage', {
            projectInfo: projectInfoResult,
            userId: req.session.userId
        });
    });
};