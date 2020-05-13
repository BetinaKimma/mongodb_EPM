const projectLeaderInfo = require('../models/projectLeader');
const path = require('path');

module.exports = (req, res) => {
    projectLeaderInfo.findOneAndUpdate({'profileId': req.session.userId}, req.body, (error, result) => {
        console.log('opdaterer info'); /* terminalen logger at den fandt bruger og opdaterer info */
        if (result == null) /* Hvis resultatet bliver null (hvis den ikke finder userId) */
        {
            projectLeaderInfo.create(req.body, (error, profileText) => {
                console.log('Created info instead'); /* terminalen logger at den oprettede en ny bruger */
            });
        }
        res.redirect('leaderProfile')
    });
};