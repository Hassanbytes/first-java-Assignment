function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}


var num1 = 10;
var num2 = 20;
var maxNumber = findMaximum(num1, num2);
console.log("The maximum between", num1, "and", num2, "is", maxNumber);


function findMaximum(num1, num2, num3) {
    var maxNumber = num1;

    if (num2 > maxNumber) {
        maxNumber = num2;
    }

    if (num3 > maxNumber) {
        maxNumber = num3;
    }

    return maxNumber;
}


var num1 = 10;
var num2 = 20;
var num3 = 15;
var maxNumber = findMaximum(num1, num2, num3);
console.log("The maximum between", num1 + ",", num2 + ", and", num3, "is", maxNumber);

function checkNumberType(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}


var number = 5;
var result = checkNumberType(number);
console.log("The number", number, "is", result);


function isDivisibleBy5And11(num) {
    if (num % 5 === 0 && num % 11 === 0) {
        return true;
    } else {
        return false;
    }
}



var number = 55;
if (isDivisibleBy5And11(number)) {
    console.log(number + " is divisible by both 5 and 11.");
} else {
    console.log(number + " is not divisible by both 5 and 11.");
}

function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


var number = 7;
var result = checkEvenOrOdd(number);
console.log("The number", number, "is", result);



function isLeapYear(year) {
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


var year = 2024;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}



function checkVowelOrConsonant(alphabet) {
    
    alphabet = alphabet.toLowerCase();

    
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    
    if (vowels.includes(alphabet)) {
        return "Vowel";
    } else {
        return "Consonant";
    }
}


var inputAlphabet = 'A';
var result = checkVowelOrConsonant(inputAlphabet);
console.log("The alphabet", inputAlphabet, "is a", result);


function checkCase(character) {
    if (character >= 'A' && character <= 'Z') {
        return "Uppercase";
    } else if (character >= 'a' && character <= 'z') {
        return "Lowercase";
    } else {
        return "Not an alphabet";
    }
}


var char = 'A';
var result = checkCase(char);
console.log("The character", char, "is", result);

function getNumberOfDays(monthNumber) {
    
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
   
    if (monthNumber >= 1 && monthNumber <= 12) {
        return daysInMonth[monthNumber - 1];
    } else {
        return "Invalid month number";
    }
}


var monthNumber = 2; // February
var daysInMonth = getNumberOfDays(monthNumber);
if (typeof daysInMonth === 'number') {
    console.log("Number of days in month", monthNumber, "is", daysInMonth);
} else {
    console.log(daysInMonth);
}


function calculateGrade(physics, chemistry, biology, mathematics, computer) {

    var totalMarks = physics + chemistry + biology + mathematics + computer;
    

    var percentage = (totalMarks / 500) * 100;
    
    
    var grade;
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "S";
    } else if (percentage >= 60) {
        grade = "C";
    } else {
        grade = "D";
    }
    
    return { percentage: percentage, grade: grade };
}


var physicsMarks = 85;
var chemistryMarks = 90;
var biologyMarks = 80;
var mathematicsMarks = 75;
var computerMarks = 88;

var result = calculateGrade(physicsMarks, chemistryMarks, biologyMarks, mathematicsMarks, computerMarks);
console.log("Percentage:", result.percentage.toFixed(2) + "%");
console.log("Grade:", result.grade);


