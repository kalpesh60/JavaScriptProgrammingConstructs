const prompt = require('prompt-sync')();
let number = prompt("Enter the Number: ");
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}
console.log("Factorial is: " + factorial);