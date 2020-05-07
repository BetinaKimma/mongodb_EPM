const profileInfo = require('../models/profileInfo.js')
const profileText = require('../models/profileText.js')
const profileImage = require('../models/profileImage.js')
const path = require('path');

module.exports = (req, res) => {
    var profileTextResult;
    profileText.findOne({}, (error, result) => {
        console.log(result.profileText);
        profileTextResult = result;
    });

    profileInfo.findOne({'profileName': "Betina"}, (error, result) => {
         console.log(result.profileName);
         //console.log(result)
         res.render('userProfile', {
             profileName: result,
             profileText: profileTextResult
         });
    });
};

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