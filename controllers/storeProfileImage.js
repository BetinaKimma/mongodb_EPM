const profileImage = require('../models/profileImage.js')
const path = require('path')
// BKS: Kilde: Beginning Node.js, Express & MongoDB by Greg Lim first edition 2019 (modificeret med et if statement)
module.exports = (req,res)=> {
    console.log('Entering profileimageupload on post'); /* terminalen logger at vi har trykket på upload billede */
    let image = req.files.profileImage; /* her deklareres variablen med value req.files.profileImage */
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