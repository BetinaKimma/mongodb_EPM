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