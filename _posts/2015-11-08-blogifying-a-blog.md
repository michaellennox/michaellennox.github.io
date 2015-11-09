---
layout: posts
title: Blogifying my Blog - Incoporating an Index on Posts with Jekyll
category: devramble
---

So at the moment my blog is effectively set up as a bunch of individual posts but there is very little way to move between each individual post. You have to go back to the main blog index if you fancy reading something else, not ideal.

Thus, my mini-project this weekend is to blogify my blog and introduce some interconnectivity to my posts.

This is currently my template for each blog post.

{%highlight html %}{%raw%}
---
layout: default
---

{% include nav.html %}

<article class="container">
        
    <div class="col-md-8 col-md-offset-2 col-xs-12">
        
        <h1>{{ page.title }}</h1>
        <h3>{{ page.date | date: '%d %B, %Y'}}</h3>
        
        {{ content }}
        
        <p>Well thanks for coming. I'm sure there will be more soon. In the mean time why don't you <a href="mailto:hello@michaellennox.me">get in touch</a> or <a href="http://www.michaellennox.me/feed.xml">subscribe to my feed</a>?</p>

    </div>
    
</article>
{%endraw%}{% endhighlight %}

Now what I want to do is offset that further to the left and incorporate an indexing system on the right hand side of the screen, so if you're reading my devrambles you will also get a nice list of more devrambles down the right, if you're reading my ramblerambles then you will get a nice list of more ramblerambles down the right. In the immediacy I won't be doing much more than this and it will only display on desktops but a future project will likely incorporate some javascript to let you change between topics / add additional functionality to small devices etc.

So what I'm going to do to generate my unique index is modify my base posts template:

{% highlight html %}{% raw %}
---
layout: page
title: Blog
---
<main class="container">
    
    <article class="blog-topic col-md-6 col-sm-12">

        <h2>Ramblings about development</h2>
        <ul>
            {% for post in site.categories.devramble %}
            <li>
                <a href="{{ post.url }}">{{ post.title }}</a>
                <p>{{ post.date | date: '%d %B, %Y' }}</p>
            </li>
            {% endfor %}
        </ul>

    </article>

    <article class="blog-topic col-md-6 col-sm-12">

        <h2>Ramblings about life, the universe and everything</h2>
        <ul>
            {% for post in site.categories.rambleramble %}
            <li>
                <a href="{{ post.url }}">{{ post.title }}</a>
                <p>{{ post.date | date: '%d %B, %Y' }}</p>
            </li>
            {% endfor %}
        </ul>

    </article>
  
</main>
{% endraw %}{% endhighlight %}

Let's grab a single template and now create a new container for it, make it relatively small and hide it for xs and sm devices. I also want it to just evaluate whether or not the current page is a devramble or a rambleramble and then only show the related topic, some simple logic with liquid should do this. I've also given it the `position:fixed` class so it scrolls with the page.

{% highlight html %}{% raw %}
<article class="blog-sidebar col-md-3 col-md-offset-7 hidden-xs hidden-sm" style="position: fixed">

    <h3>Further ramblings</h3>
    <ul>
        {% if page.category == 'devramble' %}
            {% for post in site.categories.devramble %}
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
            <p>{{ post.date | date: '%d %B, %Y' }}</p>
        </li>
        {% endfor %}
        {% else %}
            {% for post in site.categories.rambleramble %}
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
            <p>{{ post.date | date: '%d %B, %Y' }}</p>
        </li>
        {% endfor %}
        {% endif %}
    </ul>

    </article>
{% endraw %}{% endhighlight %}

Now I've added this as an element into my posts.html _layouts, moved my current article to the left of the screen instead of being central and voila, we're away!