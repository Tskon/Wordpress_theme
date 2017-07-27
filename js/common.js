$(document).ready(function() {
    function windowHeightDetect() {
        $('.main_head').css('height', $(window).height());
    }

    windowHeightDetect();
    $(window).resize(function () {
        windowHeightDetect();
    });

});

// preloader
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});