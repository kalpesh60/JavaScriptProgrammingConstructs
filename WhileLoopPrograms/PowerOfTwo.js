const prompt = require('prompt-sync')();
let number = prompt("Enter the Number: ");
let count = 1;
let power = 1;
while (power <= 256 && count <= number) {
    console.log(power);
    power = power * 2;
    count++;
}