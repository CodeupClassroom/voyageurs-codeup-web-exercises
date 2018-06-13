'use strict';

// ============================== Lecture Notes

    // console.log('This is my external file loaded');
    //
    // console.log(1 + 2);
    //
    // console.error('Something went wrong');
    //
    // var age = prompt('How old are you?');
    //
    // console.log(age);
    //
    // // alert('Your age is ' + age);
    //
    // var answer = confirm('Is it your bday today?');
    // console.log(answer);



// ============================== JS / HTML Exercise 1 and 2

// Use the alert function to show a message that says 'Welcome to my Website!'.

    // alert('Welcome to my Website!');

// Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.

// For example, if the user enters "blue", your code should alert a message that says:
// "Great, blue is my favorite color too!"

    // var color = prompt('What\'s your favorite color?');
    // alert(color + " is my favorite color too!");






// ============================== JS / HTML Exercise 3

// ------------- Movie Rental
// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

    // var rentalPerDayDollars = prompt("What is the daily rental rate?");
    // var littleMermaidDays = prompt("How many days rented for The Little Mermaid?");
    // var brotherBearDays = prompt("How many days rented for Brother Bear?");
    // var herculesDays = prompt("How many days rented for Hercules?");
    // var totalRentalCost;
    // totalRentalCost =
    //     (parseInt(littleMermaidDays)
    //         + parseInt(brotherBearDays)
    //         + parseInt(herculesDays))
    //     * parseInt(rentalPerDayDollars);
    //
    // alert("Your total rental cost is $" + totalRentalCost.toFixed(2));

// ------------- Contractor
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
//     How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    // var googleHourlyRateDollars = prompt("Please enter the Google rate");
    // var amazonHourlyRateDollars = prompt("Please enter the Amazon rate");
    // var facebookHourlyRateDollars = prompt("Please enter the Facebook rate");
    // var googleHours = prompt("Please enter Google hours this week.");
    // var amazonHours = prompt("Please enter Amazon hours this week.");
    // var facebookHours = prompt("Please enter Facebook hours this week.");
    // var totalPayment;
    //
    // totalPayment = googleHours * googleHourlyRateDollars;
    // totalPayment += amazonHours * amazonHourlyRateDollars;
    // totalPayment += facebookHours * facebookHourlyRateDollars;
    //
    // console.log(totalPayment);


// ------------- Student Enrollment
// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.

    var classIsNotFull = confirm("Confirm that the class is not full."); // boolean
    var classSchedulesCheck = confirm("Confirm no schedule conflict."); // boolean
    var studentEnrolled = classIsNotFull && classSchedulesCheck;

    alert("Student is enrolled: " + studentEnrolled);


// ------------- Product Offer
// A product offer can be applied only if people buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
//     Use the following code to follow the instructions below:

    var numberOfItemsForDiscount = prompt("Enter number of items for discount");
    var numberOfItems = prompt("Enter number of items purchased"); // number
    var offerIsNotExpired = confirm("Confirm offer is not expired"); // boolean
    var isPremiumMember = confirm("Confirm premium membership"); // boolean
    var productDiscountApplied = isPremiumMember || (numberOfItems >= numberOfItemsForDiscount && offerIsNotExpired);

    alert("Discount applied: " + productDiscountApplied);


