const profileInfo = require('../models/profileInfo.js')
const path = require('path');

/*
module.exports = (req,res)=>{
    const profileName.exec(function(err, data) {
        if(err) throw err;
        res.render('userProfile', {title: 'profileInfos', records:data });
    });

};
*/


module.exports = async (req,res)=>{
    const profileName = await profileInfo.find({}).populate();
    res.render('userProfile',{profileName});
}

