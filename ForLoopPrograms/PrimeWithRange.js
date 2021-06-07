const prompt = require('prompt-sync')();
let startRange = prompt("Enter the start number of range :");
let endRange = prompt("Enter the end number of range :");
if (endRange > startRange) {
    for (let i = startRange; i <= endRange; i++) {
        for (let j = 2; j <= i; j++) {
            if (j == i) {
                console.log("Prime number: " + i);
            }
            if (i % j == 0)
                break;
        }
    }
}