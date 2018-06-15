"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var willEnterNum, userNum, evenOddMessage, posNegMessage, userNumPlusHundred;
//
// willEnterNum = confirm("Confirm you will enter a number");
//
// if (willEnterNum) {
//
//     var userNum = prompt("Please enter a number!");
//
//     if (!isNaN(userNum) && userNum !== true && userNum !== false) {
//
//         userNum = parseFloat(userNum);
//
//         evenOddMessage = (userNum % 2 === 0) ? "Number is even" : "Number is odd";
//         alert(evenOddMessage);
//
//         userNumPlusHundred = userNum + 100;
//         alert("The number plus 100: " + userNumPlusHundred);
//
//         posNegMessage = (userNum >= 0) ? "Number is positive" : "Number is negative";
//         alert(posNegMessage);
//
//     } else {
//         alert("Input was not a valid number!");
//     }
//
// }
//
// // refactor with functions
//
// function isNumeric(num) {
//     return !isNaN(num) && num !== true && num !== false;
// }
//
// function isEven(num) {
//     return num % 2 === 0;
// }
//
// function addHundred(num) {
//     return num + 100;
// }
//
// function isPositive(num) {
//     return num >= 0;
// }
//
// function createEvenOddMessage(num) {
//     return (isEven(num)) ? "Number is even" : "Number is odd";
// }
//
// function createPosNegMessage(num) {
//     return (isPositive(num)) ? "Number is positive" : "Number is negative";
// }
//
// function createAddHundredMessage(num) {
//     return "Number plus 100 is " + addHundred(num);
// }
//
// function processInput(input) {
//     if (isNumeric(input)) {
//         input = parseFloat(input);
//         alert(createEvenOddMessage(input));
//         alert(createAddHundredMessage(input));
//         alert(createPosNegMessage(input));
//     } else {
//         alert("Number is not numeric");
//     }
// }
//
// function getUserInput() {
//     var willProceed = confirm("Do you wish to enter a number?");
//     if (willProceed) {
//         var userNum = prompt("Please enter a number!");
//         processInput(userNum);
//     }
// }
//
// getUserInput();





/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color){

    // if(color === 'blue'){
    //     return color + ' is the color of the sky';
    // } else if (color === 'red') {
    //     return 'Strawberries are ' + color;
    // } else if ( color === 'cyan'){
    //     return 'I don\'t know anything about  ' + color;
    // } else {
    //     return color +' not a valid color';
    // }

    var result;

    switch (color) {
        case 'blue':
            result = color + ' is the color of the sky';
            break;
        case 'red':
            result = 'Strawberries are ' + color;
            break;
        case 'cyan':
            result = 'I don\'t know anything about  ' + color;
            break;
        default:
            result = color +' not a valid color';
    }

    return result;

}
//
// console.log(analyzeColor('blue'));
// console.log(analyzeColor('red'));
// console.log(analyzeColor('cyan'));
// console.log(analyzeColor('orange'));
// console.log(analyzeColor());
// console.log(analyzeColor(null));
// console.log(analyzeColor(1));
// console.log(analyzeColor(true));
// console.log(analyzeColor(''));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// Checked

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var usersColor = prompt('Give me a color');
// var res = analyzeColor(usersColor);
// alert(res);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total){
    var discountedPrice;

    switch (luckyNumber){
        case 5:
            discountedPrice = 0;
            break;
        case 0:
            discountedPrice = total;
            break;
        case 1:
            discountedPrice = total * (0.9);
            break;
        case 2:
            discountedPrice = total * (0.75);
            break;
        case 3:
            discountedPrice = total * (0.65);
            break;
        case 4:
            discountedPrice = total * (0.5);
            break;
        default:
            discountedPrice = 'Invalid lucky number';
    }

    return discountedPrice;
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
function genRnd(){
    return Math.floor(Math.random() * 6);
}

var luckyNumber = genRnd();

console.log(luckyNumber);
console.log(calculateTotal(luckyNumber, 100));

luckyNumber = genRnd();
console.log(luckyNumber);
console.log(calculateTotal(luckyNumber, 200));