const projectLeader = require('../models/projectLeader.js')
const path = require('path');

module.exports = (req, res) => {
let projectLeaderResult;
projectLeader.findOne({'profileId': req.session.userId}, (error, info) => {
    if (info == null)
    {
        projectLeaderResult = new projectLeader();
        console.log('You dont exist');
    }
    else {
        projectLeaderResult = info;
        console.log('nice name');
    } {
        projectLeader.create(req.body, (error, projectLeader) => {
            console.log('create info instead');
        });
    }
    res.redirect('plProfile') /* når koden er eksekveret returnerer/sender den brugeren til plProfile */
});
};

