const prompt = require('prompt-sync')();
let num = prompt("Enter the number :");
console.log("Num is: " + num);
console.log("Prime Factors are:");
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        for (let j = 2; j <= i; j++) {
            if (j == i) {
                console.log(i);
            }
            if (i % j == 0)
                break;
        }
    }
}