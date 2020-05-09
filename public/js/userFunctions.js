// dette er en færdig implementeret funktion der gemmer profiltekst i local storage
// bliver ikke længere kaldt, da vi gemmer i database i stedet for
function saveText() {
    var userProfileText = document.getElementById("profileText").value;
    var profileText = {
        profileText: profileText
    };
    alert("Din profiltekst er gemt");
    localStorage["profileText"] = JSON.stringify(profileText);
}

// dette er en færdig implementeret funktion der gemmer skills i local storage,
// bliver ikke længere kaldt, da vi gemmer i database i stedet for
function saveSkills() {
    var profileSkills = document.getElementById("skills").value;
    var addedskills = {
        profileSkills : profileSkills
    };
    alert("Dine skills blev gemt");
    localStorage["skills"] = JSON.stringify(profileSkills);
}

// BKS: dette er funktionen for at åbne boksen på profilsiden, så man kan ændre sine info
// dette er funktionen for at rette sine brugeroplysninger
var infoBox = document.getElementById("infoBox");

// knappen der åbner boxen
var changeInfoBtn = document.getElementById("changeInfoBtn");

//  <span> element der lukker boksen
var closeSpans = document.getElementsByClassName("close");

for (var i = 0; i < closeSpans.length; i++) {
    closeSpans[i].addEventListener('click', closeSpan, false);
}

// Knappen der åbner boksen
changeInfoBtn.onclick = function() {
    infoBox.style.display = "block";
}

// når man trykker på <span> (x) lukker boksen
function closeSpan()
{
    infoBox.style.display = "none";
}

// BKS: dette er funktionen for at åbne boksen på profilsiden, så man kan ændre sit image
// dette er funktionen for at åbne boksenen for at rette/uploade profilbillede
var imageBox = document.getElementById("imageBox");

// knappen der åbner boxen
var changeImageBtn = document.getElementById("changeImageBtn");

//  <span> element der lukker boksen
var spanCloses = document.getElementsByClassName("spanClose");

for (var i = 0; i < spanCloses.length; i++) {
    spanCloses[i].addEventListener('click', spanClose, false);
}

// Knappen der åbner boksen
changeImageBtn.onclick = function() {
    imageBox.style.display = "block";
}
// når man trykker på <span> (x) lukker boksen
function spanClose()
{
    imageBox.style.display = "none";
}

/*
// BKS: dette er en  funktion der uploader profilbillede og viser i preview...bliver ikke kaldt på siden
let showProfileImage = document.getElementById("showProfileImage"),
    preview = document.getElementById("preview");

showProfileImage.addEventListener("change", function() {
    showProfileImage(this);
});

function changeImage(input) {
    var reader;

    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function(e) {
            preview.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
/*
/*
// BKS: dette er funktionen der gemmer profilbillede i localstorage
function saveImage() {
    var profileImage = document.getElementById("profileImage").value.innerHTML;
    return this.profileImage;
    var uploadedImage = {
        profileImage : profileImage
    };
    alert("Dit billede blev gemt");
    localStorage["profileImage"] = JSON.stringify(profileImage);
}
*/

// BKS: dette er funktionen for kontaktformen, den gemmer blot i localstorage, skal laves om så den sender en mail.
function contactForm() {
    var fname = document.getElementById("fname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var projectName = document.getElementById("projectName").value;
    var commentText = document.getElementById("commentText").value;
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

