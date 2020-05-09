const profileInfo = require('../models/profileInfo');
const path = require('path');

module.exports = (req, res) =>{
    profileInfo.create(req.body, (error, profileInfo) => {
        res.redirect('userProfile')
    });
};

/*
// BKS: forsøg på at lave en findOneAndUpdate ud fra profilnavn, så den ikke opretter et nyt document hver gang.
    module.exports = (req, res) =>{
        let profileName = req.body;
        profileInfo.findOneAndUpdate(req.body, (error, result) => {
            if (result({$isNull: 'profileName'})) {
                profileInfo.create(req.body, (error, result) => {
                res.redirect('userProfile')
            });
        }
    });
}

 */
