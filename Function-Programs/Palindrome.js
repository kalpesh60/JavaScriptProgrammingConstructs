function palindromeCheck(number1, number2) {
    let palindromeNum1 = 0;
    while (number1 > 0) {
        let rem = number1 % 10;
        palindromeNum1 = palindromeNum1 * 10 + rem;
        number1 = Math.floor(number1 / 10);
    }
    if (palindromeNum1 == number2)
        return "Numbers are palidrome: ";
    else
        return "Numbers are not palindrome: ";
}

let isPalindrome = palindromeCheck(143, 341);
console.log("Numbers: 143, 341");
console.log(isPalindrome);