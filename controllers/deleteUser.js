const User = require('../models/User');
const path = require('path');

// BKS: mit forsøg på at slette en bruger...virker ikke
module.exports = (req, res) =>{
    let userId = req.params.id;
    User.findOneAndDelete({userId} (error, result) => {
        console.log('deleting user');
        if (error) {
            console.log('not deleted')
        } else {
            res.redirect('/');
            console.log('user removed')
            ;}
    });
};

// BKS: et forsøg på delete user
/*
User.findOneAndRemove({
        userId: 'req.params.id'
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.error(err)
    })

 */

    /*
// SAR:
    User.findOneAndRemove({
        userId: req.params.id
    }, function(err, User) {

        if (err) throw err;

            console.log("Success");

        });

        res.redirect('/');

    };

     */

// SAR: Code that has been tried:
/*  db.collection('items').remove({_id: mongodb.ObjectID( req.params.id)}, (err, result) => {
    if (err) return console.log(err)
    console.log(req.body)
    res.redirect('/')
  })
}) */

/*function(req, res){
    User.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/");
        } else {
            res.redirect("/");
        }
    });
}); */