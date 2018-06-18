"use strict";

var input = prompt('Give me a number');

// Steps to approach a problem with loops, Ask yourself:
// What's the input?
// What's the output?
// How do i start?, how do i stop?
// Plan the iterative process

for(var i = 1; i <= 10; i+=1 ){
    console.log(input + ' x ' + i + ' = ' + (input * i) );
}