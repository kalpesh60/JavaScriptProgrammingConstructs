let number1 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let number2 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let number3 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let number4 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let number5 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let max = number1;
let min = number1;
if (number2 > max)
    max = number2;
if (number3 > max)
    max = number3;
if (number4 > max)
    max = number4;
if (number5 > max)
    max = number5;
console.log("Max is " + max);
if (number2 < min)
    min = number2;
if (number3 < min)
    min = number3;
if (number4 < min)
    min = number4;
if (number5 < min)
    min = number5;
console.log("Min is " + min);