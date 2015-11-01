(function() {
    "use strict";

    $(".main-header__scroll-down").on('click', function() {
        $('html, body').animate({
            scrollTop: $("#content").offset().top
        }, 1000);
    });

    $(".post-header__scroll-down").on('click', function() {
        $('html, body').animate({
            scrollTop: $("#content").offset().top
        }, 1000);
    });

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

    $('.menu-wrap').attr('style', 'background-image: url(' + triangle.png() + ')');

})();

function togglescroll() {
    $('body').on('touchstart', function(e) {
        if ($('body').hasClass('noscroll')) {
            e.preventDefault();
        }
    });
}

$(document).ready(function() {
    togglescroll();

    $("#hamburguer__open").click(function() {
        $(this).fadeOut('fast');
        $("body").addClass("show-menu");
        $("#hamburguer__close").fadeIn('fast');
    });

    $("#hamburguer__close").click(function() {
        $(this).fadeOut('fast');
        $("body").removeClass("show-menu");
        $("#hamburguer__open").fadeIn('fast');
    });

    new Clipboard('.clipboard');

    var numberOfPre = $('pre').length;

    if (numberOfPre > 0) {
        for(var id = 0; id < numberOfPre; id++) {
            var selectedPre = $('pre')[id];

            html = '';
            html += '<button class="clipboard" data-clipboard-target="#preId' + id +'"><span class="btn-clipboard icon-paste" alt="copiar"></span></button>';
            $(selectedPre).attr('id', 'preId' + id).after(html);
        }
    }
});

// // PUSH ESC KEY TO EXIT
$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        $("#hamburguer__close").fadeOut('fast');
        $("body").removeClass("show-menu");
        $("#hamburguer__open").fadeIn('fast');
    }
});

// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 900 && !$("body").hasClass('show-menu')) {
        $('#hamburguer__open').fadeOut('fast');
    } else if (!$("body").hasClass('show-menu')) {
        $('#hamburguer__open').fadeIn('fast');
    }

});
