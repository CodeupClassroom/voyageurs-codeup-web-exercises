"use strict";

// ============================= Adding and Removing Elements

/*

    // The following array methods change the original array value!

    someArray.shift()   = removes first element
    someArray.unshift() = adds new first element
    someArray.pop()     = removes last element
    someArray.push()    = adds new last element

 */


// array review

/*
    for looping
    forEach looping
    push/pop/shift/unshift
    length
    indexOf
*/

var pies = [
    "apple",
    "cherry",
    "key lime",
    "huckleberry",
    "rhubarb"
];

// for (var i = 0; i < pies.length; i += 1) {
//     console.log(pies[i]);
// }


// pies.forEach(function(element, index) {
//     console.log(element + " at index " + index);
// });

// pies.forEach(function(pie) {
//     console.log(pie);
// });



//
// pies.shift();
//
// pies.pop();
//
// pies.push("Chocolate");
//
// console.log(pies);

// ============================= Slicing

// RETURNS A SUB ARRAY COPY OF THE ORIGINAL

/* SYNTAX

   someArray.slice(startingIndex, startingIndexNotIncluded);

   // one argument only will return a copy from the starting index to the end of the array

 */



    // ** create a function that takes in an array of pies baked and return the 3 most recently baked pies


// function lastThreePies(arr) {
//     return arr.slice(arr.length - 3);
// }
//
// console.log(lastThreePies(pies));







// ============================= Sorting

// pies.sort(); // change the original value





// ============================= Reversing




// ============================= Split / Join


// splitting string into and array

// var names = "Bob Sally Mary";
//
// var namesArr = names.split(" ");
//
// var namesString = namesArr.join("");
//
// console.log(namesString);





// splitting on an empty string

    // var everyCharacter = bondsString.split("");

// joining array into a string

    // var bondsArray = ["Connery", "Lazenby", "Moore", "Dalton", "Brosnan", "Craig"];
    // var bondsString = bondsArray.join("_");
    //
    //
    // var output = "";
    // for (var i = 0; i < bondsArray.length; i += 1) {
    //     output += bondsArray[i];
    //     output += ", ";
    // }
    //
    // console.log(bondsString);



// ** Create a function that will take in a formatted string of numbers and return an array of phone numbers without any symbols. Console.log the output of the returned array.

/* EXAMPLE...

    var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

    cleanPhoneNumbers(phoneNumbers);

    the above code should output the following...

       2105552020
       2305552020
       5125553030


*/

var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

function cleanPhoneNumbers(phoneNums) {
    var phoneNumsArr = phoneNums.split("\n");
    var cleanNumsArr = [];

    phoneNumsArr.forEach(function(phoneNum){
        var formattedNumber = phoneNum.split("-").join("");
        cleanNumsArr.push(formattedNumber);
    });

    return cleanNumsArr;
}

var cleanNumsArr = cleanPhoneNumbers(phoneNumbers);

for (var i = 0; i < cleanNumsArr.length; i += 1) {
    console.log(cleanNumsArr[i]);
}













// ============================= (EXTRA INFO) Splicing Elements

/*

    someArray.splice(param1, param2, param3...);

    param1 = which index to start from
    param2 = how many elements to remove
    param3 = from this parameter and onward, arguments passed in will be added as new elements at the end of the array

 */

//
// // create new test array
//     var bonds = ["Craig", "Brosnan", "Dalton", "Moore", "Connery"];
//
//
// // removing elements splice
//     var missingBonds = bonds.splice(bonds.indexOf("Moore"), 2);
//     console.log(bonds);
//     console.log(missingBonds);
//
//
// // adding elements with splice
//     bonds.splice(1, 0, "Lazenby");
//     console.log(bonds);
//
//
// // replace elements
//     bonds.splice(bonds.indexOf("Craig"), 1, "Elba");
//     console.log(bonds);
