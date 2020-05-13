// SAR: Kilde: Beginning Node.js, Express & MongoDB by Greg Lim first edition 2019. Kap. 10 & 11 (modificeret og implementeret)

module.exports = (req, res, next) =>{
    if(req.session.userId){
        return res.redirect('/') // SAR: If the user is logged in, redirect them to home page
    }
    next()
};