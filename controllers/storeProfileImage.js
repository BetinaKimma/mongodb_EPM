const profileImage = require('../models/profileImage.js')
const path = require('path')

module.exports = (req,res)=> {
    console.log('Entering profileimageupload on post');
    let image = req.files.profileImage;
    console.log(req.files.profileImage);
    image.mv(path.resolve(__dirname, '..', 'public/img/profileimages', image.name), async (error) => {
        await profileImage.findOneAndUpdate({'profileId': req.session.userId}, {
            ...req.body,
            profileImage: '/img/profileimages/' + image.name
        }, (error, result) => {
            if (result == null) {
                req.body.profileImage = '/img/profileimages/' + image.name;
                profileImage.create(req.body, (error, profileImage) => {
                    console.log('new image');
                });
            }
            console.log("req.body", req.body)
            res.redirect('/user/userProfile')
        })
    })
}