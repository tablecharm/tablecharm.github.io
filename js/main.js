$('body').backstretch([
    "images/bg/0.jpg",
    "images/bg/1.jpg",
    "images/bg/2.jpg",
    "images/bg/3.jpg",
    "images/bg/4.jpg",
    "images/bg/5.jpg",
    "images/bg/7.jpg",
    "images/bg/8.jpg",
    "images/bg/6.jpg",
], {duration: 4500, fade: 850});

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $("#mainNav").css("opacity","1");
    } else {
        $("#mainNav").css("opacity","0.85");
    }
});