const profileImage = require('../models/profileImage.js')
const path = require('path');

module.exports = async (req,res)=>{
    const profileImage = await profileImage.findById(req.params.id).populate('userid');
    res.render('userProfile',{
        profileImage
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