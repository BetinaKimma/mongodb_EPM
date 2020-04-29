const profileImage = require('../models/profileInfo');
const path = require('path');



module.exports = (req, res) =>{
    profileImage.create(req.body, (error, profileInfo) => {
        res.redirect('/')
    });
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

