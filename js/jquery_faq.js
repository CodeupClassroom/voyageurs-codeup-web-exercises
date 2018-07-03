$(document).ready(function() {
    "use strict";


    // ATTRIBUTES EXERCISE
    $("#details").click(function() {
        // event.preventDefault();
        $("dd").toggleClass("invisible");
    });

    $("dt").click(function() {
        $(this).toggleClass("highlighted");
    });


    // TRAVERSAL EXERCISE
    // $('ul').each(function() {
    //     $(this).children().last().css('background', 'yellow');
    // });

    // $('ul').each(function(index) {
    //     $($('ul')[index]).children().last().css('background', 'yellow');
    // });

    // problem 3
    function highLightBtn() {
        $('ul').each(function() {
            $(this).children().last().css('background', 'yellow');
        });
    }

    $('#highlightBtn').click(highLightBtn);


    // problem 4
    $('h3').click(function() {
        $(this).next().css('font-weight', 'bold');
    });

    $('li').click(function() {
        $(this).parent().children().first().css('color', 'blue');
    });





});

















