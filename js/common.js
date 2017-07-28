$(document).ready(function() {
    // header resize
    function windowHeightDetect() {
        $('.main_head').css('height', $(window).height());
    }
    windowHeightDetect();
    $(window).resize(function () {
        windowHeightDetect();
    });

    // menu
    // $(".toggle_mnu, .top_mnu a").click(function() {
    //     $(".sandwich").toggleClass("active");
    // });
    $(".toggle_mnu, .top_mnu a").click(function() {
        $(".sandwich").toggleClass("active");
        if (!$(".sandwich").is('.active')){
            $(".top_mnu").fadeOut(300);
            $(".top_mnu li a").removeClass("fadeInUp animated")
        } else {
            $(".top_mnu").fadeIn(300);
            $(".top_mnu li a").addClass("fadeInUp animated")
        }
    });


});

// preloader
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});