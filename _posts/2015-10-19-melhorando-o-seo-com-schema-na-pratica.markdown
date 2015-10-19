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
description: "Description"
trilha_nome: Birdy - Wings
trilha: http://play.spotify.com/album/6rgoVsDl432kAvqmGfrwZp
img: carmesim/carmesim.png

---

Melhore o posicionamento e como os robôs entendem o seu site com o Schema.org

<!-- more -->

Tinha uma tarefa no meu **backlog** para isso. Passei a olhar algumas referências e cá estou depois de ter refeito essa parte desse site.

Confesso que não achei complicado e nem difícil de implementar, até porquê o material existente sobre isso é amplo e os testes são feitos com muita simplicidade.

Dentro do [Schema.org][s] você encontra todas as tags necessários e sua documentação (**confesso que achei um pouco raso demais**), e depois de aplicá-las você pode testar na ferramenta do Google dedicada para isso, [Structured Data Testing Tool][g].

Aplicar no meu site foi bem simples, e foi dividido em 3 partes.

### Listagem de posts.

Na home do site existe a listagem de posts, e o HTML era mais ou menos assim:

{% highlight html %}
<main role="main">
  <article role="article">
    <h2><a href="#">Título do Post</a></h2>

    <section class="post-excerpt">Resumo do Post</section>

    <footer class="post-meta">
      <span>Nome do Author</span>
        em
        lista, de, categorias

      <time class="post-date" datetime="10-19-2015">10-19-2015</time>
    </footer>
  </article>
</main>
{% endhighlight %}

#### Referências:
- Loop Infinito

[s]: http://schema.org
[g]: https://developers.google.com/structured-data/testing-tool/
[l]: http://loopinfinito.com.br/2012/05/07/ganhando-visibilidade-com-schema-org/
