$(document).ready(function() {
    if(0 == null) console.log('hi');
    // header resize
    function windowHeightDetect() {
        $('.main_head').css('height', $(window).height());
    }
    windowHeightDetect();
    $(window).resize(function () {
        windowHeightDetect();
    });

    $('.toggle_mnu, .top_mnu a').click(function() {
        $('.sandwich').toggleClass('active');
        if (!$('.sandwich').is('.active')){
            $('.top_mnu').fadeOut(300);
            $('.top_mnu li a').removeClass('fadeInUp animated');
            $('.sandwich').removeClass('sandwich_transparent');
        } else {
            $('.top_mnu').fadeIn(300);
            $('.top_mnu li a').addClass('fadeInUp animated');
            $('.sandwich').addClass('sandwich_transparent');
        }
    });

    $('section *').animated('fadeIn');

    $('.popup').magnificPopup({type: 'image'});

    // need fix toggle for mixitup
    // $('#s_howwedo li').click(function () {
    //     $('#s_howwedo ul li').removeClass('active');
    //     $(this).addClass('active');
    // });

});

// preloader
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    $('.top_text h1').animated('zoomIn');
    $('.top_text p').animated('fadeInUp');
});