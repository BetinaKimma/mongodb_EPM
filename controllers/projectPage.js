const project = require('../models/Project.js');
const path = require('path');

/*
module.exports = (req, res) => {
let projectInfoResult;
project.findOne({}, (error, info) => {
    if (info == null)
    {
        projectInfoResult = new project();
        console.log('You dont exist');
    }
    else {
        projectInfoResult = info;
        console.log('nice name');
    }
    console.log(projectInfoResult);
    res.render('userProfile', {
        projectName: projectInfoResult,
        projectId: req.params.projectId
    });
});
}

 */