const User = require('../models/User');
const path = require('path');

module.exports = (req, res) =>{
    User.findOneAndRemove({
        userId: req.params.id
    }, function(err, User) {

        if (err) throw err;

            console.log("Success");

        });

        res.redirect('/');

    };

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