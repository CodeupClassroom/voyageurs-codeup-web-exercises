"use strict";


// ============ EXERCISE 2 ============

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.


while (true) {
    var userNum = prompt("Enter an odd number between 1 and 50");

    if (userNum % 2 !== 0 && userNum <= 50 && userNum >= 1) {
        break;
    }
}
console.log(userNum);









// ============ EXERCISE 3 ============

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// OUTPUT SHOULD LOOK LIKE THIS...

// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49


console.log("Number to skip is: " + userNum);

for (var i = 1; i <= 50; i += 1) {

    if (i !== parseInt(userNum)) {
        console.log("Here is an odd number: " + i);
        continue;
    } else {
        console.log("Yikes! Skipping number: " + userNum);
        continue;
    }

    if (i % 2 === 0) {
        continue;
    }

}
