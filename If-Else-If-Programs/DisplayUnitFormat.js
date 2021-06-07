const prompt = require('prompt-sync')();
let unitNumber = prompt("Enter Number in range of 10,100,1000 : ");
if (unitNumber == 1)
    console.log("Unit");
else if (unitNumber == 10)
    console.log("Ten");
else if (unitNumber == 100)
    console.log("Hundred");
else if (unitNumber == 1000)
    console.log("One Thousand");