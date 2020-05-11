const profileInfo = require('../models/profileInfo');
const profileSkills = require('../models/profileSkills');
const profileText = require('../models/profileText');
const profileImage = require('../models/profileImage.js')
const path = require('path');

// BKS: Denne kode er en færdig implementeret kode, der opdaterer (ellers opretter) oplysninger i databasen. POST/PUT.
// Koden finder en bruger ud fra det (req.session.)userId, der er blevet tildelt ved login,
// som sender cookie id'et som verifikation, når bruger laver en get fra serveren.
// På denne måde tjekker koden om den bruger der er logget ind i systemet, allerede har oplysninger der skal ændres.
// Har brugeren dette, vil den opdatere med den nye værdi brugeren indtaster i userProfile.ejs (PUT).
// Har brugeren ikke oplysninger i databasen i forvejen, vil den oprette disse (POST).

module.exports = (req, res) =>{
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
        })
    })
    console.log(req.body.profileId); /* terminalen logger brugerens userId */
    // her bliver funktionen for at finde og opdatere profilInfo instantieret, med .findOneAndUpdate leder koden efter brugeren med det indloggede userId i databasen,
    // dette gør den da den får parameteret {'profileId': req.session.userId} som filter.
    profileInfo.findOneAndUpdate({'profileId': req.session.userId}, req.body,(error, result) => {
        console.log('opdaterer info'); /* terminalen logger at den fandt bruger og opdaterer info */
        if (result == null) /* Hvis resultatet bliver null (hvis den ikke finder userId) */
        {
            // Hvis koden ikke finder brugerens userId i databasen, bliver der her instantieret et if statement, så koden i stedet for med .create, opretter brugeren/profileInfo.
            profileInfo.create(req.body, (error, profileText) => {
               console.log('Created user instead'); /* terminalen logger at den oprettede en ny bruger */
            });
        }
    });
    // profileSkills bliver instantieret på samme måde som info. Koden leder efter bruger, finder den ingen, opretter den ny bruger/profileSkills i databasen.
    profileSkills.findOneAndUpdate({'profileId': req.session.userId}, req.body,(error, result) => {
        console.log('opdaterer skills');
        if (result == null)
        {
            profileSkills.create(req.body, (error, profileSkills) => {
                console.log('Created skills instead');
            });
        }
    });
    // profileText bliver instantieret på samme måde som info. Koden leder efter bruger, finder den ingen, opretter den ny bruger/profileSkills i databasen.
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
