const projectLeader = require('../models/projectLeader.js')
const path = require('path');

module.exports = (req, res) => {
    let projectLeaderResult;
    projectLeader.findOne({}, (error, result) => {

        projectLeaderResult = result;
        console.log(result.fullName);
        res.render('plProfile', {
            heading: result,
            fullName: result
        });
    });
}

