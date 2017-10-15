// Change navbar margin by checking the page scroll event (,) and 
// adjust the font-size of navbar-brand text.
$(window).scroll(function() {
    if($(document).scrollTop() > 100) {
        $(".nav-margin").css("margin", "0");
        $(".navbar-brand").css("font-size", "1.5rem");
        $(".navbar").removeClass("navbar-dark").addClass("navbar-light bg-light nav-shadow");
        $("#godiva").addClass("red");
        $("#speakers").addClass("blue");
    } else {
        $(".nav-margin").css("margin", "15px 0");
        $(".navbar-brand").css({
            "font-size": "2.25rem",
            "color": "white"
        });
        $(".navbar").removeClass("navbar-light bg-light nav-shadow").addClass("navbar-dark");
        $("#godiva").removeClass("red");
        $("#speakers").removeClass("blue");
    }
});

// toggling active class for navbar menu
$('.navbar-nav li').click(function(){
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
});

// scroll spy
$("body").scrollspy({ target: "#navbar" });
// toggle navbar item active class based on scroll spy


// smooth scrolling
$(".navbar-nav li a, footer nav li a, .navbar-brand").on("click", function (e) {
    e.preventDefault();

    var spaceOffset = 0; // you may change this value as needed
    $("html,body").animate(
        {
            scrollTop: $(this.hash).offset().top - spaceOffset
        }, 
        800
    );
});
/*
$(window).bind('load resize', function() {
    if( $(window).width() < 769 ) {
        // hide collapsible menu once menu item clicked on mobile 
        $('.navbar-nav li a').on( 'click', function() {
            if($(this).parents('.navbar-collapse.collapse').hasClass('in')) {
                $('#main-navbar').collapse('hide');
            }
        });
    }
});
*/