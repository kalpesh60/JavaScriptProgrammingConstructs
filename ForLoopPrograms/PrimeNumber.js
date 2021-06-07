const prompt = require('prompt-sync')();
let isPrime = true;
let number = prompt("Enter the number :");
for (let i = 2; i <= number - 1; i++) {
    if (number % i == 0)
        isPrime = false;
    break;
}
if (isPrime == true) {
    console.log("prime Number");
} else {
    console.log("Not prime No");
}