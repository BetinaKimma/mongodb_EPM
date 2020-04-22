// dette er en færdig implementeret funktion der gemmer profiltekst i local storage
function saveText() {
    var userProfileText = document.getElementById("profileText").value;
    var userId = 1; //TODO
    var profileText =  {
        profileText : profileText
    };

    pool.query("INSERT INTO \"UserInfoProfileTexts\" (\"UserId\",\"ProfileText\") VALUES(" + userId +",'" + userProfileText + "')").then(result => {
        console.log(result.rows);
        pool.end()
    });

    alert("Din profiltekst er gemt");
    localStorage["profileText"] = JSON.stringify(userProfileText);
}


// dette er en færdig implementeret funktion der gemmer skills i local storage
function saveSkills() {
    var employeeSkills = document.getElementById("skills").value;
    var addedskills = {
        skills : skills
    };
    alert("Dine skills blev gemt");
    localStorage["skills"] = JSON.stringify(employeeSkills);
}


// dette er funktionen for at rette sine brugeroplysninger, ikke færdig implementeret, da den ikke gemmer oplysninger endnu
var infoBox = document.getElementById("infoBox");

// knappen der åbner boxen
var changeInfoBtn = document.getElementById("changeInfoBtn");

//  <span> element der lukker boksen
var span = document.getElementsByClassName("close")[0];

// Knappen der åbner boksen
changeInfoBtn.onclick = function() {
    infoBox.style.display = "block";
}

// når man trykker på <span> (x) lukker boksen
span.onclick = function() {
    infoBox.style.display = "none";
}

// når man trykker uden for boxen lukker den
window.onclick = function(event) {
    if (event.target == infoBox) {
        infoBox.style.display = "none";
    }
}


// dette er funktionen for at rette uploade profilbillede, ikke færdig implementeret, da den ikke uploader og gemmer endnu
var imageBox = document.getElementById("imageBox");

// knappen der åbner boxen
var changeImageBtn = document.getElementById("changeImageBtn");

//  <span> element der lukker boksen
var span = document.getElementsByClassName("close")[0];

// Knappen der åbner boksen
changeImageBtn.onclick = function() {
    imageBox.style.display = "block";
}

// når man trykker på <span> (x) lukker boksen
span.onclick = function() {
    imageBox.style.display = "none";
}

// når man trykker uden for boxen lukker den
window.onclick = function(event) {
    if (event.target == imageBox) {
        imageBox.style.display = "none";
    }
}

// dette er en  funktion der gemmer i local storage, men den skal kunne ændre billedet og gemme billedet i database
function saveImage() {
    var profilePicture = document.getElementById("image").value.innerHTML;
    return this.image;
    var uploadedImage = {
        image : image
    };
    alert("Dit billede blev gemt");
    localStorage["image"] = JSON.stringify(profilePicture);
}

// Kan ikke få denne til at gemme!!!
function contactForm() {
    var fname = document.getElementById("fname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var projectName = document.getElementById("projectName").value;
    var commentText = document.getElementById(commentText).value;
    var contactForm =  {
        fname : fname,
        phone : phone,
        email : email,
        projectName : projectName,
        commentText : commentText
    };
    alert("Ansøgning modtaget");
    localStorage["contactForm"] = JSON.stringify(contactForm);
}

