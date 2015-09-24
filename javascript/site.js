$(document).ready(function () {
    var carouselStart = $(".carousel .slide:first-child");
    carouselStart.fadeIn(400).addClass("visible-slide");

    setInterval(function () {

        var visibleSlide = $(".visible-slide");
        var nextSlide = visibleSlide.next();

        if (nextSlide.length === 0) {
            nextSlide = carouselStart;
        }

        visibleSlide.fadeOut(400).removeClass("visible-slide");
        nextSlide.fadeIn(400).addClass("visible-slide");

    }, 8000);
});