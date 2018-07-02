$("#details").click(function() {
    // event.preventDefault();
    $("dd").toggleClass("invisible");
});

$("dt").click(function() {
    $(this).toggleClass("highlighted");
});