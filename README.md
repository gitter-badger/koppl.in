# Sérgio A. Kopplin ~ [koppl.in][sitelink]
[![twitter]][Twitter]
[![travis]][Travis]

Website pessoal onde eu falo da vida e da tecnologia.

## Como funciona?

Esse site usa [Jekyll][jekyll], um gerador de arquivos estáticos baseados em Ruby.

## Primeiros Passos:

1. Instalar [Git][git] e [Ruby][ruby].

2. Assim que tiver tudo instalado, instale também o [Jekyll][jekyll] com o seguinte comando:

    ```sh
    $ gem install jekyll
    ```

3. Agora clone o projeto:

    ```sh
    $ git clone git@github.com:sergiokopplin/koppl.in.git meujekyll
    ```

4. Entre na pasta criada:

    ```sh
    $ cd meujekyll
    ```

5. E por último, o seguinte comando:

    ```sh
    $ jekyll server --watch
    ```

Agora você pode testar seu maravilhoso site em jekyll na url  `localhost:4000`.

## Estrutura de Arquivos

A estrutura básica de arquivos é organizada da seguinte forma:

```
.
|-- _includes
|-- _layouts
|-- _plugins
|-- _posts
|-- _site
|-- assets
|-- _config.yml
`-- ...
```

## TODO

- [ ] melhor descrição da estrutura de arquivos - [#1](../../issues/1)
- [ ] melhor descrição dos outros comandos do jekyll - [#2](../../issues/2)
- [ ] adicionar checker para dependências - [#3](../../issues/3)
- [ ] refatorar SEO - [#4](../../issues/4)

## Problemas?

Abra uma issua caso tenha maiores problemas, ok? Eu ficarei feliz em ajudar :bowtie:

## Créditos

Inspirado por Zeno Rocha, Hugo Bessa, Vitor Britto e William Justen.

## Licença

[MIT][mit] Licença © Sérgio Kopplin

[sitelink]: http://koppl.in
[twitter]: http://i.imgur.com/tXSoThF.png
[travis]: https://travis-ci.org/sergiokopplin/kopplin-website.svg
[jekyll]: http://jekyllrb.com/
[git]: http://git-scm.com/downloads
[ruby]: http://www.ruby-lang.org/pt/downloads/
[mit]: http://kopplin.mit-license.org/
