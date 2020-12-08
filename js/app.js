$(function() {

    let header = $("#header");
    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    // HEADER-FIXED

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });
    
    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // SMOOTH SCROLL

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;

        $("#nav").toggleClass("active");
        $("#header").toggleClass("active");
        $("#nav_toggle").toggleClass("active");

        $("#nav a").removeClass("active");
        $(this).addClass("active");
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });

    $("[data-home]").on("click", function(event) {
        event.preventDefault();
        let blockId = $(this).data("home");
        let blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });

    // MENU NAV TOOGLE

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $("nav").toggleClass("active");
        $("#header").toggleClass("active");
        $("#nav_toggle").toggleClass("active");
    });

    // ACORDION

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        let blockId = $(this).data("collapse");
        $(this).toggleClass("active");
        // $(blockId).slideToggle();

    });

    // SLIDER

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});