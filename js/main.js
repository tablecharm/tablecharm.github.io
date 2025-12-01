$('body').backstretch([
    "images/slider/0.jpg",
    "images/slider/8.jpg",
    "images/slider/2.jpg",
    "images/slider/3.jpg",
    "images/slider/4.jpg",
    "images/slider/1.jpg",
    "images/slider/5.jpg",
    "images/slider/6.jpg",
    "images/slider/7.jpg",
], {duration: 5500, fade: 850});

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $("#mainNav").css("opacity","1");
    } else {
        $("#mainNav").css("opacity","0.85");
    }
});