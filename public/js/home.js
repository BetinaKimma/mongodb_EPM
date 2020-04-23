// BKS. Dette er funktionen der henter dato og tid,
// kode taget fra W3Schools: https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_string_iso1 og
// StackOverflow: https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
// fundet den 09/02-20. Det er en færdig implementeret funktion.
var currentdate = new Date();
var d = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
if (document.getElementById("dateOnFront") != null)
{
    document.getElementById("dateOnFront").innerHTML = d;
}