// SAR: Kilde: Beginning Node.js, Express & MongoDB by Greg Lim first edition 2019. Kap. 11 (modificeret og implementeret)

module.exports = (req, res) =>{
    req.session.destroy(() =>{
        res.redirect('/') // SAR: with the session.destroy function, we remove all data of the session user id.
    })
};