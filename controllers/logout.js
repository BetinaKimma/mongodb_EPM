module.exports = (req, res) =>{
    req.session.destroy(() =>{
        res.redirect('/') // SAR: with the session.destroy function, we remove all data of the session user id.
    })
};