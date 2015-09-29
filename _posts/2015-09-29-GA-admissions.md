---
layout: posts
title: GA Admission Site
category: devramble
---

So for this project I had to write a basic website for my GA admissions process. I decided beforehand I wanted to practice a few things which I haven't yet done in a project, in particular:

- Use a front-end framework. This will be the first project I nab one on and I'm going with bootstrap.
- Build a set of jQuery animations chained together to animate all visible content on page load (scrapped this, just decided to throw lots of CSS animations in)
- Start using some CSS3 animations to make things happen with a bit more *va-va-voom*.

This blog post is likely to be a very long one and I'm going to be going through pretty much everything I did step by step. Will anyone ever find such a long and boring ramble useful? Who knows.

So first of all, sketch my design, work out animation order & general structure (as you'll probably notice though, the landing structure changes about halfway through).

Now time to go learn bootstrap!

Bootstrap resources:

- [CodeSchool (a pretty solid course)](https://www.codeschool.com/courses/blasting-off-with-bootstrap)
- [The Docs (well duh)](http://getbootstrap.com/getting-started/)
- [CodeAcademy (a fairly short intro)](https://www.codecademy.com/en/skills/make-a-website/topics/bootstrap-components)
- [W3 Schools (awesome as always)](http://www.w3schools.com/bootstrap/default.asp)

I'm only planning to integrate the basics, but it should make the styling of the page much faster, more consistant and improve my control over layout.

A few hours later, I know the basics of bootstrap, let's build my basic HTML doc structure and incorporate Bootstrap, jQuery and my own css/JS assets.

{% highlight html %}


<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>Michael Lennox | General Assembly Application</title>
    
    <!-- Bootstrap from CDN -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <!-- Font -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
    <!-- My CSS -->
    <link rel="stylesheet" href="css/main.css">
    <!-- CSS for pygments highlighting -->
    <link rel="stylesheet" href="css/pygments-styling.css">

</head>

<body>

    <header>
        <!-- Set of jQuery functions will slowly bring all the <header> in on load -->
        
        <h1>Hi,</h1>
        
        <div class="flipper">
            <div class="flip-card">
                <img src="#" class="flip-front"> <!-- GA logo -->
                <img src="#" class="flip-back"> <!-- My pretty face -->
            </div>
        </div>
    
        <h1>I'm Michael</h1>
        <h2>and this is my application to General Assembly</h2>
        
        <nav>
        
        <button>Building This</button>
        <button>About Me</button>
        <button>Contact Me</button>
        
        </nav>
        
    </header>
    
    <div class="building">
    
    <!-- Content on how I built this goes here, hidden on load -->
        
    </div>
    
    <div class="about">
    
    <!-- Here's my about me, I may have just grabbed what I wrote on my blog.... Hidden on load -->
    
    </div>
    
    <div class="contact">
    
    <!-- Oh look, my email, number and link to my site! You guessed it, this is hidden on load too! -->
        
    </div>
    
    <!--jQuery from CDN-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!--Javascript for bootstrap from CDN-->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <!--My JavaScript-->
    <script src="javascript/site.js"></script>
    
</body>
    
    
{% endhighlight %}

Now it's time for me to add the bootstrap grids, typography and buttons to create the basic formatting as per my design.

{% highlight html %}

<div class="container">
            
        <div class="row text-center">
            <div class="col-sm-8 col-sm-offset-2 col-xs-12">

                <h1>Hi</h1>

                <div class="flipper">
                    <div class="flip-card">
                        <img class="flip-front" src="images/GA-logo.png" alt="GA-logo"> <!-- GA logo -->
                        <img class="flip-back" src="images/GA-face.png" alt="My-face"> <!-- My pretty face -->
                    </div>
                </div>

                <h1>I'm Michael<br><small>and this is my application to the join the WDI Cohort for November 2015</small></h1>

            </div>
        </div>

        <div class="row text-center features">

            <div class="col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                <div class="well">
                    <i class="glyphicon glyphicon-home"></i>
                    <h3>About Me<br><small>Here's a short bio about myself. Please forgive my complete inability to write about anything interesting.</small></h3>
                    <button type="button" class="btn btn-info">About</button>
                </div>
            </div>

            <div class="col-sm-4 col-xs-6">
                <div class="well">
                    <i class="glyphicon glyphicon-pencil"></i>
                    <h3>Building This Site<br><small>There's a quite long blog post on how I assembled this site if you're interested.</small></h3>
                    <button type="button" class="btn btn-info">Building</button>
                </div>
            </div>

            <div class="col-sm-4 col-xs-6">
                <div class="well">
                    <i class="glyphicon glyphicon-envelope"></i>
                    <h3>Contact Me<br><small>Feel free to get in touch, my details are inside!</small></h3>
                    <button type="button" class="btn btn-info">Contact</button>
                </div>
            </div>

        </div>
        
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                
                <div class="building well">

                <!-- Content on how I built this goes here, hidden on load -->
                    
                </div>

                <div class="about well">

                <!-- Here's my about me, I may have just grabbed what I wrote on my blog.... Hidden on load -->
                    
                </div>

                <div class="contact well">

                <!-- Oh look, my email, number and link to my site! You guessed it, this is hidden on load too! -->

                </div>
                
            </div>
        </div>
        
    </div>
    
{% endhighlight %}

The set up works for mobile, tablet and normal screens right now. I'll have a peak at it on the 1440p monitor later to see whether or not it may need some additional formatting for very large ones.

So that's the basic framework for my site complete and I must say it took a hell of a lot less time to get running than me writing my own CSS to build each grid element, not to mention that it looks like it functions much better at smaller screen sizes than I could likely do myself.

Now it's time to start making interesting things happen! So first of all, let's make the GA icon a CSS flipper to turn into my head. I want this segment to do start as on GA, it get's flipped in initialization and then also you can flip it back manually by clicking. Most of the inspiration for this comes from [David DeSandro's fantastic intro to 3D CSS animations](https://desandro.github.io/3dtransforms/)

The HTML structure I've already written out:

{% highlight html %}
<div class="flipper">
    <div class="flip-card">
        <img class="flip-front" src="images/GA-logo.png" alt="GA-logo"> <!-- GA logo -->
        <img class="flip-back" src="images/GA-face.png" alt="My-face"> <!-- My pretty face -->
    </div>
</div>
{% endhighlight %}

Should be good to go. Now let's add some CSS styling to this:

{% highlight css %}
.flipper { 
    width: 225px;
    height: 225px; /* 225x225 should work nicely on all displays */
    position: relative;
    perspective: 1000px; /* this gives it the 3d space */
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    margin: 0 auto; /* center it */
}

.flip-card {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d; /* pass .flipper's 3d space onwards to .flip-card's children */
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transition: transform 1s; /* how long the animation takes */
    -webkit-transition: transform 1s;
    -moz-transition: transform 1s;
    -o-transition: transform 1s;
}

.flip-card img {
    margin: 0;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
}

.flip-back {
    transform: rotateY(180deg); /* starts out hidden */
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
}

.flip-card.flipped {
    transform: rotateY( 180deg ); /* will rotate the card around the Y axis when .flip card gets the .flipped class assigned via JS */
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
}

{% endhighlight %}

When the document loads the card will appear as the GA logo, then as part of the loading animations it will be assigned .flipped. I also want people to be able to flip it themselves with a simple click:

{% highlight javascript %}
$(".flipper").click(function () {
    $(this).find(".flip-card").removeClass("flipped").mouseleave(function () {
        $(this).addClass("flipped");
    });
});
{% endhighlight %}

Now let's create a set of animations to apply to the page when it loads, I'll be using a combination of jQuery, the [animate.css](https://github.com/daneden/animate.css) stylesheet and some custom animation delays (CSS).

First let's add .flipped to that above GA logo 2 seconds after the page loads.

{% highlight javascript %}
setTimeout(function(){
    $(".flip-card").addClass("flipped");
}, 2000);
{% endhighlight %}

Now let's start making use of animate.css to bring things into view. First of all I'm going to define a number of "hold" animation delays so I can apply the animations in a set order.

{% highlight css %}
/* Building animation delays for the CSS transitions */

.hold2 { animation-delay: 2s; -moz-animation-delay: 2s; -webkit-animation-delay: 2s; }
.hold4 { animation-delay: 4s; -moz-animation-delay: 4s; -webkit-animation-delay: 4s; }
.hold45 { animation-delay: 4.5s; -moz-animation-delay: 4.5s; -webkit-animation-delay: 4.5s; }
.hold6 { animation-delay: 6s; -moz-animation-delay: 6s; -webkit-animation-delay: 6s; }
{% endhighlight %}

Now I use the animate css library and the transition delays I've just defined to animate my landing page. Incorporating an animation is easy, I add three classes - animated, [theAnimationName](http://daneden.github.io/animate.css/) and the animation delay I wish to use as defined above. Look at the examples below

{% highlight html %}
<div class="col-sm-4 col-sm-offset-1 col-xs-10 col-xs-offset-1 well animated fadeIn"> <!--- This will make a fadeIn immediately -->
    <h1><span class="animated bounceInRight hold2">I'm Michael</span><br><small class="animated bounceInUp hold4">and this is my application to the join the WDI Cohort for November 2015</small></h1>
    <button type="button" class="welcome btn-lg btn-primary animated bounceInUp hold45">Welcome</button> <!--- This will make a bounceInUp after 4.5s -->
</div>


<div class="col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1">
    <div class="well animated bounceInUp hold6"> <!--- This will make a bounceInUp after 6s -->
        <i class="glyphicon glyphicon-home"></i>
        <h3>About Me<br><small>Here's a short bio about myself. Please forgive my complete inability to write about anything interesting.</small></h3>
        <button type="button" class="abouttrig btn btn-info">About</button>
    </div>
</div>
{% endhighlight %}

This brings in my elements section by section, and works nicely across all devices. Now onwards!

Now I want to make my buttons work. So first of all that big welcome button in my landing section - I want that to scroll down to the features segment. Let's add a [jQuery function to trigger on click](http://www.michaellennox.me/devramble/2015/09/25/animating-anchor-scroll.html).

{% highlight javascript %}
$('.welcome').click(function (event) {
    $('html, body').animate({scrollTop: $('.features').offset().top}, 600);
    event.preventDefault();
});
{% endhighlight %}

Now let's write a function that I can trigger for the other buttons to make their relevant content fadeIn. I've given each of my buttons a class that relates to the content they trigger (abouttrig, buildingtrig, contacttrig).

{% highlight javascript %}
$('.abouttrig').click(function (event) {

    $('.activecontent').fadeOut(600).removeClass('activeContent');
    $('.about').fadeIn(600).addClass('activecontent');
    
    $('html, body').animate({scrollTop: $('.about').offset().top}, 600);
    event.preventDefault();
});
{% endhighlight %}

Because the content of the page may get pretty long, I'll position a glyphicon to the right of the screen which boots you back up to the top on click.

{% highlight html %}
<i class="glyphicon glyphicon-chevron-up topify"></i>
{% endhighlight %}

{% highlight css %}
.topify {
    position: fixed;
    top: 20px;
    right: 40px;
    font-size: 24px;
    cursor: pointer;
}
{% endhighlight %}

{% highlight css %}
$('.topify').click(function (event) {
    $('html, body').animate({scrollTop: 0}, 600);
    event.preventDefault();
});
{% endhighlight %}

So let's insert the final bits of content. The about.me is shamelessly pulled from what I have on my main site, the building blog is being built using Jekyll, pygments, liquid and markdown so I can get those pretty code snippets (and replicate this post on my main blog) and my contact me is a fairly simple contact page with nested columns!

And that's it. If I spent some further time on this I think it'd be focused around further customisation of the main content sections and turning that topify button into an actual scrolling nav bar. Also I'm pretty certain the JS could be cleaned up quite a bit more.

