const profileImage = require('../models/profileImage');
const path = require('path');

// BKS upload af profilbillede
module.exports = (req, res) =>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "profileImage") is used to retrieve the uploaded file
    let imageFile = req.files.profileImage;

    // Use the mv() method to place the file somewhere on your server
    imageFile.mv('public/img/profileimages/' + req.body.profileId + '.jpg', function(err) {
        if (err)
        {
            console.log(err);
            return res.status(500).send(err);
        }
    });
    console.log(req.files.profileImage.name);
    res.redirect('/')
};





//    profileImage.mv(path.resolve(__dirname, 'public/img, profileImage.name'), async
 //   (error) =>{
  //      await profileImage.create({
  //          ...req.body,
  //          ProfileImage: '/img/' + profileImage.name
  //      })
  //      res.redirect('/')
  //  })
//})

