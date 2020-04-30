const profileInfo = require('../models/profileInfo');

module.exports = (req, res) => {
    var test = new profileInfo();

    var q = profileInfo.findOne({ 'profileId': 1 });
    q.exec(function (err, proInfo) {
        if (err)
        {
            console.log(err);
        }
        if (proInfo === null)
        {
            res.render('userProfile', test);
        }
        else
        {
            test = proInfo;
            test.profileImage = '/img/profileimages/' + test.profileId + '.jpg';
            console.log(test.profileName);
            res.render('userProfile', test);
        }
    });

};