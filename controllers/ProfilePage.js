const profileInfo = require('../models/profileInfo.js');
const profileText = require('../models/profileText.js');
const profileSkills = require('../models/profileSkills.js');
const profileImage = require('../models/profileImage.js')
const path = require('path');

// BKS:
module.exports = (req, res) => {
    let profileTextResult;
    profileText.findOne({'profileId': req.session.userId}, (error, result) => {
        if (result == null)
        {
            profileTextResult = new profileText();
            console.log('We found nothing');
        }
        else {
            profileTextResult = result;
            console.log('wanna be an auther?');
        }
    });
    let profileSkillsResult;
    profileSkills.findOne({'profileId': req.session.userId}, (error, data) => {
        if (data == null)
        {
            profileSkillsResult = new profileSkills();
            console.log('You have no skills');
        }
        else {
            profileSkillsResult = data;
            console.log('you have many skills');
        }
    });
    let profileImageResult;
    profileImage.findOne({'profileId': req.session.userId}, (error, result) => {
        if (result == null) {
            profileImageResult = new profileImage();
            console.log('You dont look good');
        } else {
            profileImageResult = result;
            console.log('are you a model?');
        }
    });
    let profileInfoResult;
    profileInfo.findOne({'profileId': req.session.userId}, (error, info) => {
        if (info == null)
        {
            profileInfoResult = new profileInfo();
            console.log('You dont exist');
        }
        else {
            profileInfoResult = info;
            console.log('nice name');
        }
        console.log(profileSkillsResult);
        res.render('userProfile', {
            profileName: profileInfoResult,
            education: profileSkillsResult,
            heading: profileTextResult,
            profileImage: profileImageResult,
            userId: req.session.userId
    });
  });
};
