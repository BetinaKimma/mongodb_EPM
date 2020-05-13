const profileInfo = require('../models/profileInfo');
const profileSkills = require('../models/profileSkills');
const profileText = require('../models/profileText');
const profileImage = require('../models/profileImage.js');
const path = require('path');

// BKS: Denne kode er en færdig implementeret kode, der opdaterer (ellers opretter) databasen med de oplysninger som
// brugeren indtaster/uploader i formerne på userProfile.ejs./profilsiden. POST/PUT.
// Koden finder en bruger ud fra det (req.session.)userId, der er blevet tildelt ved login,
// som sender cookie id'et som verifikation, når bruger laver en get fra serveren.
// På denne måde tjekker koden om den bruger der er logget ind i systemet, allerede har oplysninger der skal ændres.
// Har brugeren dette, vil den opdatere med den nye værdi brugeren indtaster i userProfile.ejs (PUT).
// Har brugeren ikke oplysninger i databasen i forvejen, vil den oprette disse (POST).

module.exports = (req, res) =>{
     profileInfo.findOneAndUpdate({'profileId': req.session.userId}, req.body,(error, result) => {
        console.log('opdaterer info'); /* terminalen logger at den fandt bruger og opdaterer info */
        if (result == null) /* Hvis resultatet bliver null (hvis den ikke finder userId) */
        {
            profileInfo.create(req.body, (error, profileText) => {
                console.log('Created info instead'); /* terminalen logger at den oprettede en ny bruger */
            });
        }
    });
    profileSkills.findOneAndUpdate({'profileId': req.session.userId}, req.body,(error, result) => {
        console.log('opdaterer skills');
        if (result == null)
        {
            profileSkills.create(req.body, (error, profileSkills) => {
                console.log('Created skills instead');
            });
        }
    });
    profileText.findOneAndUpdate({'profileId': req.session.userId}, req.body,(error, result) => {
        console.log('opdaterer text');
        if (result == null)
        {
            profileText.create(req.body, (error, profileText) => {
                console.log('Created text instead');
            });
        }
        res.redirect('userProfile') /* når koden er eksekveret returnerer/sender den brugeren til userProfile */
    });
};