const profileInfo = require('../models/profileInfo.js')
const path = require('path');

module.exports = async (req,res) => {
    // let profile_info = [{'profileInfos':'test'}]
    const collection = db.collection('profileInfos');
    collection.find({}).toArray(function(err, profile_info) {
        assert.equal(err, null);
        res.render('profileInfos', {'profileInfos': profile_info})
    });
    res.redirect("/userProfile");
}

/*
module.exports = async (req,res) => {
    // mongoose operations are asynchronous, so you need to wait
    profileInfo.find({}).toArray(function(err, profileInfo) {
        // note that data is an array of objects, not a single object!
        res.render('profileInfos', {
        profileInfo: data
        });
    });
};
*/
/*
var info = profileInfo.find({}, function(err, data) {
    res.render('userProfile.ejs', {
        profileName: data,
        profileTitle: data,
        profileDepartment: data,
        profilePhone: data,
        profileEmail: data
    });
});

*/







/*
router.get('/', function(req, res){
    profileInfos.find({}, function(err, profileName){
        res.render('my_database', { profileName : profileName});
    });
});

/*
module.exports = (req,res)=>{
    const profileName.exec(function(err, data) {
        if(err) throw err;
        res.render('userProfile', {title: 'profileInfos', records:data });
    });

};



module.exports = async (req,res)=>{
    const profileName = await profileInfo.find({}).populate();
    res.render('userProfile',{profileName});
}

*/
