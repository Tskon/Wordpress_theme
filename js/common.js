$(document).ready(function() {

    // header resize
    function windowHeightDetect() {
        $('.main_head').css('height', $(window).height());
    }
    windowHeightDetect();
    $(window).resize(function () {
        windowHeightDetect();
    });

    // animate plugin:
    //      1.menu button
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
    //      2.animate sections first look
    $('section *:not(.portfolio_item_content)').animated('fadeIn');

    // popup modal plugin
    $('.popup').magnificPopup({type: 'image'});

    // mixitup grid (filter) plugin
    $('#portfolio_wrapper').mixItUp();

    // without plugins
    $('#howwedo li').click(function () {
        $('#howwedo li').removeClass('active');
        $(this).addClass('active');
    });

    //validator
    $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

    //scroll-to-id
    $(".top_mnu ul a").mPageScroll2id();

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