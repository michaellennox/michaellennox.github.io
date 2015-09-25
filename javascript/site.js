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
    
    $('a[href*=#]').click(function (event) {
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 600);
        event.preventDefault();
    });
    
});