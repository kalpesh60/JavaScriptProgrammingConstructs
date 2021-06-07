const prompt = require('prompt-sync')();
let number1 = prompt("Enter Numbers 1 ");
let number2 = prompt("Enter Number 2 ");
let number3 = prompt("Enter Number 3 ");
let operation1 = (number1 + number2 * number3);
console.log("Op1= " + operation1);
let operation2 = (number3 + number1 / number2);
console.log("Op2= " + operation2);
let operation3 = (number1 % number2 + number3);
console.log("Op3= " + operation3);
let operation4 = (number1 * number2 + number3);
console.log("Op4= " + operation4);

let max = operation1;
if (operation2 < max)
    max = operation2;
if (operation3 < max)
    max = operation3;
if (operation4 < max)
    max = operation4;
console.log("Max is " + max)

let min = operation1;
if (operation2 > min)
    min = operation2;
if (operation3 > min)
    min = operation3;
if (operation4 > min)
    min = operation4;
console.log("Min is  " + min)