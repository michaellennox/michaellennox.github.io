---
layout: posts
title: Building a blog index with Jekyll and Liquid Templating
category: devramble
---

So a vaguely relevant post as I convert my blog index from the basic jekyll format:

<img src="{{site.baseurl}}/images/blog-images/2015-09-22-ugly-blog.png" alt="ugly blog" width="980px">

To a slightly more pleasing design with two columns:

<img src="{{site.baseurl}}/images/blog-images/2015-09-22-pretty-blog.png" alt="pretty blog" width="980px">

This post is a brief run-down of how I did it, it's also letting me practice markdown syntax for imgs & code fragments.

So jekyll's documentation gives you the basic framework for building a blog index but it's not very pretty.

{% highlight html %}{% raw %}
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
{% endraw%}{% endhighlight %}

This can be incorporated anywhere in the site and will bring up a basic blog index. 

I decided I wanted a completely seperate section for my blog index to my main content and used YAML/Liquid to generate the page using two _layout files (default.html and page.html) and an index.html file in my /blog/ directory. The index.html uses the page.html file as it's layout and the page.html file uses default.html as it's layout.

This looks like the following when jekyll combines the layouts:

{% highlight html %}{% raw %}
<!DOCTYPE html>
<html>

    {% include head.html %}
    
    <body>
    
        <!---> default.html {{content}}s<--->
        
        {% include nav.html %}
        
        <!---> page.html {{content}}s<--->
        
        <ul>
            {% for post in site.posts %}
                <li>
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </li>
            {% endfor %}
        </ul>
        
        <!---> end of page.html {{content}}s<--->
        <!---> end of default.html {{content}}s<--->
        
        {% include footer.html %}
		
    </body>
    
</html>
{% endraw %}{% endhighlight %}

From here on in I'll just be including code snippets of the actual blog index (the section that falls between page.html's {% raw %} {{content}} {% endraw %} tags).

If you want to see the contents of footer.html, nav.html and head.html this repo is available at: [https://github.com/michaellennox/michaellennox.github.io](https://github.com/michaellennox/michaellennox.github.io). I doubt those sections have changed much since writing this post but they're not particularly relevant for the contents of this post.

As I decided I wanted to make a two column layout seperating ramblings about development (like this post) from completely moronic ramblings about my life (which honestly, you probably don't want to bother reading) I just grabbed two classes I already used in other sections of this site - `.container` which limits my page widths and `.column` which creates my two equal width columns floating in the container (note: this layout doesn't work great on mobile, I'll/you'll need to add a media-query to turn each `.column` from 50% container width to 100% container width so they stack on top of each other for small screens).

{% highlight css %}
.container {
    max-width: 980px;
    margin: 0 auto;
    padding: 0 10px;
}

.b-column {
    float: left;
    width: 50%;
    text-align: center;
}
{% endhighlight %}

Go back to modifying the index by wrapping in these classes and add a header about my rambling to each. Two seperate columns defined:

{% highlight html %}{% raw %}
<div class="blog-wrapper">
    <div class="container">
    
        <div class="b-column">
            <h2>Ramblings about development</h2>
            <ul>
                {% for post in site.posts %}
                <li>
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </li>
                {% endfor %}
            </ul>
        
        </div>
    
        <div class="b-column">
            <h2>Ramblings about life, the universe and everything</h2>
            <ul>
                {% for post in site.posts %}
                <li>
                    <a href="{{ post.url }}">{{ post.title }</a>
                </li>
                {% endfor %}
            </ul>
    
        </div>
    
    </div>
</div>
{% endraw %}{% endhighlight %}

This isn't quite what I want though as it puts every blog post in both lists, I want to be able to seperate my different blog posts into each category so I'm now going to take advantage of the `category` liquid variable and seperate my posts by category incorporating it into the YAML front-matter for each of my blog posts.

For development ramblings my YAML front-matter now looks like this:

{% highlight html %}
---
layout: posts
title: post-title
category: devramble
---
{% endhighlight %}

For other ramblings it looks like this:

{% highlight html %}
---
layout: posts
title: post-title
category: rambleramble
---
{% endhighlight %}

There's a lot of other global variables you can use for other purposes - have a look at the docs for a few quick others: [http://jekyllrb.com/docs/frontmatter/](http://jekyllrb.com/docs/frontmatter/).

Now we know that all my ramblings about nothing will have `category: rambleramble` and my ramblings about development related stuff will have `category: devramble` we can go back to html and create new templates to use these instead of finding the posts layout.

{% highlight html %}{% raw %}
<div class="blog-wrapper">
    <div class="container">
    
        <div class="b-column">
            
            <h2>Ramblings about development</h2>
            <ul>
                {% for post in site.categories.devramble %}
                <li>
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </li>
                {% endfor %}
            </ul>
        
        </div>
    
        <div class="b-column">
            
            <h2>Ramblings about life, the universe and everything</h2>
            <ul>
                {% for post in site.categories.rambleramble %}
                <li>
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </li>
                {% endfor %}
            </ul>
    
        </div>
    
    </div>
</div>
{% endraw %}{% endhighlight %}

Utilising `site.categories.CATEGORY` will search our site for all YAML with a category defined as above, we can then specifically target which category we want in our forloop by replacing `CATEGORY` with the name of the category we want to be used in the loop. Similar ideas can be used for tags in YAML if you have a more complex blog or want a more in-depth indexing.

We have now built our basic HTML structure for the index, now I want to add the date for each post under the title. This is fairly simple, in the for loop we just add a `post.date` liquid tag to each forloop.

{% highlight html %}{% raw %}
<h2>Ramblings about development</h2>
<ul>
    {% for post in site.categories.devramble %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <p>{{ post.date | date: '%d %B, %Y' }}</p>
    </li>
    {% endfor %}
</ul>
{% endraw %}{% endhighlight %}

It's important to use Liquid's `date:` filter or else your date will look like the picture at the top (ie ugly as sin). Here I've formatted it to show shorthand-day month, year. For the full list of possible formats look at the documentation: [https://docs.shopify.com/themes/liquid-documentation/filters/additional-filters#date](https://docs.shopify.com/themes/liquid-documentation/filters/additional-filters#date).

Now as far as I'm concerned my HTML is complete! (for now). So onwards to the CSS and the styling, there's nothing *different* here, it's just standard css like you'd use on any other page. *One thing to note*: Because both my column lists are using the `float:` CSS attribute they won't affect the height of my wrapper or container and as such will run into my footer. I'll fix this by adding `overflow: auto` to my wrapper.

{% highlight css %}
.blog-wrapper {
    padding-top: 40px;
    overflow: auto;
}

.b-column {
    float: left;
    width: 50%;
    text-align: center;
}

.b-column h2 {
    font-size: 28px;
    min-height: 62px;
}

.b-column li {
    margin-bottom: 10px;
    list-style: none;
}

.b-column a {
    text-decoration: none;
    color: #000;
    margin-bottom: 2px;
    font-size: 18px;
}

.b-column a:hover {
    color: #d9411e;
}

.b-column p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #ffd452;
}
{% endhighlight %}

That's the end of this blog post, I hope it's been helpful if you're trying to get ideas on formatting blog indexes with Jekyll and Liquid.