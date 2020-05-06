const profileImage = require('../models/profileImage.js')

module.exports = async (req,res)=>{
    const profileImage = await profileImage.findById(req.params.id).populate('userid');
    res.render('image',{
        profileImage
    });
}