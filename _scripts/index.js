var Kopplin = {

    /**
     * init
     * @access public
     * @desc Inícia o JS dentro da página
     * @return {void}
     */
    init: function() {
        "use strict";

        // Função para aplicar background com Trianglify
        this.insertBackground();

        // Chama função com os eventos da página
        this.events();
    },

    /**
     * insertBackground
     * @access public
     * @desc Insere background com a API do Trianglify nos elementos especificados
     * @return {void}
     */
    insertBackground: function() {
        "use strict";

        // Padrões de cores que serão usadas no Trianglify
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
            ['#18392b', '#eeeeee']
        ];

        // Gera as cores, tamanhos e variância a serem aplicados na API do Trianglify
        var randomColor = Math.floor(Math.random() * (colors.length))
        , randomSize = Math.floor(Math.random() * 60) + 20
        , randomVariance = Math.random()

        // Elementos que usarão o background com Trianglify
        , mainHeader = document.querySelector('.main-header')
        , menuWrap = document.querySelector('.menu-wrap')

        // Gera o padrão a ser aplicado
        , triangle = Trianglify({
            width: window.innerWidth,
            height: window.innerHeight,
            variance: .7,
            cell_size: randomSize,
            x_colors: colors[randomColor]
        });

        // Aplica o Trianglify se o elemento existir
        if ( mainHeader ) mainHeader.setAttribute('style', 'background-image: url(' + triangle.png() + ')');
        if ( menuWrap ) menuWrap.setAttribute('style', 'background-image: url(' + triangle.png() + ')');
    },

    /**
     * hamburguerActions
     * @access public
     * @desc Abre e fecha o menu lateral
     * @return {void}
     */
    hamburguerActions: function( action ) {
        "use strict";

        // Seleciona elementos a serem utilizados
        var hamburguerOpen = document.querySelector("#hamburguer__open").classList
            , docBody = document.querySelector("body");

        // Verifica qual ação passada e executa o fechamento ou abertura do menu
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

    /**
     * hamburguerVisibility
     * @access public
     * @desc Trata a visibildade do hamburguer em determinada condição
     * @return {void}
     */
    hamburguerVisibility: function() {
        "use strict";

        // Seleciona as classes do elemento do hamburguer
        var hamburguerOpen = document.querySelector("#hamburguer__open").classList;

        // Verifica se houve scroll na página
        window.addEventListener("scroll", function( event ){

            // Verifica se houve scroll e se existe a classe no elemento para alterar a visibilidade do hamburguer
            if (document.body.scrollTop > 900 && !document.querySelector("body").classList.contains("show-menu")) {
                hamburguerOpen.remove('fadeIn');
                hamburguerOpen.add('fadeOut');
            } else if (!document.querySelector("body").classList.contains("show-menu")) {
                hamburguerOpen.remove('fadeOut');
                hamburguerOpen.add('fadeIn');
            }
        });
    },

    /**
     * clipboards
     * @access public
     * @desc Adiciona os clipboards nos elementos de código da página
     * @return {void}
     */
    clipboards: function() {

        // Cria uma nova instância do clipboard API
        new Clipboard('.clipboard');

        // Seleciona todos os elementos pre na página
        var preEl = document.querySelectorAll("pre")
            , numberOfPre = preEl.length;

        console.log(preEl);
        console.log(numberOfPre);

        // Coloca o clipboard no rodapé de cada elemento encontrado
        if (numberOfPre > 0) {
            for(var id = 0; id < numberOfPre; id++) {
                var selectedPre = document.querySelectorAll('pre')[id];

                // Verifica se o pre não tem números de linhas e adiciona clipboard
                if (!selectedPre.querySelector(".lineno")) {
                    html = '';
                    html += '<button class="clipboard" data-clipboard-target="#preId' + id +'"><span class="btn-clipboard icon-paste" alt="copiar"></span></button>';
                    selectedPre.setAttribute('id', 'preId' + id);
                    selectedPre.insertAdjacentHTML('afterend', html);
                }
            }
        }
    },

    /**
     * events
     * @access public
     * @desc Adiciona os eventos de botão e de scroll ao app
     * @return {void}
     */
    events: function() {
        "use strict";

        // Seleciona elementos a seram utilizados
        var hamburguerOpen = document.querySelector("#hamburguer__open")
            , hamburguerClose = document.querySelector("#hamburguer__close")
            , scrollBtn = document.querySelector("[data-scroll]"),
            preEl = document.querySelector("pre");

        // Verifica se os elementos existem e adiciona eventos de click e keydown na página
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

        // Verifica se existe o botão de scroll e inicia a função
        if (scrollBtn) smoothScroll.init();

        // Verifica se existe elementos pre e inicia o clipboard
        if (preEl) Kopplin.clipboards();
    }
};

(function() {
    "use strict";

    Kopplin.init();
})();
