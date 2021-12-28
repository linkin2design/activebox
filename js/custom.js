// Back to top button 

$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    // back to top 
    if (scrolling > 500) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
    // nav fix 

    if (scrolling > 300) {
        $('nav').addClass('nav-fix');
    } else {
        $('nav').removeClass('nav-fix')
    }
});

$('.back-to-top').click(function () {
    $('html,body').animate({
        scrollTop: '0px',
    }, 2000);
})

// Preloade

$(document).ready(function () {
    $('.preloader').delay(2000).fadeOut();
});
