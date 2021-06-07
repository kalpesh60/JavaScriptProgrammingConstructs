const prompt = require('prompt-sync')();
let number = prompt("Enter the value: ");
let powerOfTwo = 1;
for (let i = 0; i < number; i++) {
    powerOfTwo = powerOfTwo * 2;
    console.log(powerOfTwo);
}