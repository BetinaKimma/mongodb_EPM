const profileInfo = require('../models/profileInfo');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
var url = "mongodb://localhost/my_database"

module.exports = (req, res) => {
    //var test = new profileInfo(req.body.Title);
    //console.log(test)

    mongoose.connect(url, function(err, db) {
        if (err) throw err;
       // var dbo = db.db("my_database");
        //var dbo = mongoose.model('my_database', profileInfo)
       // var dbo =

       // dbo.collection("profileinfos")
         profileInfo.findOne({'profileId': 1}, function(err, result) {
            if (err) throw err;
            console.log(result.profileId + " " + result.profileName);
            console.log(result)
            res.render('userProfile', result)
            db.close();

         /*
         profileImage.findOne(...)
          */


        });
       //  console.log(result)
       // res.render('userProfile', )
       // res.direct('/')
        res.end
    });




    /*var q = profileInfo.findOne({ 'profileId': 1 });
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
            //test = proInfo;
            q.profileImage = '/img/profileimages/' + test.profileId + '.jpg';
            console.log(q.profileName);
           // res.render('userProfile', test);
        }
    });*/

};