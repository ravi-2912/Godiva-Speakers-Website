

$(window).scroll(function() {
    if($(document).scrollTop() > 100) {
        $(".nav-margin").css("margin", "0");
        $(".navbar-brand").css("font-size", "1.25rem");
    } else {
        $(".nav-margin").css("margin", "15px 0");
        $(".navbar-brand").css("font-size", "2rem");
    }
});


$(window).resize(function() {
    $("#carousel-container").css("height", $(window).height().toString() + "px");
});

$("#carousel-container").css("height", $(window).height().toString() + "px");
