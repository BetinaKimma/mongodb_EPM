const profileInfo = require('../models/profileInfo.js')
const profileText = require('../models/profileText.js')
const profileSkills = require('../models/profileSkills.js')
//const profileImage = require('../models/profileImage.js')
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
    profileSkills.findOne({'education': "HAit"}, (error, result) => {
        profileSkillsResult = result;
        console.log(result.education);
    });
    let profileInfoResult;
    profileInfo.findOne({'profileName': "Betina"}, (error, result) => {
        profileInfoResult = result;
        console.log(result.profileName);
    res.render('userProfile', {
        heading: result,
        profileName: result,
        education: result
    });
    });
};




/*   var profileImageResult;
   profileImage.findOne({}, (error, result) => {
       console.log(result.profileImage);
       profileImageResult = result;
   });
 */

// if ({$isNull: ['profileText', 'Unspecified']}) {
//     res.render('userProfile');
//     console.log('no text yet');
// } else {



/*
module.exports = async (req,res)=>{
    const profileImage = await profileImage.findById(req.params.id).populate('userid');
    res.render('image', {profileImage});
}

 */



   /*
    profileInfo.findOne({'profileName': "Betina"}, function (err, result) {
        if (err) throw err;
        var info = db.collection('profileinfos').find();
         {

        },


        });
        console.log('Executed with success');
        console.log(result.profileName);
       // console.log(result)

    });
    console.log('No user found');
    res.render('userProfile') // Renders our userProfile.ejs page
};
/*

/*
module.exports = async (req,res)=>{
    const profileimage = await profileImage.findById(req.params.id).populate('userid');
    res.render('userProfile',{profileimage});
}

 */