$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 1100) {
        $('.header_scroll').addClass('header1');
    } else {
        $('.header_scroll').removeClass('header1');
    }
});



