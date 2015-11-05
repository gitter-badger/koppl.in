var Kopplin = {

    colors: [
        ['#D89F87', '#46324A', '#132327', '#0C0207'],
        ['#2b2645', '#182733', '#3b4f5e', '#2c2b31'],
        ['#3f0122', '#270313', '#011e29', '#004e59'],
        ['#4a1b44', '#280325', '#012922', '#005934'],
        ['#1e2639', '#2b2233', '#88354c'],
        ['#3F3F3F', '#5C605D', '#87AD83', '#B1D8B6', '#97D897'],
        ['#645188', '#886451', '#528881', '#000000'],
        ['#1b85b8', '#5a5255', '#ae5a41', '#c3cb71'],
        ['#f29421', '#434292', '#132449'],
        ['#18392b', '#eeeeee']
    ],

    init: function() {
        "use strict";

        console.log("init");

        smoothScroll.init();
        this.insertBackground();
        this.events();

        console.log("fim // init");
    },

    insertBackground: function() {
        "use strict";

        var randomColor = Math.floor(Math.random() * (this.colors.length))
            , randomSize = Math.floor(Math.random() * 60) + 20
            , randomVariance = Math.random()
            , mainHeader = document.querySelector('.main-header')
            , menuWrap = document.querySelector('.menu-wrap')

            , triangle = Trianglify({
                width: window.innerWidth,
                height: window.innerHeight,
                variance: .7,
                cell_size: randomSize,
                x_colors: this.colors[randomColor]
            });

        if ( mainHeader ) mainHeader.setAttribute('style', 'background-image: url(' + triangle.png() + ')');
        if ( menuWrap ) menuWrap.setAttribute('style', 'background-image: url(' + triangle.png() + ')');
    },

    hamburguerActions: function( action ) {
        "use strict";

        var hamburguerOpen = document.querySelector("#hamburguer__open").classList
            , docBody = document.querySelector("body");

        if (action == "open") {
            docBody.classList.add('show-menu');
            hamburguerOpen.remove('fadeIn');
            hamburguerOpen.add('fadeOut');
        } else if (action == "close") {
            docBody.classList.remove('show-menu');
            hamburguerOpen.remove('fadeOut');
            hamburguerOpen.add('fadeIn');
        }
    },

    hamburguerVisibility: function() {
        "use strict";

        var hamburguerOpen = document.querySelector("#hamburguer__open").classList;

        window.addEventListener("scroll", function( event ){
            console.log(document.body.scrollTop);

            if (document.body.scrollTop > 900 && !document.querySelector("body").classList.contains("show-menu")) {
                hamburguerOpen.remove('fadeIn');
                hamburguerOpen.add('fadeOut');
            } else if (!document.querySelector("body").classList.contains("show-menu")) {
                hamburguerOpen.remove('fadeOut');
                hamburguerOpen.add('fadeIn');
            }
        });
    },

    events: function() {
        "use strict";

        console.log("events");

        var hamburguerOpen = document.querySelector("#hamburguer__open")
            , hamburguerClose = document.querySelector("#hamburguer__close");

        if ( hamburguerOpen && hamburguerClose ) {
            hamburguerOpen.addEventListener("click", function() {
                Kopplin.hamburguerActions("open");
            });

            hamburguerClose.addEventListener("click", function() {
                Kopplin.hamburguerActions("close");
            });

            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 27) Kopplin.hamburguerActions("close");
            });

            Kopplin.hamburguerVisibility();
        }

        console.log("fim // events");
    }

};

(function() {
    "use strict";

    Kopplin.init();

})();

// $(document).ready(function() {
//
//     new Clipboard('.clipboard');
//
//     var numberOfPre = $('pre').length;
//
//     if (numberOfPre > 0) {
//         for(var id = 0; id < numberOfPre; id++) {
//             var selectedPre = $('pre')[id];
//
//             html = '';
//             html += '<button class="clipboard" data-clipboard-target="#preId' + id +'"><span class="btn-clipboard icon-paste" alt="copiar"></span></button>';
//             $(selectedPre).attr('id', 'preId' + id).after(html);
//         }
//     }
// });
