const profileImage = require('../models/profileImage.js')
const path = require('path');

module.exports = async (req,res)=>{
    const profileImage = await profileImage.findById(req.params.id).populate('userid');
    res.render('image',{
        profileImage
    });
}
