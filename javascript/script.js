$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 5000) {
            $('.topBtn').fadeIn();
        } else {
            $('.topBtn').fadeOut();
        }
    });

    $(".topBtn").click(function () {
        $('html ,body').animate({ scrollTop: 0 }, 800);
    });
});



$(document).ready(function () {
    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.dropdown-submenu li').on("click", function (e) {
        $(this).parent('ul').hide();
    });
    $('.dropdown').on("click", function (e) {
        if ($(".dr_second_level").length > 0) {
            $('.dr_second_level').hide();
        } else {

        }
    });
    $('').on("click", function (e) {
        if ($(".collapse.navbar-collapse.collapse_position").length > 0) {
            $('.collapse.navbar-collapse.collapse_position').hide();
        } else {

        }
    });
});