const User = require('../models/User.js');

// BKS: Denne kode er færdig implementeret og hører til deleteUser siden.
// Denne kode sender en reg til databasen om at hente de brugere der er oprettet/gemt, samt den henter siden.
module.exports = (req,res) => {
    let users; /* variablen users bliver deklareret*/
    User.find({}, (error, result) => { /* her instatieres get keldet der skal hente users */
        console.log('users found') /* terminalen logger at den har fundet users */
        users = result; /* variablen users bliver sat lig med result */
        res.render('deleteUser',{users: result}) /* res.render henter deleteUser siden, samt users resultatet*/
    });
};

// BKS: de data der bliver hentet er der refereret til i deleteUser.ejs,
// hvor dette kodestykke er, som får users til at vises i en liste med en forEach:
/*
<ul>
<% users.forEach(function(user){ %>
<li><a href="/admin/delete/?userName=<%= user.username %>"> Slet <%= user.username %></a></li>
    <%});%>
</ul>
*/