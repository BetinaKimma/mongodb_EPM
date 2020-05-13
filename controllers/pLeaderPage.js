const projectLeaderInfo = require('../models/projectLeader.js');
const path = require('path');

module.exports = (req, res) => {
let projectLeaderResult;
projectLeaderInfo.findOne({'profileId': req.session.userId}, (error, info) => {
    if (info == null)
    {
        projectLeaderResult = new projectLeaderInfo();
        console.log('You dont exist');
    }
    else {
        projectLeaderResult = info;
        console.log('nice name');
    }
    console.log(projectLeaderResult);
    res.render('leaderProfile', {
        projectLeader: projectLeaderResult,
        userId: req.session.userId,
    }) /* når koden er eksekveret returnerer/sender den brugeren til plProfile */
});
};

