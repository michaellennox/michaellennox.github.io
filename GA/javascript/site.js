---
---
$(document).ready(function() {
    
    // flip the GA logo / face flip on load
    
    setTimeout(function () {
        $(".flip-card").addClass("flipped");
    }, 2000);
    
    // Makes the GA logo / face flip work by adding/removing the flipped class
    
    $(".flipper").click(function () {
        $(this).find(".flip-card").removeClass("flipped").mouseleave(function () {
            $(this).addClass("flipped");
        });
    });
    
    // on click welcome button - scroll down to features segment
    
    $('.welcome').click(function (event) {
        $('html, body').animate({scrollTop: $('.features').offset().top}, 600);
        event.preventDefault();
    });
    
    // on click buttons to bring new content into view
    
    $('.abouttrig').click(function (event) {
        $('.activecontent').fadeOut(600).removeClass('activeContent');
        $('.about').fadeIn(600).addClass('activecontent');

        $('html, body').delay(600).animate({scrollTop: $('.about').offset().top}, 600);
        event.preventDefault();
    });
    
    $('.contacttrig').click(function (event) {
        $('.activecontent').fadeOut(600).removeClass('activeContent');
        $('.contact').fadeIn(600).addClass('activecontent');

        $('html, body').delay(600).animate({scrollTop: $('.contact').offset().top}, 600);
        event.preventDefault();
    });
    
    $('.buildingtrig').click(function (event) {
        $('.activecontent').fadeOut(600).removeClass('activeContent');
        $('.building').fadeIn(600).addClass('activecontent');

        $('html, body').delay(600).animate({scrollTop: $('.building').offset().top}, 600);
        event.preventDefault();
    });
    
    // make topify scroll to top
    
    $('.topify').click(function (event) {
        $('html, body').animate({scrollTop: 0}, 600);
        event.preventDefault();
    });

});