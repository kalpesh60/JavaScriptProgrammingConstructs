const prompt = require('prompt-sync')();
let number = prompt("Enter the value :");
console.log("n = " + number);
let harmonicNum = 0;
for (let n = 1; n <= number; i++) {
    harmonicNum = harmonicNum + 1 / n;
}
console.log("Harmonic No: " + harmonicNum);