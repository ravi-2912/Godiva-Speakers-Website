// Change navbar margin by checking the page scroll event (,) and 
// adjust the font-size of navbar-brand text.
$(window).scroll(function() {
    if($(document).scrollTop() > 100) {
        $(".nav-margin").css("margin", "0");
        $(".navbar-brand").css("font-size", "1.25rem");
    } else {
        $(".nav-margin").css("margin", "15px 0");
        $(".navbar-brand").css("font-size", "2rem");
    }
});


