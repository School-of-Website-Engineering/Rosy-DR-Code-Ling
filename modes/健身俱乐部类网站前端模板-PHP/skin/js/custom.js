/***************************************************************************************************************
||||||||||||||||||||||||||||         CUSTOM SCRIPT FOR Fitness Care         ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
1. revolution slider
2. accrodion
3. gallery fancybox activator 
4. select menu
5. client carousel
6. counter number changer
7. contact form validation
8. sticky header
9. gallery
10. typed plugin
11. testimonails carousel
12. team carousel style two
13. testimonails carousel
14. Tool tip active 
15. Featured hover 
16. language swticher
17. about carousel
18. testimonial widget carousel
19. single project carousel
20. blog share slide 
21. responsive video
22. price filter
23. cart touch spin
24. video fancybox
25. contact form validation
25. menu active 
25. header search
26. health care pack carousel 
27. video gallery box
setting up values on init
mainImg.attr('src', mainImgSrc);
28. schedule filter
29. product carousel
30. gallery masonary layout
31. single product careousel
32. scoll to target
33. custom progress bar
34. bmi calculator
35. mailchimp active
36. mobile navigation 
37. dynamic divider 
****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/



"use strict"; // Start of use strict

// 1. revolution slider
function revolutionSliderActiver() {
    if ($('.rev_slider_wrapper #slider1').length) {
        jQuery("#slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            navigation: {
                arrows: { enable: false },
                bullets: {
                    style: "",
                    enable: true,
                    hide_onmobile: true,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    space: 5,
                    h_offset: 20,
                    v_offset: 50,
                    tmp: '<span class="tp_bullet"></span>'
                }
            },
            //gridwidth: 1170,
            //gridheight: 1000
            responsiveLevels: [1240, 1030, 778, 480],
            gridwidth: [1140, 1140, 778, 480],
            gridheight: [650, 450, 400, 300]
        });
    };
    if ($('.rev_slider_wrapper #slider2').length) {
        var height = $("#slider2").data('height');
        var sDelay = $("#slider2").data('delay');
        if (!height) {
            height = 825;
        };
        if (!sDelay) {
            sDelay = 5000;
        };

        $("#slider2").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: sDelay,
            navigation: {
                arrows: { enable: true }
            },
            responsiveLevels:[2020,1183,975,751,484],
            gridwidth:[1170,970,750,500,450],
            // gridwidth: 1170,
            gridheight: [height, 600, 400, 400, 400]
        });
    };
}
// 2. accrodion
function accrodion() {
    if ($('.accrodion-grp').length) {

        $('.accrodion-grp').each(function() {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            Self.find('.accrodion').each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };
                });
            });
        });

    };
}
// 3. gallery fancybox activator 
function GalleryFancyboxActivator() {
    var galleryFcb = $('.fancybox');
    if (galleryFcb.length) {
        galleryFcb.fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                media: {}
            }
        });
    }
}
// 4. select menu
function selectMenu() {
    if ($('.select-menu').length) {
        $('.select-menu').selectmenu();
    };
}
// 5. client carousel
function clientCarousel() {
    if ($('.client-carousel').length) {
        $('.client-carousel.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 2,
                    autoWidth: false
                },
                600: {
                    items: 3,
                    autoWidth: false
                },
                1000: {
                    items: 4,
                    autoWidth: false
                }
            }
        });
    };
}
// 6. counter number changer
/*function CounterNumberChanger() {
    var timer = $('.timer');
    if (timer.length) {
        timer.appear(function() {
            timer.countTo();
        })
    }
}*/
// 7. contact form validation
/*
function contactFormValidation() {

    if ($('.contact-form').length) {
        $('.contact-form').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function(response) {
                    $(form).parent('div').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                });
                return false;
            }
        });
    }
}*/
// 8. sticky header
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            // $('.stricky').removeClass('slideIn animated');
            // $('.stricky').addClass('stricky-fixed fadeInDown animated');
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            // $('.stricky').removeClass('stricky-fixed fadeInDown animated');
            $('.stricky').removeClass('stricky-fixed');
            // $('.stricky').addClass('slideIn animated');
            $('.scroll-to-top').fadeOut(500);
        }
    };
}
// 9. gallery
/*
function fleetGallery() {
    if ($('.mixit-gallery').length) {
        $('.mixit-gallery').mixItUp();
    };
}*/
// 10. typed plugin
function typed() {
    if ($(".typed").length) {
        $(".typed").typed({
            stringsElement: $('.typed-strings'),
            typeSpeed: 200,
            backDelay: 1500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function() { null; },
            resetCallback: function() { newTyped(); }
        });
    };
}



// 11. testimonails carousel
function testimonialsCarosuleGardener() {
    if ($('.testimonial-carousel-wrapper').length) {
        $('.testimonial-carousel-wrapper.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    if ($('.testimonial-carousel-2-col').length) {
        $('.testimonial-carousel-2-col.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                980: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        });
    }
}

// 12. team carousel style two

function teamCarouselStyleTwo() {
    if ($('.fitness-team-style-two .owl-carousel').length) {
        $('.fitness-team-style-two .owl-carousel').owlCarousel({
            loop: true,
            margin: 180,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }
}
// 13. testimonails carousel
function relatedProjectCarosule() {
    if ($('.related-project-carousel-2col').length) {
        $('.related-project-carousel-2col').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
    }
    if ($('.related-project-carousel-3col').length) {
        $('.related-project-carousel-3col').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }
}
// 14. Tool tip active 
function toolTip() {
    $('[data-toggle="tooltip"]').tooltip();
}
// 15. Featured hover 
function singleFeaturedHover() {
    if ($('.single-our-feature').length) {
        $('.single-our-feature').hover(function() {
            var bgHover = $(this).data('hover-background');
            $(this).css({
                'background-image': 'url(' + bgHover + ')'
            });
        }, function() {
            $(this).css({
                'background-image': ''
            });
        });
    };
}
// 16. language swticher
/*function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'fade',
            testMode: true,
            onChange: function(evt) {
                alert("The selected language is: " + evt.selectedItem);
            }
        });
    };
}*/
// 17. about carousel
function aboutCarousel() {
    if ($('.about-page .owl-carousel').length) {
        $('.about-page .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    };
}
// 18. testimonial widget carousel
function testiWidgetCarousel() {
    if ($('.testimonials-widget .owl-carousel').length) {
        $('.testimonials-widget .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    };
}
// 19. single project carousel
function singleProjectCarousel() {
    if ($('.single-project-carousel').length) {
        $('.single-project-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    };
}
// 20. blog share slide 
function blogShareSlide() {
    if ($('.share-box.has-slide').length) {
        $('.share-box.has-slide button').on('click', function() {
            $(this).parent().find('.share-slide').toggleClass('share-hide share-show');
        });
    };
}
// 21. responsive video
/*
function respnsiveVideo() {
    if ($('.responsive-video-box').length) {
        $('.responsive-video-box').fitVids();
    }
}*/
// 22. price filter
/*function priceFilter() {
    if ($('.range-slider-price').length) {

        var priceRange = document.getElementById('range-slider-price');

        noUiSlider.create(priceRange, {
            start: [60, 100],
            limit: 200,
            behaviour: 'drag',
            connect: true,
            range: {
                'min': 30,
                'max': 200
            }
        });

        var limitFieldMin = document.getElementById('min-value-rangeslider');
        var limitFieldMax = document.getElementById('max-value-rangeslider');

        priceRange.noUiSlider.on('update', function(values, handle) {
            (handle ? limitFieldMax : limitFieldMin).value = values[handle];
        });
    };
}*/
// 23. cart touch spin
/*function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}*/
// 24. video fancybox
function videoFancybox() {
    if ($("a.video-fancybox").length) {
        $("a.video-fancybox").on('click', function() {
            $.fancybox({
                'padding': 0,
                'autoScale': false,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'title': this.title,
                'width': 680,
                'height': 495,
                'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type': 'swf',
                openEffect: 'elastic',
                closeEffect: 'elastic',
                helpers: {
                    media: {}
                },
                'swf': {
                    'wmode': 'transparent',
                    'allowfullscreen': 'true'
                }
            });

            return false;
        });
    };
}

// 25. contact form validation
/*
function contactFormValidation() {

    if ($('.contact-form').length) {
        $('.contact-form').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                requirement: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function(response) {
                    $(form).parent('div').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                });
                return false;
            }
        });
    }
}*/
// 25. menu active 
function menuActive() {
    if ($("#menuzord").length) {
        $("#menuzord").menuzord({
            indicatorFirstLevel: '<em></em><em></em><em></em>',
            indicatorSecondLevel: '<em></em><em></em><em></em>'
        });
    };
}
// 25. header search
function headerSearchBtn() {
    if ($('.header .menuzord-menu > li.search-button > a').length) {
        $('.header .menuzord-menu > li.search-button > a').on('click', function() {
            $(this).find('.fa').toggleClass('fa-times fa-search');
        });
    };
}
// 26. health care pack carousel 
function healthCarePackCarousel() {
    if ($('.health-care-pack-carousel').length) {
        $('.health-care-pack-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                700: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }
}
// 27. video gallery box
function videoGalleryBox() {
    if ($('.video-box').length) {
        var wrapper = $('.video-box');
        var imgLi = wrapper.find('ul.img-list').children('li');
        var imgCount = imgLi.length;
        var mainImg = wrapper.find('.main-box .img-box').children('img');
        var videoPreview = wrapper.find('.main-box').find('a.play-video');

        var videoImg = imgLi.map(function() {
            return $(this).data('video-img');
        });
        var videoUrl = imgLi.map(function() {
            return $(this).data('video-url');
        });
        var current = 1;

        // setting up values on init
        videoPreview.attr('href', wrapper.find('ul.img-list').children('li.active').data('video-url'));

        $('.vid-nav').find('a').on('click', function() {
            var dir = $(this).data('dir');
            if (dir === 'next') {
                current = current + 1;
            } else {
                current = current - 1;
            };
            if (current === 0) {
                current = imgCount;
                dir = 'next';
            } else if (current - 1 === imgCount) {
                current = 1;
            };
            console.log(current);

            makeSwitch();

            return false;
        });


        function makeSwitch() {
            var i = current - 1;
            var mainImgSrc = videoImg[i];
            var mainVideoSrc = videoUrl[i];

            imgLi.removeClass('active');
            imgLi.eq(i).addClass('active');
            mainImg.fadeOut(500, function() {
                mainImg.attr("src", mainImgSrc);
                mainImg.fadeIn(500);
            });
            // mainImg.attr('src', mainImgSrc);
            videoPreview.attr('href', mainVideoSrc);
        }


    };
}
// 28. schedule filter
function scheduleFilter() {
    if ($('.schedule-filter').length) {
        $('.schedule-filter li').find('span').on('click', function() {
            var filterClass = $(this).parent().data('filter');

            $('.schedule-filter li').removeClass('active');
            $(this).parent().addClass('active');

            $('.schedule-table').find('.schedule-wrapper').addClass('closed');
            $('.schedule-table').find('.schedule-wrapper').removeClass('opened');

            $('.schedule-table').find(filterClass).addClass('opened');
            $('.schedule-table').find(filterClass).removeClass('closed');
        });
    };
}
// 29. product carousel
function productCarousel() {
    if ($('.product-carousel').length) {
        $('.product-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }
}
// 30. gallery masonary layout
/*
function galleryMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');
            $('.filter-layout').isotope({
                filter: selector,
                stagger: 30,
                transitionDuration: 400,
                hiddenStyle: {
                    opacity: 0
                },
                visibleStyle: {
                    opacity: 1
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}*/

// 31. single product careousel
function singleProductCarousel() {
    if ($('.single-product-carousel-content-box').length && $('.single-product-carousel-thumbnail-box').length) {

        var $sync1 = $(".single-product-carousel-content-box"),
            $sync2 = $(".single-product-carousel-thumbnail-box"),
            flag = false,
            duration = 1000;

        $sync1
            .owlCarousel({
                items: 1,
                margin: 0,
                nav: false,
                dots: false
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync2
            .owlCarousel({
                margin: 10,
                items: 2,
                nav: false,
                dots: false,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],
                center: false,
                responsive: {
                    0: {
                        items: 1,
                        autoWidth: false
                    },
                    480: {
                        items: 2,
                        center: false,
                        autoWidth: false
                    },
                    600: {
                        items: 3,
                        autoWidth: false
                    },
                    1000: {
                        items: 3,
                        autoWidth: false
                    }
                },
            })
            .on('click', '.owl-item', function() {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

    };
}
// 32. scoll to target
function scrollToTarget() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}
// 33. custom progress bar
/*
function CustomProgressBar() {
    if ($('.pgrs-bar').length) {

        $('.pgrs-bar').waypoint(function() {
            $('.pgrs-bar').each(function() {
                //======== CONFIGURATION WINDOW
                //======== i made this configuration code here you can change value and experiment
                var x = 290; //set the x - center here
                var y = 200; //set the y - center here
                var r = 160; //set the radius here
                var linewidth = 80; //set the line width here
                var Self = $(this);
                var SET_PERCENTAGE = Self.children('.pgrs-bar-cv').data('percentage-value');
                var bar_color = Self.children('.pgrs-bar-cv').data('bar-color');
                var alt_color = Self.children('.pgrs-bar-cv').data('bar-alt-color');
                var track_color = Self.children('.pgrs-bar-cv').data('track-color');
                var ball_color = Self.children('.pgrs-bar-cv').data('ball-color');

                //======== 
                var c = Self.children('.pgrs-bar-cv').get(0);
                var id = Self.attr('id');
                var status = $('#' + id + '.pgrs-bar-status');
                var loaded = false;

                var ctx = c.getContext("2d");
                window.onload = function() {

                    loaded = true;
                }


                var ROTATION = 0;

                function setcanvas() {

                    ctx.translate(x, y);
                    ctx.rotate((Math.PI / 180) * (-ROTATION));
                    ctx.translate(-x, -y);



                    ctx.clearRect(0, 0, c.width, c.height);


                    ctx.beginPath();
                    ctx.lineWidth = 80;
                    ctx.strokeStyle = track_color;
                    ctx.arc(x, y, r, 0, 2 * Math.PI);
                    ctx.stroke();



                    ctx.beginPath();
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = "black";
                    ctx.arc(x, y, r + (linewidth / 2), 0, 2 * Math.PI);
                    ctx.globalAlpha = 0.02;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = "black";
                    ctx.arc(x, y, r - (linewidth / 2), 0, 2 * Math.PI);
                    ctx.stroke();
                }

                function getPoint(c1, c2, radius, angle) {
                    return [c1 + Math.cos(angle) * radius, c2 + Math.sin(angle) * radius];
                }

                function setPercent(uplimit) {
                    ctx.beginPath();
                    ctx.translate(x, y);
                    ROTATION = 270;
                    ctx.rotate((Math.PI / 180) * ROTATION);
                    ctx.translate(-x, -y);
                    ctx.lineWidth = linewidth; //40
                    var my_gradient = ctx.createLinearGradient(-0, 0, 0, 520);
                    my_gradient.addColorStop(0, bar_color);
                    my_gradient.addColorStop(1, alt_color);

                    ctx.strokeStyle = my_gradient;
                    ctx.arc(x, y, r, (Math.PI / 180) * (uplimit), 0);
                    ctx.globalAlpha = 1;
                    ctx.stroke();


                    ctx.beginPath();
                    var a = getPoint(x, y, r, (Math.PI / 180) * (uplimit))[0];
                    var b = getPoint(x, y, r, (Math.PI / 180) * (uplimit))[1];
                    var nr = linewidth / 2;
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = track_color;
                    ctx.arc(a, b, nr, 0, 2 * Math.PI);
                    ctx.fillStyle = track_color;
                    ctx.fill();
                    ctx.stroke();

                    ctx.beginPath();
                    var a = getPoint(x, y, r, (Math.PI / 180) * (uplimit))[0];
                    var b = getPoint(x, y, r, (Math.PI / 180) * (uplimit))[1];
                    nr = linewidth / 2 - 6;
                    ctx.lineWidth = 14;
                    ctx.strokeStyle = track_color;
                    ctx.arc(a, b, nr, 0, 2 * Math.PI);
                    ctx.fillStyle = ball_color;
                    ctx.fill();
                    ctx.stroke();

                }

                function callcanvas(degree) {
                    setcanvas();
                    setPercent(360 - degree);
                }
                var degree = (SET_PERCENTAGE * 360) / 100;
                var degree = parseInt(degree, 10);
                var start = 0;
                var it = window.setInterval(function() {
                    callcanvas(start);
                    start++;
                    if (start == degree) {
                        start = degree;
                        window.clearInterval(it);
                    }
                    if (loaded) {
                    	var startVar = ((start * 100) / 360);
                    	var startVar = parseInt(startVar, 10);
                    	status.html( startVar + '%');
                    };
                }, 1);
                $(this).children('.pgrs-bar-cv').removeClass('pgrs-bar-cv');
            });
        }, { offset: '85%' });


    };
}*/

// 34. bmi calculator
function thmBmiCalculator() {
    if ($('.bmi-calc-form').length) {

        function bmi(w, hFeet, hInch, r) {
            var weight = w,
                feet = parseInt(hFeet * 12, 10),
                inches = parseInt(hInch, 10),
                height = feet + inches,
                output = r,
                formula = ~~(weight / (height * height) * 703 * 100) / 100;

            output.val(formula);

            console.log(output);
        }

        $('.bmi-calc-form').each(function() {
            $(this).on('submit', function(e) {
                var bmiForm = $(this);
                var bmiWeight = bmiForm.find('.input-weight').val();
                var bmiHeightFeet = bmiForm.find('.input-height-feet').val();
                var bmiHeightInch = bmiForm.find('.input-height-inch').val();
                var bmiResult = bmiForm.find('.input-result');

                bmi(bmiWeight, bmiHeightFeet, bmiHeightInch, bmiResult);

                // return false;
                e.preventDefault();
            });
        });

    };
}
// 35. mailchimp active
/*
function thmMailchimp() {
    if ($('.mailchimp-form').length) {
        $('.mailchimp-form').each(function() {
            var mailChimpWrapper = $(this);

            mailChimpWrapper.validate({ // initialize the plugin
                rules: {
                    fname: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    }
                },
                submitHandler: function(form) {
                    // sending value with ajax request
                    $.post($(form).attr('action'), $(form).serialize(), function(response) {
                        $(form).parent('div').append(response);
                        $(form).find('input[type="text"]').val('');
                        $(form).find('input[type="email"]').val('');
                        $(form).find('textarea').val('');
                    });
                    console.log($(form).serialize());
                    return false;
                }
            });
        });
    };
}*/
// 36. mobile navigation 
function mobileNavToggler() {
    if ($('.mainmenu-holder').length) {
        $('.mainmenu-holder .nav-footer .menu-expander').on('click', function() {
            $('.mainmenu-holder .nav-header').toggleClass('closed opened');
            return false;
        });
        $('.mainmenu-holder .nav-header .navigation li.dropdown').children('a').append(function() {
            return '<button class="dropdown-expander"><i class="fa fa-bars"></i></button>';
        });
        $('.mainmenu-holder .nav-header .navigation .dropdown-expander').on('click', function() {
            var Self = $(this);
            Self.parent().parent().children('.submenu').toggleClass('closed opened');
            return false;
        });
    }
}

// 37. dynamic divider 
function dynamicDivider() {
    if ($('.has-dynamic-divider').length) {
        var wrapper = $('.has-dynamic-divider');
        var countElement = $('.has-dynamic-divider').data('count-element');
        // wrapper.find('.dynamic-divider-element:nth-child('+countElement+'n)').after("<span class='divider'></span>");
        var divs = wrapper.find('.dynamic-divider-element');
        for (var i = 0; i < divs.length; i += countElement) {
            divs.slice(i, i + 3).wrapAll("<div class='divider clearfix'></div>");
        }

    }
}



// instance of fuction while Document ready event   
jQuery(document).on('ready', function() {
    (function($) {
        revolutionSliderActiver();
        accrodion();
        selectMenu();
        //CounterNumberChanger();
        //contactFormValidation();
        //fleetGallery();
        GalleryFancyboxActivator();
        //typed();
        //mobileNavToggler();
        testimonialsCarosuleGardener();
        toolTip();
        singleFeaturedHover();
        //languageSwitcher();
        relatedProjectCarosule();
        singleProjectCarousel();
        aboutCarousel();
        blogShareSlide();
        //respnsiveVideo();
        //priceFilter();
        testiWidgetCarousel();
        //cartTouchSpin();
        //videoFancybox();
        //contactFormValidation();
        menuActive();
        headerSearchBtn();
        healthCarePackCarousel();
        //videoGalleryBox();
        teamCarouselStyleTwo();
        scheduleFilter();
        productCarousel();
        singleProductCarousel();
        dynamicDivider();
        scrollToTarget();
        //CustomProgressBar();
        //thmBmiCalculator();
        //thmMailchimp();

    })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        clientCarousel();
        //galleryMasonaryLayout();
    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function() {
    (function($) {
        //stickyHeader();
    })(jQuery);
});
