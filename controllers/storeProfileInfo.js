const profileInfo = require('../models/profileInfo');
const profileSkills = require('../models/profileSkills');
const profileText = require('../models/profileText');
const path = require('path');

module.exports = (req, res) =>{
    console.log(req.body.profileId);
    profileInfo.findOneAndUpdate({'profileId': req.session.userId}, req.body,(error, result) => {
        console.log('opdaterer info');
        if (result == null)
        {
            profileInfo.create(req.body, (error, profileText) => {
               console.log('Created user instead');
            });
        }
    });
    profileSkills.findOneAndUpdate({'profileId': req.session.userId}, req.body,(error, result) => {
        console.log('opdaterer skills');
        if (result == null)
        {
            profileSkills.create(req.body, (error, profileSkills) => {
                console.log('Created skills instead');
            });
        }
    });
    profileText.findOneAndUpdate({'profileId': req.session.userId}, req.body,(error, result) => {
        console.log('opdaterer text');
        if (result == null)
        {
            profileText.create(req.body, (error, profileText) => {
                console.log('Created text instead');
            });
        }
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
