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
$('.navbar-nav li').click(function(){
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
});

// smooth scrolling
$(".navbar-nav li a, footer nav li a, .navbar-brand, #mouse a").on("click", function (e) {
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
$(".owl-carousel").owlCarousel({
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
var Min = 1;
var Max = 48;
var oldArr = [-1, -1, -1, -1, -1, -1];
var i = 1;
var rand = function () {
    return  Math.floor(Math.random() * (Max - Min + 1)) + Min;
};
var iter = function() {
    var id = (i++).toString();
    if (i < 10) {
        id = "0" + id; 
    }
    return "img_src/" + id + ".jpg";
};

var manualImgArray = Array.apply(null, {length: Max}).map( Function.call, iter);
var newArr = [-1, -1, -1, -1, -1, -1];

oldArr = newArr.slice(); 

setInterval(function(){
    var l = 0;
    while(l < 6){
        var randomnumber = rand();
        if(newArr.indexOf(randomnumber) > -1) continue;
        newArr[l++] = randomnumber;
    }
    // UGLY CODE - RESOLVE THIS
    $("#training-material img").eq(0).fadeOut(800, function() {
        $("#training-material img").eq(0).attr("src",manualImgArray[newArr[0]]);
        }).fadeIn(800);
    $("#training-material img").eq(1).fadeOut(800, function() {
        $("#training-material img").eq(1).attr("src",manualImgArray[newArr[1]]);
        }).fadeIn(800);
    $("#training-material img").eq(2).fadeOut(800, function() {
        $("#training-material img").eq(2).attr("src",manualImgArray[newArr[2]]);
        }).fadeIn(800);
    $("#training-material img").eq(3).fadeOut(800, function() {
        $("#training-material img").eq(3).attr("src",manualImgArray[newArr[3]]);
        }).fadeIn(800);
    $("#training-material img").eq(4).fadeOut(800, function() {
        $("#training-material img").eq(4).attr("src",manualImgArray[newArr[4]]);
        }).fadeIn(800);
    $("#training-material img").eq(5).fadeOut(800, function() {
        $("#training-material img").eq(5).attr("src",manualImgArray[newArr[5]]);
        }).fadeIn(800);
    
}, 7000);
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