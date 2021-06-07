const prompt = require('prompt-sync')();
let number = prompt("Enter a number in range of 1, 10, 100, 1000 :");
switch (number) {
    case '1':
        console.log("Unit");
        break;
    case '10':
        console.log("Ten");
        break;
    case '100':
        console.log("Hundred");
        break;
    case '1000':
        console.log("One Thousand");
        break;
    default:
        console.log("Invalid number");
}