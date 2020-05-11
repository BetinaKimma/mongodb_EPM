const profileImage = require('../models/profileImage.js')
const path = require('path');
/*
module.exports = async (req,res)=>{
    const profileImage = await profileImage.findOne(req.session.userId).populate('userId');
    res.render('userProfile',{
        profileImage
    });
}

 */
module.exports = (req, res) => {
let profileImageResult;
profileImage.findOne({'profileId': req.session.userId}, (error, result) => {
    if (result == null)
    {
        profileImageResult = new profileImage();
        console.log('You dont look good');
    }
    else {
        profileImageResult = result;
        console.log('are you a model?');
    }
    res.render('userProfile', {
        profileImage: profileImageResult,
        userId: req.session.userId
});
});
}



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


// BKS: forskellige forsøg på at get profilbillede
/*   var profileImageResult;
   profileImage.findOne({}, (error, result) => {
       console.log(result.profileImage);
       profileImageResult = result;
   });
 */


/*
module.exports = async (req,res)=>{
    const profileimage = await profileImage.findById(req.params.id).populate('userid');
    res.render('userProfile',{profileimage});
}

 */