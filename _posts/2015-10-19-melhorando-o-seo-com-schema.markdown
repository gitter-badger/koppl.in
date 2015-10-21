---
title: "Melhorando o SEO com Schema.org na prática"
layout: post
date: 2015-10-19 14:40
categories: seo
keywords:
- seo
- schema
- schema.org
- structured-data
- meta-data
- semantyc
description: "Melhore o posicionamento e como os robôs entendem o seu site com o Schema.org."
trilha_nome: John Mayer - XO
trilha: https://open.spotify.com/track/7cpCU3Denug5NGZsSpQl8v
img: schema/main.jpg
comments: true
related:
  - title: "Loop Infinito - Microdata"
    url: http://loopinfinito.com.br/2012/05/07/ganhando-visibilidade-com-schema-org
    from: loopinfinito
  - title: Schema.org
    url: http://schema.org
  - title: Getting started
    url: http://schema.org/docs/gs.html
    from: schema.org
  - title: "Google Developers Testing Tool"
    url: https://developers.google.com/structured-data/testing-tool/
    from: googledevelopers

---

SEO é um termo muito utilizado quando tratamos de desenvolvimento WEB, e uma das técnicas que
podem nos ajudar nesse processo é a de identificar corretamente o conteúdo de nosso site
através do Schema.org.

Dentro do [Schema.org][s] você encontra todas as tags necessários e sua documentação,
e depois de aplicá-las você pode testar na ferramenta do Google dedicada para isso,
[Structured Data Testing Tool][g].

Vamos então aplicar tudo isso na prática.

### Listagem de posts.

Na home do site existe a listagem de posts, e o HTML era mais ou menos assim:

{% highlight html %}
<main role="main">
    <article>
        <h2><a href="#">Título do Post</a></h2>
        <section>Resumo do Post</section>

        <footer>
            <span>Nome do Author</span>
            em
            <span>lista, de, categorias</span>

            <time datetime="10-19-2015">19-10-2015</time>
        </footer>
    </article>
</main>
{% endhighlight %}

Nesse código temos o ***main*** que contêm todos os posts listados. Dentro de
cada post temos título (com url), o resumo do post e algumas informações extras
e esse é o segredo do Schema, você precisa identificar os blocos da sua aplicação
e adicionar os atributos certos nos elementos certos para que os motores de buscas
possam indexar seu conteúdo com mais semântica e qualidade.

Um exemplo para melhor entendimento:

![Schema.org Example][img-source]
Fonte: [uk.queryclick.com][img]

Assim como a imagem referencia, nosso conteúdo é uma junção de elementos que
formam uma informação completa, de modo que o robô leitor entende ela como
completo, tendo por exemplo ínicio, meio e fim, ou ainda melhor, título, conteúdo e autor por exemplo.

Olhemos outro exemplo:

![Resultados de pesquisa no Google][img-2-source]
Fonte: [Resultados do Google][img-2]

Essa listagem de resultados do Google nos mostra que os dados retornador são ricos
de informação e utilizam as tags adequadas para marcar o conteúdo. Assim como
mostrado na imagem, as receitas tem título, imagem, avaliação, duração do preparo e etc.

E é assim que vamos retornar ao nosso código e aplicar as tags adequadas no nosso conteúdo.

{% highlight html %}
<main role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/Blog">
    <article role="article" itemscope="itemscope" itemtype="http://schema.org/BlogPosting" itemprop="blogPost">
        <h2 itemprop="headline"><a href="#" itemprop="url">Título do Post</a></h2>
        <section itemprop="description">Resumo do Post</section>

        <footer>
            <span itemprop="author">Nome do Author</span>
            em
            <span itemprop="keywords">lista, de, categorias</span>

            <time datetime="10-19-2015" itemprop="datePublished" content="10-19-2015">19-10-2015</time>
        </footer>
    </article>
</main>
{% endhighlight %}

Primeiro precisamos dividir as nossas tags em 3 partes, sendo elas itemtype, itemscope
e itemprop. Cada uma delas tem um sentido diferente e sinaliza para o robô como ele
deve ler esse conteúdo e como deve ser a separação do mesmo. **Itemtype** referencia
ao tipo de objeto que será recebido e **Itemscope** adiciona uma flag de identificação,
logo o a varredura será realizada dentro dessa tag. E por último o **Itemprop** que nos
mostra o tipo do dado referenciado, podendo ser uma descrição, nome de autor, título, etc.

Logo, dentro do nosso exemplo colocamos a flag que identifica que é um post de blog.

{% highlight html %}
<main role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/Blog">
{% endhighlight %}

Logo em seguida identificamos o artigo em sí:

{% highlight html %}
<article role="article" itemscope="itemscope" itemtype="http://schema.org/BlogPosting" itemprop="blogPost">
{% endhighlight %}

E pra finalizar adicionamos as tags necessários nos itens restantes.

{% highlight html %}
<h2 itemprop="headline"><a href="#" itemprop="url">Título do Post</a></h2>
<section itemprop="description">Resumo do Post</section>
<footer>
    <span itemprop="author">Nome do Author</span>
    em
    <span itemprop="keywords">lista, de, categorias</span>

    <time datetime="10-19-2015" itemprop="datePublished" content="10-19-2015">19-10-2015</time>
</footer>
{% endhighlight %}

Nesse momento o nosso código pode ser testado na ferramenta do Google, ficando assim:

![Google Structured Data Testing Tool][img-3-source]
Fonte: [Google Structured Data Testing Tool][img-3]

Note que o Google evidenciou uma tag que faltou, você pode agora adicioná-la no nosso exemplo pra ficar com tudo redondinho. :smile:

{% highlight html %}
<img src="url-da-imagem.jpg" alt="Imagem de exemplo" itemprop="image" />
{% endhighlight %}

Essa foi a implementação dentro das tags, mas você também pode implementar a mesma técnica através de um dado em formato JSON.
Para isso precisamos adicionar uma tag no head da página e adicionar as tags, como no exemplo a seguir:

{% highlight javascript %}
<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    "headline": "{{ page.title }}",
    "url": "{{ site.url }}{{ page.url }}",
    "keywords": "{% for keyword in page.keywords %}{% if forloop.last == false %}{{ keyword }},{% else %}{{ keyword }}{% endif %}{% endfor %}",
    "image": "{{ site.url }}/assets/images/{{ page.img }}",
    "thumbnailUrl": "{{ site.url }}/assets/images/{{ page.img }}",
    "datePublished": "{{ page.date }}",
    "description": "{{ page.description }}",
    "publisher": "{{ site.name }}",
    "interactionCount": "{{ site.url }}{{ page.url }}#disqus_thread",
    "author": {
        "@type": "Person",
        "name": "{{ site.name }}",
        "image": "{{ site.url }}{{ site.picture }}",
        "url": "{{ site.url }}/sobre/"
    }
}
</script>
{% endhighlight %}

Acabei por implementar essa última versão nesse site pois achei que centralizaria esse tipo de código em um único lugar.
Você pode checar o resultado final [aqui][resultado].

#### Referências:
- [Loop Infinito][l]
- [Schema.org][s]
- [Google Developers Testing Tool][img-3]
- [QueryClick][img]

[s]: http://schema.org
[g]: https://developers.google.com/structured-data/testing-tool/
[l]: http://loopinfinito.com.br/2012/05/07/ganhando-visibilidade-com-schema-org/
[img]: http://uk.queryclick.com/seo-news/schemaorg-what-does-it-mean/
[img-source]: /assets/images/schema/schema.jpg
[img-2]: http://google.com.br
[img-2-source]: /assets/images/schema/receitas.png
[img-3]: https://developers.google.com/structured-data/testing-tool/
[img-3-source]: /assets/images/schema/google-test.png
[resultado]: https://github.com/sergiokopplin/kopplin-website/blob/gh-pages/_layouts/default.html
