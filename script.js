// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
var date = new Date();
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();

// 4. Add leading zeros to month/day if needed
//* IF ELSE Statement for seciton 4
if (month < 10) {
    month = "0" + month;
} 

if (day < 10) {
    day = "0" + day;
    console.log("Day is less than 10, adding leading zero");
} else {
    day = day;
    console.log("No leading zero needed");
}

// 5. Create a string in the format: "Today is MM/DD/YYYY"
var currentDate = "Today is " + month + "/" + day + "/" + year;
// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = currentDate;


// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
const valOne = "76";
const valTwo = "101";
//    - at least 1 decimal string (example: "19.75")
const valThree = "1.75";
//    - at least 1 non-numeric string (example: "hello")
const valFour = "goodbye";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
var convertedOne = Number(valOne);
var convertedTwo = Number(valTwo);
var convertedThree = Number(valThree);
var convertedFour = Number(valFour);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

var firstResult =
    "Original: '" + valOne +
    "' -> Converted: " + convertedOne +
    //    b. Check if it is NaN using Number.isNaN()
    " -> isNaN: " + Number.isNaN(convertedOne) +
    //c. Check if it is an integer using Number.isInteger()
    " -> isInteger: " + Number.isInteger(convertedOne);

var secondResult =
    "Original: '" + valTwo +
    "' -> Converted: " + convertedTwo +
    //    b. Check if it is NaN using Number.isNaN()
    " -> isNaN: " + Number.isNaN(convertedTwo) +
    //c. Check if it is an integer using Number.isInteger()
    " -> isInteger: " + Number.isInteger(convertedTwo);

var thirdResult =
    "Original: '" + valThree +
    "' -> Converted: " + convertedThree +
    //    b. Check if it is NaN using Number.isNaN()
    " -> isNaN: " + Number.isNaN(convertedThree) +
    //c. Check if it is an integer using Number.isInteger()
    " -> isInteger: " + Number.isInteger(convertedThree);

var fourthResult =
    "Original: '" + valFour +
    "' -> Converted: " + convertedFour +
    //    b. Check if it is NaN using Number.isNaN()
    " -> isNaN: " + Number.isNaN(convertedFour) +
    //c. Check if it is an integer using Number.isInteger()
    " -> isInteger: " + Number.isInteger(convertedFour);
// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

//Var is going to combine all resiults into one string to display in the HTML
var numberConversionOutput = firstResult + "<br>" + secondResult + "<br>" + thirdResult + "<br>" + fourthResult;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = numberConversionOutput;
// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables

// Grade scores
var grade1 = 85;
var grade2 = 92;
var grade3 = 78;


// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//// Calculate total and average
var totalScore = grade1 + grade2 + grade3;
var averageScore = totalScore / 3;

//* IF ELSE Statement for Section 4
var resultMessage;

if (averageScore > 75) {
    resultMessage = "You passed";
} else {
    resultMessage = "You failed";
}
// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
// Display the average with two decimal places
// 4. Build a string showing your results
var mathOutput = 
"Each grade: " + grade1 + ", " + grade2 + ", " + grade3 + "<br>" +
"Average score: " + averageScore.toFixed(2) + "<br>" +
"Result: " + resultMessage;



// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathOutput;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)
