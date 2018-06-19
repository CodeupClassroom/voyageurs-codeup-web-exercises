"use strict";

// ============ EXERCISE 2 ============

    // var input = prompt('Give me a number');

// Steps to approach a problem with loops, Ask yourself:
// What's the input?
// What's the output?
// How do i start?, how do i stop?
// Plan the iterative process

    // for(var i = 1; i <= 10; i+=1 ){
    //     console.log(input + ' x ' + i + ' = ' + (input * i) );
    // }




// ============ EXERCISE 3

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
//     ...

    // for (var i = 0; i <= 9; i += 1) {
    //     var randomNum = Math.floor(Math.random() * (200 - 20)) + 20;
    //     var message;
    //
    //     // var message = (randomNum % 2 === 0) ? randomNum + " is even" : randomNum + " is odd";
    //
    //     if (randomNum % 2 === 0) {
    //         message = randomNum + " is even" ;
    //     } else {
    //         message = randomNum + " is odd";
    //     }
    //
    //     console.log(message);
    //
    // }






// ============ EXERCISE 4

// Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

    // for (var i = 1; i <= 9; i += 1) {
    //     var output = "";
    //     for (var j = 1; j <= i; j += 1) {
    //         output += i;
    //         console.log(output);
    //     }
    // }

    // for (var i = 1; i <= 9; i += 1) {
    //     var output = i + "";
    //     console.log(output.repeat(i));
    // }




// ============ EXERCISE 5

// Create a for loop that uses console.log to create the output shown below.
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

    // for (var x = 100; x > 0; x = x - 5) {
    //     console.log(x);
    // }