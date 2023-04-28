"use strict";

//Rage Template
//Designerd by: http://bootstrapthemes.co

jQuery(document).ready(function ($) {

    //for Preloader

    $(window).load(function () {
        $("#loading").fadeOut(100);
    });


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 80)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

    // magnificPopup

    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.video-link').magnificPopup({
        width: '960px',
        type: 'iframe',
        mainClass: 'mfp-fade',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=t3c6EATjLlg', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
                // you may add here more sources

            },

            srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }

    });

    $('.video-link02').magnificPopup({
        width: '960px',
        type: 'iframe',
        mainClass: 'mfp-fade',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=t3c6EATjLlg', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
                // you may add here more sources

            },

            srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }

    });

    $('.video-link03').magnificPopup({
        width: '960px',
        type: 'iframe',
        mainClass: 'mfp-fade',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=t3c6EATjLlg', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
                // you may add here more sources

            },

            srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }

    });

    // slick slider active Home Page Tow
    $(".testimonial_slid").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<i class='fa fa-angle-left nextprevleft'></i>",
        nextArrow: "<i class='fa fa-angle-right nextprevright'></i>",
        autoplay: true,
        autoplaySpeed: 2000
    });

    //    featured slider
    // $('.featured_slider').slick({
    //     dots: false,
    //     arrows: false,
    //     infinite: false,
    //     speed: 250,
    //     fade: true,
    //     cssEase: 'linear',
    //     centerMode: 'true',
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });

    //---------------------------------------------
    // Counter 
    //---------------------------------------------

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

    //---------------------------------------------
    // Scroll Up 
    //---------------------------------------------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    //About us accordion 

    $("#faq_main_content").collapse({
        accordion: true,
        open: function () {
            this.addClass("open");
            this.css({ height: this.children().outerHeight() });
        },
        close: function () {
            this.css({ height: "0px" });
            this.removeClass("open");
        }
    });

    //Team Skillbar active js

    jQuery('.teamskillbar').each(function () {
        jQuery(this).find('.teamskillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });

    //Span Menu toggle
    $(".navbar-header button").on('click', function () {
        $('.navbar-header button').toggleClass('active');
    });

    //End

});

//////////////////////////////////////////////////////추가 JS//////////////////////////////////////////////////////////////////////

// products Section slide
$('.product_slide').slick({
    dots: false,
    arrows: false,
    infinite: false,
    draggable: false,
    speed: 250,
    fade: true,
    cssEase: 'linear',
    centerMode: 'true',
    slidesToShow: 1,
    slidesToScroll: 1
});

//Article Section slide
$('.Article_slide').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 250,
    fade: true,
    cssEase: 'linear',
    centerMode: 'true',
    slidesToShow: 1,
    slidesToScroll: 1
});

//History Section slide
$('.History_slide').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//Youtube Section slide
$('.slick_sd').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7500,
    pauseOnHover: true,
    draggable: true,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// slide move
$('.Next_article').click(function () {
    $('.Article_slide').slick('slickNext');
})
$('.Prev_article').click(function () {
    $('.Article_slide').slick('slickPrev');
})
$('.Prev_article_sd').click(function () {
    $('.slick_sd').slick('slickPrev');
})
$('.Next_article_sd').click(function () {
    $('.slick_sd').slick('slickNext');
})