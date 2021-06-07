const prompt = require('prompt-sync')();
let dayOfMonth = prompt("Enter day of month: ");
let month = prompt("Enter month : ");
if ((month == 3 && dayOfMonth >= 20 && dayOfMonth <= 31) || (month == 6 && dayOfMonth <= 20 && dayOfMonth > 0)) {
    console.log("true");
} else if (month == 4 && dayOfMonth > 0 && dayOfMonth <= 31) {
    console.log("true");
} else if (month == 5 && dayOfMonth > 0 && dayOfMonth <= 31) {
    console.log("true");
} else {
    console.log("False")
}