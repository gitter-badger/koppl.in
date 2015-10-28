/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function($, sr, undefined) {
    "use strict";

    var $document = $(document),

        // debouncing function from John Hann
        // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
        debounce = function(func, threshold, execAsap) {
            var timeout;

            return function debounced() {
                var obj = this,
                    args = arguments;

                function delayed() {
                    if (!execAsap) {
                        func.apply(obj, args);
                    }
                    timeout = null;
                }

                if (timeout) {
                    clearTimeout(timeout);
                } else if (execAsap) {
                    func.apply(obj, args);
                }

                timeout = setTimeout(delayed, threshold || 100);
            };
        };

    $document.ready(function() {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        function updateImageWidth() {
            var $this = $(this),
                contentWidth = $postContent.outerWidth(), // Width of the content
                imageWidth = this.naturalWidth; // Original image resolution

            if (imageWidth >= contentWidth) {
                $this.addClass('full-img');
            } else {
                $this.removeClass('full-img');
            }
        }

        var $img = $("img").on('load', updateImageWidth);

        function casperFullImg() {
            $img.each(updateImageWidth);
        }

        casperFullImg();
        $(window).smartresize(casperFullImg);

        $(".main-header__scroll-down").arctic_scroll();
    });

    // smartresize
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function(options) {

        var defaults = {
                elem: $(this),
                speed: 500
            },

            allOptions = $.extend(defaults, options);

        allOptions.elem.click(function(event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({
                    scrollTop: ($(this.hash).offset().top + toMove)
                }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({
                    scrollTop: toMove
                }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({
                    scrollTop: ($(this.hash).offset().top)
                }, allOptions.speed);
            }
        });
    };

    var colors = [
        ['#D89F87', '#46324A', '#132327', '#0C0207'],
        ['#2b2645', '#182733', '#3b4f5e', '#2c2b31'],
        ['#3f0122', '#270313', '#011e29', '#004e59'],
        ['#4a1b44', '#280325', '#012922', '#005934'],
        ['#1e2639', '#2b2233', '#88354c'],
        ['#3F3F3F', '#5C605D', '#87AD83', '#B1D8B6', '#97D897'],
        ['#645188', '#886451', '#528881', '#000000'],
        ['#1b85b8', '#5a5255', '#ae5a41', '#c3cb71'],
        ['#f29421', '#434292', '#132449'],
        ['#18392b', '#eeeeee'],
    ];

    var randomColor = Math.floor(Math.random() * (colors.length));
    var randomSize = Math.floor(Math.random() * 60) + 20;
    var randomVariance = Math.random();

    var triangle = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        variance: .7,
        cell_size: randomSize,
        x_colors: colors[randomColor]
    });

    $('.main-header').attr('style', 'background-image: url(' + triangle.png() + ')');

    // HAMBURGLERv2



})(jQuery, 'smartresize');

function togglescroll() {
  $('body').on('touchstart', function(e) {
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function() {
  togglescroll()
  $(".hamburguer").click(function() {
    $(".mobile-nav").fadeToggle(500);
    $(".hamburguer__top-menu").toggleClass("hamburguer__top-animate");
    $("body").toggleClass("noscroll");
    $(".hamburguer__mid-menu").toggleClass("hamburguer__mid-animate");
    $(".hamburguer__bottom-menu").toggleClass("hamburguer__bottom-animate");
  });
});

// PUSH ESC KEY TO EXIT

$(document).keydown(function(e) {
  if (e.keyCode == 27) {
    $(".mobile-nav").fadeOut(500);
    $(".hamburguer__top-menu").removeClass("hamburguer__top-animate");
    $("body").removeClass("noscroll");
    $(".hamburguer__mid-menu").removeClass("hamburguer__mid-animate");
    $(".hamburguer__bottom-menu").removeClass("hamburguer__bottom-animate");
  }
});
