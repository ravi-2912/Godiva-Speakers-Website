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

// toggling active class for navbar menu on click event
$('.navbar-nav li a').click(function(){
    $('.navbar-nav li a').removeClass('active');
    $(this).addClass('active');
});

// smooth scrolling
$(".navbar-nav li a, footer nav li a, .navbar-brand, #mouse a, .pricing-table a").on("click", function (e) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html,body").animate(
            {
                scrollTop: $(hash).offset().top
            }, 
            600,
            function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            }
        );
      }
});

// Owl Carousel
$(".officers .owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    autoplay: true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    autoplaySpeed: 1000,
    responsive:{
        992: {
            items: 2
        },
        0: {
            items: 1
        }
    }
});

// Change TM Manual images by fading in and out
var rand = function (min, max) {
    return  Math.floor(Math.random() * (max - min + 1)) + min;
};
var N = 48;
var i = 1;
var iter = function() {
    var id = i.toString();
    if (i++ < 10) {
        id = "0" + id; 
    }
    return "img_src/" + id + ".jpg";
};
var manualImgArray = Array.apply(null, {length: N}).map( Function.call, iter);
var HTMLImgCode = "<img src=\"%img_src%\" class=\"img-fluid\" alt=\"%img_alt%\">";
for(i = 0; i < N; i++) {
    var string = HTMLImgCode.replace("%img_src%", manualImgArray[i]).replace("%img_alt%", "Toastmasters\' Manual");
    $("#training-material .owl-carousel").append(string);
}

var owl = $("#training-material .owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    responsive:{
        992: {
            items: 6
        },
        767: {
            items: 4
        },
        575: {
            items: 2
        },
        0: {
            items: 1
        }
    }
});
owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
        owl.trigger("next.owl");
    } else {
        owl.trigger("prev.owl");
    }
    e.preventDefault();
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