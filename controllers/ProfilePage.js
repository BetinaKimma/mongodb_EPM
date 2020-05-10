const profileInfo = require('../models/profileInfo.js')
const profileText = require('../models/profileText.js')
const profileSkills = require('../models/profileSkills.js')
//const deleteInfo = require('../models/profileInfo')
const path = require('path');

module.exports = (req, res) => {
    let profileTextResult;
    profileText.findOne({'heading': "Velkommen"}, (error, result) => {
//      if (result({$isNull: ['profileText', 'Unspecified']})) {
//          res.render('userProfile');
//          console.log('no text yet');
//      } else {
        profileTextResult = result;
        console.log(result.heading);
        });

    let profileSkillsResult;
    profileSkills.findOne({'education': "HAit"}, (error, data) => {
        profileSkillsResult = data;
        console.log(data.profileSkills);
    });

    let profileInfoResult;
    profileInfo.findOne({'profileName': "Betina"}, (error, info) => {
        profileInfoResult = info;
        console.log(info.profileName);
    res.render('userProfile', {
        profileName: info,
        heading: result,
        education: data
    });

    })
}


     /*

module.exports = (req, res) => {

}
/*


/*
// BKS: forskellige forsøg på at få lavet if statement og get fra databasen

// if ({$isNull: ['profileText', 'Unspecified']}) {
//     res.render('userProfile');
//     console.log('no text yet');
// } else {

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

