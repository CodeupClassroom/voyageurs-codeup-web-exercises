// ======================= IF STATEMENTS

/*

     if (condition) {
        action; // only runs if condition true
     }

*/

    if (3 > 1) {
        console.log("3 is greater than 1");
    }

    var x = 3;

    if (x = 10) { // is this a comparison???
        console.log("????");
    }


// ======================= TRUTHY FALSY VALUES

/*

    JavaScript values are inherently "truthy" or "falsy".

    The following values evaluate to false:
        1) false
        2) 0 (zero)
        3) "" (empty string)
        4) null
        5) undefined
        6) NaN (a special Number value meaning Not-a-Number!)

*/

// ======================= OPERATORS

/*

    Comparison operators

    ==	  ----   equal to (value)
    ===	  ----   equal to (type and value)
    !=	  ----   not equal to (value)
    !==	  ----   not equal to (type and value)
    >	  ----   greater than
    <	  ----   less than
    >=	  ----   greater than or equal to
    <=	  ----   less than or equal to

*/


// ======================= IF STATEMENT WITH ELSE

/*

     if (condition) {
         action; // runs if condition true
     } else {
         action; // runs if condition false
     }

*/

    x = 6;

    if (x === 10) {
        console.log("x is 10");
    } else {
        console.log("x is not 10");
    }






// ======================= IF STATEMENTS WITH ELSE IF

/*

    if (condition1) {
        action; // runs if condition true
    } else if (condition2) {
        action; // runs if condition 1 is false and condition 2 is true
    } else {
        action; // runs if condition 1 and condition 2 are false
    }

*/


    x = 6;

    if (x === 0) {
        console.log("x is 10");
    } else if (x === 9) {
        console.log("x is 9");
    } else {
        console.log("x is not 9 or 10");
    }



    if ("10" !== 10) {
        console.log("Condition met.");
    } else {
        console.log("Condition NOT met.");
    }


// ======================= TERNARY OPERATORS

// use when only one condition is being evaluated and may be only true or false

/*

     (condition) ? returnValueIfTrue : returnValueIfFalse

*/

    var someNumber = 9;

    var divisibleByFive = (someNumber % 5 === 0) ? "Number is divisible by five." : "Number is not divisible by five.";

    console.log(divisibleByFive);




// ======================= SWITCH STATEMENTS

// use a switch statement if a single condition may have multiple possible values

/*

    switch(condition) {

        case someOutput1:
            ...do something;
            break;
        case someOutput2:
            ...do something;
            break;
        (can continue to add cases)
        default:
            this will happen if no other case values match the switch condition value;

    }

*/

    var bondFilm = "Goldfinger";

    if (bondFilm === "Dr. No") {
        console.log("Fantastic!");
    } else if (bondFilm === "From Russia With Love") {
        console.log("Exploding barrels!");
    } else if (bondFilm === "Goldfinger") {
        console.log("\"I expect you to die, Mr. Bond.\"");
    } else if (bondFilm === "Thunderball") {
        console.log("Kinda long.");
    } else if (bondFilm === "You Only Live Twice") {
        console.log("One of the better theme songs.");
    } else {
        console.log("That's not one of the first five Bond films.");
    }


// refactor

    switch (bondFilm) {
        case "Dr. No":
            console.log("Fantastic!");
            break;
        case "From Russia With Love":
            console.log("Exploding barrels!");
            break;
        case "Goldfinger":
            console.log("\"I expect you to die, Mr. Bond.\"");
            break;
        case "Thunderball":
            console.log("Kinda long.");
            break;
        case "You Only Live Twice":
            console.log("One of the better theme songs.");
            break;
        default:
            console.log("That's not one of the first five Bond films.");
    }