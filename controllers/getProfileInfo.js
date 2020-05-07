const profileInfo = require('../models/profileInfo.js')
const path = require('path');


/*
// dette er den underviseren/Isabella lavede
module.exports = (req, res) => {
    //var test = new profileInfo(req.body.Title);
    //console.log(test)

    mongoose.connect(url, function (err, db) {
        if (err) throw err;

        // db.collection("profileinfos")
        profileInfo.find({'profileId': 1}, function (err, result) {
            if (err) throw err;
            console.log(result.profileName);
            console.log(result)
            res.render('userProfile', result)
            db.close();
        });
        res.end
    });
}
*/

// dette er eksempel fra youtubevideo https://www.youtube.com/watch?v=0uaSi8v5CHQ
module.exports = (req,res) => {
    profileInfo.find({}).toArray(function(err, data) {
        assert.equal(err, null);
        res.render('userProfile', {'profiles': data})
    });
}



/*
// dette er Carls hjælp, den virkede...men ikke mere
var q = profileInfo.findOne({});
q.exec(function (err, result) {
    if (err)
    {
        console.log(err);
    }
    if (q === null)
    {
        res.render('userProfile', test);
    }
    else
    {
        test = proInfo;
       // q.profileImage = '/img/profileimages/' + test.profileId + '.jpg';
        console.log(q.profileName);
         res.render('userProfile', test);
    }
});

*/
 /*
// Dette er omskrevet fra bogen, se eksempel under.
const profileInfo = require('../models/profileInfo.js')
module.exports = async (req,res)=>{
    const info = await profileInfo.findById(req.params.id).populate('userid');
    res.render('userProfile',{
        info
    });
}
const BlogPost = require('../models/BlogPost.js')
module.exports = async (req,res)=>{
    const blogpost = await BlogPost.findById(req.params.id).populate('userid');
    res.render('post',{
        blogpost
    });
}
*/


//herunder er forskellige eksempler fundet på Stack overflow...virker ikke
/*
module.exports = async (req,res) => {
    // let profile_info = [{'profileInfos':'test'}]
    const collection = db.collection('profileInfos');
    collection.find({}).toArray(function(err, profile_info) {
        assert.equal(err, null);
        res.render('profileInfos', {'profileInfos': profile_info})
    });
    res.redirect("/userProfile");
}
*/
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
