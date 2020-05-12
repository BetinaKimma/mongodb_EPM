const projectLeader = require('../models/projectLeader.js')
const path = require('path');

module.exports = (req, res) => {
let projectLeaderResult;
projectLeader.findOne({}, (error, result) => {
    projectLeaderResult = result;
    console.log(result.fullName);
    res.render('leaderProfile', {
        heading: result,
        fullName: result
    });
})};

//res.render skal huske at henvise til rette path