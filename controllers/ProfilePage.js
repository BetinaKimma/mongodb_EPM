const profileInfo = require('../models/profileInfo.js')
const profileText = require('../models/profileText.js')
const profileSkills = require('../models/profileSkills.js')
//const profileImage = require('../models/profileImage.js')
//const deleteInfo = require('../models/profileInfo')
const path = require('path');

module.exports = (req, res) => {
    let profileTextResult;
    profileText.findOne({'heading': "Velkommen3"}, (error, result) => {
        if (result == null)
        {
            profileTextResult = new profileText();
            console.log('We found nothing');
        }
        else {
            profileTextResult = result;
            console.log(result.heading);
        }
        });
/*    let profileImageResult;
    profileImage.findById(req.params.userId).populate('userId'), (error, image) => {
    if (image == null)
    {
        profileImageResult = new profileImage();
        console.log('You Dont look good');
    }
    else {
        profileImageResult = image;
        console.log('userId'.profileImage);
    }
    });

 */
    let profileSkillsResult;
    profileSkills.findOne({'education': "HAit6"}, (error, data) => {
        if (data == null)
        {
            profileSkillsResult = new profileSkills();
            console.log('You have no skills');
        }
        else {
            profileSkillsResult = data;
            console.log(data.profileSkills);
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
            console.log(info.profileName);
        }
        console.log(profileSkillsResult);
        res.render('userProfile', {
            profileName: profileInfoResult,
            education: profileSkillsResult,
            heading: profileTextResult,
            userId: req.session.userId
        });
    });
}



/*
// BKS: forskellige forsøg på at få lavet if statement og get fra databasen

// if ({$isNull: ['profileText', 'Unspecified']}) {
//     res.render('userProfile');
//     console.log('no text yet');
// } else {

//      if (result({$isNull: ['profileText', 'Unspecified']})) {
//          res.render('userProfile');
//          console.log('no text yet');
//      } else {
            //        return({});
      */

/*
profileInfo.findOne({'profileName': "Betina"}, function (err, result) {
        if (err) throw err;
        var info = db.collection('profileinfos').find();
         { },});
        console.log('Executed with success');
        console.log(result.profileName);
       // console.log(result)
    });
    console.log('No user found');
res.render('userProfile') // Renders our userProfile.ejs page
};

 */

