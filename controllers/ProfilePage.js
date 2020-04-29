const profileInfo = require('../models/profileInfo');

module.exports = (req, res) => {
    var test = {profileName:'Tester',};

    var q = profileInfo.findOne({ 'profileName': 'tester' });
    q.exec(function (err, proinfo) {
        res.render('userProfile', proinfo);
    });
    res.render('userProfile', test);
};