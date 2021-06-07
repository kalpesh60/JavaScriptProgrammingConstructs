const prompt = require('prompt-sync')();
let givenNumber = Number(prompt("Enter number :"));
primeOrNot(givenNumber);
palindromeOrNot(givenNumber);

function primeOrNot(number) {
    let flag = 1;
    for (let i = 2; i <= (givenNumber / 2); i++)
        if (givenNumber % i == 0) {
            flag = 0;
            break;
        }
    if (flag == 0)
        console.log(givenNumber + " is not a prime number.");
    else
        console.log(givenNumber + " is a prime number.");
}

function palindromeOrNot(number) {
    let num = number;
    let reversed = 0;
    while (num != 0) {
        let remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num = Math.floor(num / 10);
    }
    if (number == reversed) {
        console.log(number + " is a palindrome number.");
        primeOrNot(reversed);
    } else
        console.log(number + " is not a palindrome number.");
}