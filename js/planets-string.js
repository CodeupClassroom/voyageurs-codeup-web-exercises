(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.

        planetsArray = planetsString.split("|");
        //
        console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
        var newString = planetsArray.join("<br>");
        console.log(newString);

    // Bonus: Create a second string that would display your planets in an unordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    // With join

            /*

                <ul>
                    <li>firstThing</li>
                    <li>secondThing</li>
                </ul>


             */

            // var planetsHTML = "<ul><li>";
            // planetsHTML += planetsArray.join("</li><li>");
            // planetsHTML += "</li></ul>";
            //
            // console.log(planetsHTML);
            //
            // document.body.innerHTML = planetsHTML;

    // With looping

            // var planetsHTML = "<ul>";
            //
            // planetsArray.forEach(function(planet) {
            //     planetsHTML += "<li>" + planet + "</li>";
            // });
            //
            // planetsHTML += "</ul>";




})();
