const project = require('../models/Project.js');
const path = require('path');

module.exports = (req, res) => {
    let projectInfoResult;
    project.findOne({}, (error, info) => {
        if (info == null)
        {
            projectInfoResult = new project();
            console.log('no');
        }
        else {
            projectResult = info;
            console.log('yes');
        }
        console.log(projectInfoResult);
        res.render('projectPage', {
            projectInfo: projectInfoResult,
        });
    });
};