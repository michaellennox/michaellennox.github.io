---
layout: posts
title: My First Makers Project - Motivational Posters!
category: devramble
tag: makers
---

So it's time for the first Maker's project: [Motivational Posters!](https://github.com/michaellennox/build-a-website)

The end result is visible on [heroku](http://posters.michaellennox.me/) and the repository is available on [github](https://github.com/michaellennox/motivational-posters).

As a headline - crash course in basic HTML, CSS and JS. Nothing fancy, just get a site up and running using Sinatra as a framework and then deploy to Heroku. Having not used Heroku or Sinatra before it was great to get a quick jump in - the basics were actually remarkably simple and having now done this small project I'm pretty certain I could get any (very) small application up and running with Sinatra without much trouble, I probably shouldn't have seen web frameworks as quite so daunting!

So I trundled my way through the guide linked above, it's fairly simple and reminded me a lot of GA's html/css/js introductory course [dash](https://dash.generalassemb.ly/) (it's free and pretty good, give it a try). Probably a bit too much hand holding for my liking but at the same time if there was someone on the course who hadn't touched any front end languages before I imagine they might find it a bit more challenging.

At the end of it though I was left with this:

<img src="{{site.baseurl}}/images/blog-images/2015-11-18-ugh-thats-ugly.png" alt="ugly site" width="600px">

Well that's not very attractive, honestly it looks like the sort of [site my dad could've built](http://www.chrislennox.co.uk/) and he learnt development in the 60s!

So for a bit more fun - let's go around remaking this into something slightly less ugly. I'm going to try and split the page into 4 sections, each of these will be 100vh and thus fill the screen, have a bit of an interesting background and have an icon which moves you between them after you complete each section. Shouldn't be anything hugely complex, a bit of CSS tinkering, a few animations from external libraries and some basic jQuery scrolls.

First off let's style and structure that `<header>` element in such a way that doesn't leave you a sad sad panda.

{% highlight html %}
<header>
  <div class="center-wrapper">
    <h1><strong>Motivational Posters</strong> By Michael</h1>
    <a href="#select-image" class="scroller"><img src="/images/chevron.png" alt="onwards-icon"></a>
  </div>
</header>
{% endhighlight %}

{% highlight css %}
header {
  padding: 15px;
  background-color: #6534ff;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.center-wrapper {
  max-width: 600px;
  margin: 0 auto;
  align-self: center;
}

header h1 {
  text-transform: uppercase;
  color: #62bcfa;
}

header strong {
  font-size: 2em;
  color: #fccdd3;
}
{% endhighlight %}

The styling `header {display: flex; justify-content: center;} .center-wrapper {align-self: center;}` was a new trick I hadn't ever seen before, I picked this one up from [this stack overflow answer](http://stackoverflow.com/questions/6490252/vertically-centering-a-div-inside-another-div). Seems a very nice way to handle the vertical alignment of the elements without having to play around with all the fiddly things.

This makes my landing page look thus:

<img src="{{site.baseurl}}/images/blog-images/2015-11-18-better-front.png" alt="pretty front" width="600px">

Now apply similar ideas to all other sections on my page.

{% highlight html %}
<section id="select-image">
  <div class="center-wrapper">
    <h2>Step 1. Select an image</h2>
    <p>Enter the keyword to search for images</p>
    <form id="search-form">
      <input id="search-term" type="text">
      <input id="submit-search" type="submit" value="Go!">
    </form>
    <div id="search-results"></div>
    <div id="google-branding"></div>
  </div>
</section>

<section id="add-text">
  <div class="center-wrapper">
    <h2>Step 2. Add text</h2>
    <div><input id="caption-text" type="text" value="Curiosity is one of the great secrets of happiness"></div>
    <a href="#style-caption" class="scroller"><img src="/images/chevron.png" alt="onwards-icon"></a>
  </div>
</section>

<section id="style-caption">
  <div class="center-wrapper">
    <h2>Step 3. Style it!</h2>
    <div id="workspace">
      <p id="caption"></p>
    </div>
    <div id="caption-controls">
      Left: <input type="number" value="10" id="caption-left">
      Top: <input type="number" value="10" id="caption-top">
      Width: <input type="number" value="400" id="caption-width">
      Size: <input type="number" value="32" id="caption-size">
      Colour: <select id="caption-colour">
        <!-- Options are here, removed so it's not so long -->
      </select>
      Align: <select id="caption-align">
        <!-- Options are here, removed so it's not so long -->
      </select>
      Font: <select id="caption-font">
        <!-- Options are here, removed so it's not so long -->
      </select>
    </div>
    <div id="twitter">
      <a href="https://twitter.com/share" class="twitter-share-button" data-via="michaelctlennox">Tweet</a>
      <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
    </div>
    <a href="#footer" class="scroller"><img src="/images/chevron.png" alt="onwards-icon"></a>
  </div>

</section>
{% endhighlight %}

and the CSS

{% highlight css %}
section {
  height: 50vh;
  display: flex;
  justify-content: center;
}

#select-image {
  background-color: #62bcfa;
  padding: 10px;
  box-shadow: 1px 0 3px rgba(0,0,0, 0.3);
}

#add-text {
  background-color: #6534ff;
  padding: 10px;
  align-self: center;
}

#caption-text {
  width: 600px;
  text-align: center;
}

input {
  font-size: 16px;
  margin-bottom: 20px;
}

#style-caption {
  height: 100vh;
  background-color: rgba(255,255,255, 0.7);
  padding: 10px;
  box-shadow: 1px 0 3px rgba(0,0,0, 0.3);
}

#caption-controls {
  padding: 10px;
  font-size: 14px;
}

#caption-controls input[type="number"] {
  width: 50px;
}

#caption {
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: bold;
  font-family: Helvetica;
  text-shadow: 0 0 5px rgba(0,0,0,0.4);
  width: 400px;
  font-size: 32px;
  color: red;
  margin: 0;
}

#workspace {
  position: relative;
  width: 600px;
  min-height: 300px;
  border: 5px dashed red;
  margin: 0 auto;
}

#workspace img {
  width: 600px;
}
{% endhighlight %}

This left me with the basic styling as in the end product you can see above. Next was to add some animations, first I incorporated a set of CSS animations from the [animate.css](https://daneden.github.io/animate.css/) library and used [wow.js](http://mynameismatthieu.com/WOW/) to activate the animations. For the 2nd "page" of the site I didn't want the second segment asking for words to appear until you'd selected the image you wanted. I did this by modifying the jQuery code block:

{% highlight javascript %}
$(document).on('click', '#search-results img', function() {
  var url = $(this).data('url');
  $("#workspace img").remove();
  $(".activeimg").removeClass('activeimg');
  var img = $("<img>").attr('src', url);
  $(this).addClass('activeimg');
  $('#workspace').append(img);
  $('.hide').addClass('animated bounceInUp').removeClass('hide');
})
{% endhighlight %}

I also applied a thin pink border to the selected image with the active image class `.activeimg {border: 2px solid #fccdd3;}`.

There's a few final things I'm considering doing:

* The input fields and buttons aren't very nicely styled right now, they could do with some formatting
* The backgrounds on each "page" are rather bland, but then again I'm really bad at thinking about how to design stuff

But this pretty much wrapped up the project for now, the end result is visible on [heroku](http://posters.michaellennox.me/) and the repository is available on [github](https://github.com/michaellennox/motivational-posters).
