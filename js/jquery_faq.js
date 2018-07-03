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

    $('.close-btn').click(function(){
        // this line gets the parent div
        var mainDiv = $(this).parent().parent();
        mainDiv.fadeOut();
    });

    // list of h3 elements
    var h3s =  $('.parks');

    // Overcomplicated solution to hide the uls just for fun
    h3s.each(function(i){
        $(this).next().hide();
    });

    h3s.click(function(){
        $(this).next().fadeIn();
    });

    $('#register').hide();
    setTimeout(function(){
        $('#register').fadeIn();
    }, 8000);

});

















