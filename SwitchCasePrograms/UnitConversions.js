const prompt = require('prompt-sync')();
let value = prompt("Enter the value :");
console.log("1.Feet to Inch  2.Inch to Feet  3.Feet to Meters  4.Meter to Feet");
let conversionType = prompt("Enter conversion Number: ");
let convertedValue = 0;
switch (conversionType) {
    case '1':
        convertedValue = value * 12;
        console.log("Feet to inch:" + convertedValue);
        break;
    case '2':
        convertedValue = value / 12;
        console.log("Inch to feet: " + convertedValue);
        break;
    case '3':
        convertedValue = value * 0.3048;
        console.log("Feet to meter: " + convertedValue);
        break;
    case '4':
        convertedValue = value / 0.3048;
        console.log("Meter to feet: " + convertedValue);
}