---
title: "Markdown Without Images"
layout: post
date: 2020-10-19 14:40
tags: markdown
keywords:
- markdown
description: "Markdown Test!"
---

# An exhibit of Markdown

---

## Summary:

You can pick as item to sse how to apply in markdown.

### Comum Elements
- [Basic formatting](#basic-formatting)
- [Headings](#headings)
- [Lists](#lists)
- [Paragraph Modifiers](#paragraph-modifiers)
- [Tables](#tables)
- [Urls](#urls)
- [Horizontal Rule](#horizontal-rule)
- [Images](#images)

### Especial Elements
- [Evidence](#evidence)
- [Clipboard](#clipboard)
- [Star](#star)

---

## Basic formatting

This note **demonstrates** some of what [Markdown][1] is *capable of doing*.

---

## Headings

There are six levels of headings. They correspond with the six levels of HTML headings. You've probably noticed them already in the page. Each level down uses one more hash character.

# Headings can be small

### Headings can be small

##### Headings can be small

{% highlight raw %}
# Heading
### Heading
##### Heading
{% endhighlight %}

---

## Lists

### Ordered list

1. Item 1
2. A second item
3. Number 3

{% highlight raw %}
1. Item 1
2. A second item
3. Number 3
{% endhighlight %}

### Unordered list

* An item
* Another item
* Yet another item
* And there's more...

{% highlight raw %}
* An item
* Another item
* Yet another item
* And there's more...
{% endhighlight %}

---

## Paragraph modifiers

### Quote

> Here is a quote. What this is should be self explanatory. Quotes are automatically indented when they are used.

{% highlight raw %}
> Here is a quote. What this is should be self explanatory.
{% endhighlight raw %}

---

## Tables

You can make tables too. Great!

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

{% highlight raw %}
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
{% endhighlight %}

---

## URLs

URLs can be made in a handful of ways:

* A named link to [MarkItDown][3].
* Another named link to [MarkItDown](http://markitdown.net/)
* Sometimes you just want a URL like <http://markitdown.net/>.

{% highlight raw %}
* A named link to [MarkItDown][3].
* Another named link to [MarkItDown](http://markitdown.net/)
* Sometimes you just want a URL like <http://markitdown.net/>.
{% endhighlight %}

---

## Horizontal rule

A horizontal rule is a line that goes across the middle of the page.
It's sometimes handy for breaking things up.

{% highlight raw %}
---
{% endhighlight %}

---

## Images

Markdown can also contain images. I'll need to add something here sometime.

![Markdowm Image][6]

{% highlight raw %}
![Markdowm Image][http://kune.fr/wp-content/uploads/2013/10/ghost-blog.jpg]
{% endhighlight %}

... with description

![Markdowm Image][6]{: .img-smaller}
<span class="img-description-small">Legenda da imagem</span>

{% highlight raw %}
![Markdowm Image][http://kune.fr/wp-content/uploads/2013/10/ghost-blog.jpg]{: .img-smaller}
<span class="img-description-small">Legenda da imagem</span>
{% endhighlight %}

Or you can add bigger images. BIGGER!

![Alt text][6]{: .img-bigger}
<span class="img-description">Legenda da imagem</span>

{% highlight raw %}
![Alt text][6]{: .img-bigger}
<span class="img-description">Legenda da imagem</span>
{% endhighlight %}

---

## Evidence

You can try the evidence!

<span class="evidence">Paragraphs can be written like so. A paragraph is the basic block of Markdown. A paragraph is what text will turn into when there is no reason it should become anything else.</span>

{% highlight html %}
<span class="evidence">Paragraphs can be written like so. A paragraph is the basic block of Markdown. A paragraph is what text will turn into when there is no reason it should become anything else.</span>
{% endhighlight %}

---

## Clipboard

The Clipboard is automatic to code/pre components. :)

{% highlight raw %}
Are you seeing? Awesome. Just look to the right.
{% endhighlight %}

---

## Star

You can star a post.

Just add the tag to the markdown file.

{% highlight raw %}
star: true
{% endhighlight %}

---

## Side Images


You can add a image in side of a text.

<div class="side-by-side">
<img src="http://www.online-image-editor.com//styles/2014/images/example_image.png" />
Paragraphs can be written like so. A paragraph is the basic block of Markdown. A paragraph is what text will turn into when there is no reason it should become anything else.
</div><div class="clearfix"></div>

{% highlight html %}
<div class="side-by-side">
    <img src="http://www.online-image-editor.com//styles/2014/images/example_image.png" />
    Paragraphs can be written like so. A paragraph is the basic block of Markdown. A paragraph is what text will turn into when there is no reason it should become anything else.
</div>
<div class="clearfix"></div>
{% endhighlight %}


[1]: http://daringfireball.net/projects/markdown/
[2]: http://www.fileformat.info/info/unicode/char/2163/index.htm
[3]: http://www.markitdown.net/
[4]: http://daringfireball.net/projects/markdown/basics
[5]: http://daringfireball.net/projects/markdown/syntax
[6]: http://kune.fr/wp-content/uploads/2013/10/ghost-blog.jpg
