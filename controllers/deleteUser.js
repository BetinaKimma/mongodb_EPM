const User = require('../models/User');
const path = require('path');

// BKS: denne sletter en bruger.
// Kode fundet: 09/05-2020 Kilde: https://www.youtube.com/watch?v=3fF4t-s7KXY (og modificeret)
module.exports = function(req, res) {
    console.log(req.query.userName);
    User.findOneAndRemove({'username': req.query.userName},(error, result) => {
        console.log('Sletter bruger');
        res.redirect("/admin/");
    });
}


// BKS: et forsøg på delete user
/*
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

 */

// BKS: et forsøg på delete user
/*
    let userId = req.params.id;
    User.findOneAndDelete({userId}, function (error, result) {
        console.log('deleting user');
        if (error) {
            console.log('not deleted')
        } else {
            res.redirect('/');
            console.log('user removed')
            ;}
    });
};

     */

// BKS: et forsøg på delete user
/*
    let userId = req.params.id;
    User.findOneAndRemove({userId}).then(function (response) {
                    console.log(response)
        })
        .catch(err => {
            console.error(err)
        })
}

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