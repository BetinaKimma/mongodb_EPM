const User = require('../models/User.js');

// BKS: Kilde: Beginning Node.js, Express & MongoDB by Greg Lim first edition 2019 (modificeret)
module.exports = (req,res) => {
    let users;
    User.find({}, (error, result) => {
        console.log('users found');
        users = result;
        res.render('deleteUser',{users: result})
    });
};

// BKS: Denne kode er færdig implementeret og hører til deleteUser siden.
// Denne kode sender en req til databasen om at hente de brugere der er oprettet/gemt, samt den henter siden.


// BKS: de data der bliver hentet er der refereret til i deleteUser.ejs,
// hvor dette kodestykke er, som får users til at vises i en liste med en forEach:
/*
<ul>
<% users.forEach(function(user){ %>
<li><a href="/admin/delete/?userName=<%= user.username %>"> Slet <%= user.username %></a></li>
    <%});%>
</ul>
*/