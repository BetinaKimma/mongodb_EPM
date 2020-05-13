// SAR: In this script we want to create a security measure to make sure, that the user can see if their password meets
// the requirements set by the input-field. First, relevant variables are created.
var password = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var length = document.getElementById("length");

// SAR: Script to show a message box when password field is clicked
password.onfocus = function showPswCheck () {
    document.getElementById("message").style.display = "block";
};

// SAR: Script to hide the message box when the user clicks outside of the password field
password.onblur = function hidePswCheck () {
    document.getElementById("message").style.display = "none";
};

// SAR: Script that starts when the user starts to write in the password field
password.onkeyup = function pswCheck () {
    // SAR: Check to see if there are lowercase letters
    var lowerCaseLetters = /[a-z]/;
    if(password.value.match(lowerCaseLetters)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // SAR: Check to see if there are capital letters
    var upperCaseLetters = /[A-Z]/;
    if (password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // SAR: Check to see if there are numbers
    var numbers = /[0-9]/;
    if (password.value.match(numbers)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // SAR: Check to see if length is greater than 8
    if (password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
};



// SAR: OBS: The following code is currently unimplemented in the project.
/*
// SAR: Here we create the variables and assign them to their respective id values.
//var fullname = document.getElementById("fullname");
//var birthday= document.getElementById("birthday");
//var email = document.getElementById("email");
var psw = document.getElementById("password");
var userName = document.getElementById("username");
//var teleNmb= document.getElementById("teleNmb"); //LS: Once again, nice starting of defining variables outside the function.

// SAR: We now create a series of "if" statements, which will check to see if the user registers correctly.
// All of them will be contained in a function which is called upon from the submit form in registration.html
function UserCreationControl() {
    var messageAlert = "";
    var booleanCheck = true;

    // SAR: "if" statement to control if user has entered a name
    if (fullname.value===""){
       messageAlert += "Please enter your name ";
       booleanCheck = false;
       console.log(messageAlert, booleanCheck) //LS: Console is only needed if you have to test. For final version I wouldn't want this to display in console.
    }

    // SAR: "if" statement to control if user has entered a date of birth
    if (birthday.value===""){
        messageAlert += "Please enter your date of birth ";
        booleanCheck = false;
    }

    // SAR: "if" statement to control that the given date of birth is less than today's date
    var dateGiven = birthday;
    var dateToday = new Date();
    dateGiven = new Date(dateGiven);
    if (dateGiven > dateToday){
        messageAlert += "Please enter a correct date of birth ";
        booleanCheck = false;
    }

    // SAR: "if" statement to check if user has entered a contact email
    if (email.value===""){
        messageAlert += "Please enter you contact email ";
        booleanCheck = false;
    }

    // SAR: "if" statement to check if user has entered a password
    if (psw.value===""){
        messageAlert += "Please enter a correct password ";
        booleanCheck = false;
    }

    // SAR: "if" statement to check if user has entered
    if (userName===""){
        messageAlert += "Please enter a Username ";
        booleanCheck = false;
    }

    // SAR: "if" statement to check if user has entered a contact number
    if (teleNmb===""){
        messageAlert += "Please enter a contact number ";
        booleanCheck = false;
    } // LS: Nice function which is seperated nicely. Good job!

    // SAR: "if" statement to check if the booleanCheck is false. If it is false, then the input from the user does not
    // meet the criteria for one or more of the above "if" statements. It then alerts the user to which of the
    // statements are filled incorrectly. If the booleanCheck is true, then the user has filled out the form correctly
    // and a new user is created using the createUser function.         //LS: good description
    if (booleanCheck === false){
        alert(messageAlert);
    } else {
        createUser();
    }
};


// SAR: We create an if statement to check if there are any users stored in localStorage.
// If not, we create a new user array which is empty, if yes, we continue with the current array.
var allUsers;
if(localStorage.getItem("User") == null){
    allUsers = [];
    console.log(allUsers);
    console.log("Admin Only");
} else {
    allUsers = JSON.parse(localStorage.getItem("User"));
    console.log("Current users found in localStorage:");
    console.log(allUsers);
}

// SAR: We now create a function which creates a user array of the input-data.
function createUser () {
    allUsers.push(new User(fullname.value, email.value, teleNmb.value, birthday.value, userName.value, psw.value));
    localStorage.setItem("User", JSON.stringify(allUsers));
    console.log(localStorage.getItem("User"));

    /* SAR: This was the old code which worked for one user but was overwritten if multiple users were created.
    localStorage.setItem("fullname", fullname.value);
    localStorage.setItem("birthday", birthday.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("psw", psw.value);
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("teleNmb", teleNmb.value);*/

/*
    alert("New user created. You will now be redirected to the homepage for login");
    document.location.href = "../HTML/home.html";
    console.log(localStorage);
} */