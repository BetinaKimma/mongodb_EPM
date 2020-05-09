const profileImage = require('../models/profileImage.js')
const path = require('path');

module.exports = async (req,res)=>{
    const profileImage = await profileImage.findById(req.params.id).populate('userid');
    res.render('userProfile',{
        profileImage
    });
}

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