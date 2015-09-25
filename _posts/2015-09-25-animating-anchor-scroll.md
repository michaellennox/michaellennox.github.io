---
layout: posts
title: Animating my site - jQuery scroll to anchor
category: devramble
---

So I want to build a jQuery function to smoothly scroll between anchors on my web page as right now it's kind of offputting when it jumps around all the time.

To take my homepage as an example:

{% highlight html %}

<div class="landing">
    <div class="container">
        <div class="main">
            
            <h1>Hi, I'm Michael</h1>
            <p>and I'm learning to code</p>
            
            <a class="main-btn" href="#secondary">Welcome</a> <!---> this makes it move <--->
            
        </div>
    </div>
</div>

<div class="secondary" id="secondary"> <!---> this is where it moves to <--->
    <div class="container">
        
        <div class="column">
        
            <h2>About Me</h2>
            <p>Fancy finding the out basics? There's a brief bio here, I don't promise anything interesting.</p>
            
            <a class="secondary-btn" href="about/">About</a>
        
        </div>
        
        <div class="column">
        
            <h2>Blog</h2>
            <p>Fancy finding out even more than more? There's some very incoherant ramblings here.</p>
            
            <a class="secondary-btn" href="blog/">Blog</a>
        
        </div>
        
    </div>
</div>

{% endhighlight %}

Whenever I have the button in my landing page pressed, I want it to move to the secondary anchor below the landing. Right now if you click it it jumps immediately.

So first of all I want a function that works when I click the a specifically with an id tag in it instead of a link, I don't want the function triggering when we press a link to somewhere else on the site. For this I can use the attribute contains selector to only select `<a>` tags which have a # in their href attribute.

{% highlight javascript %}
$(document).ready(function () {
    $('a[href*=#]').click(function () {
        // make page scroll to anchor
    });
});
{% endhighlight %}

To make it scroll we'll use `.animate` and `'scrolltop:'`.

{% highlight javascript %}
$(document).ready(function () {
    $('a[href*=#]').click(function () {
        $('html, body').animate(
            {scrolltop: //scroll distance
        }, 600);
    });
});
{% endhighlight %}

Now we need to work out how far we need to scroll. For that we can select the target location with `$($(this).attr('href'))` and calculate how far it is `.offset()` to the top of page.

{% highlight javascript %}
$(document).ready(function () {
    $('a[href*=#]').click(function () {
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 600);
    });
});
{% endhighlight %}

One final thing and we're done. Clicking an a tag causes the browser navigate to the link which we don't want to do now we have a nifty animation. Let's add an event.preventDefault() to stop that when we trigger the function.

{% highlight javascript %}
$(document).ready(function () {
    $('a[href*=#]').click(function (event) {
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 600);
        event.preventDefault();
    });
});
{% endhighlight %}

And now I have a little snippet of jQuery on my site to make the pages scroll smoothly instead of jumping all over the place.