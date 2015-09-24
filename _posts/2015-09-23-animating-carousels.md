---
layout: posts
title: Animating my site - jQuery carousels
category: devramble
---

So right now I want two animations on my site:

- A scroll to anchor because jumping when you press my front-page or contact buttons is ugly and jarring
- A nice and simple carousel I can use to incorporate scrolling images in a couple of blog posts I want to write

As the only library I've had much time with so far is jQuery we'll be using that. I'm aware there are plugins I can use for both of the above animations but wanted to get in a bit of practice with jQuery while I was at it.

So first of all, the carousel. All I want to do is convert a HTML list into a scrolling set of images going sideways across the screen. I'll be making it to take up my entire container width.

So first of all, my HTML template:

{% highlight html %}
<ul class="carousel">
    <li class="slide"><img src="image#1"></li>
    <li class="slide"><img src="image#2"></li>
    <li class="slide"><img src="image#3"></li>
</ul>
{% endhighlight %}

Each slide I want to change between is given a class of `slide` in a wrapper of `carousel`. Should be able to use the same template to make a carousel with any other tags as long as the classes are applied. The contents of the `slide` li's don't have to be images.

Let's set up my CSS, the carousel should be a fixed size box and each image should be hidden for now.

{% highlight css %}
.carousel {
    width: 980px; 
    height: 735px; 
    position: relative; /* let's me use position: absolute in the .slide formatting */
    overflow: hidden; /* stops any overflowing content I may accidentally insert from appearing and ruining my page, also will work as a clearfix (I think) */
}

.slide {
    display: none; /* does what it says on the tin, ensures all the slides are hidden on DOM load */
    position: absolute; /* this line and onwards for .slide ensure the item fills the .carousel container */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.slide img {
    height: 100%; /* will ensure all images are resized to the container, landscape will fit perfectly, portrait will have blank space either side */
}

{% endhighlight %}

Now time to set up the jQuery. First I want to apply the `visible-slide` class to the first slide and also make it `fadeIn()`.

{% highlight javascript %}
$(document).ready(function () {
    $(".carousel .slide:first-child").fadeIn(400).addClass("visible-slide");
});
{% endhighlight %}

See in action at: [jsFiddle](https://jsfiddle.net/3bs4hbrw/1/)

Next I'm going to use Javascript's `setInterval()` method to trigger a function to switch slides at set intervals. Here we'll go for 8 seconds so 8000 ms.

{% highlight javascript %}
$(document).ready(function () {
    (".carousel .slide:first-child").fadeIn(400).addClass("visible-slide");
    
    setInterval(function () {
        // code to change the visible slide
    }, 8000);
});
{% endhighlight %}

Now time to actually write the code to change slides.

{% highlight javascript %}
$(document).ready(function () {
    $(".carousel .slide:first-child").fadeIn(400).addClass("visible-slide");
    
    setInterval(function () {

	       var visibleSlide = $(".visible-slide");
	       var nextSlide = visibleSlide.next();
        
	       visibleSlide.fadeOut(400).removeClass("visible-slide");
	       nextSlide.fadeIn(400).addClass("visible-slide");
        
    }, 8000);
});
{% endhighlight %}

See in action: [jsFiddle](https://jsfiddle.net/5pge76eg/)

It works but doesn't loop back to the start after it reaches the end of my list. I'll now use javascript to check that nextSlide is empty and if so set our first slide as active again:

{% highlight javascript %}
$(document).ready(function () {
    var carouselStart = $(".carousel .slide:first-child");
    carouselStart.fadeIn(400).addClass("visible-slide");

    setInterval(function () {

        var visibleSlide = $(".visible-slide");
        var nextSlide = visibleSlide.next();

        if (nextSlide.length === 0) {
            nextSlide = carouselStart;
        }

        visibleSlide.fadeOut(400).removeClass("visible-slide");
        nextSlide.fadeIn(400).addClass("visible-slide");

    }, 8000);
});
{% endhighlight %}

This isn't quite perfect. In the event I have multiple carousels on the same page it effectively makes every carousel the same length as the longest one by adding extra "blank" pages but I'm not entirely sure on a solution right now so ill mull that one over.

Now time to put my cat carousel in action:

<ul class="carousel">
    <li class="slide"><img src="http://dreamatico.com/data_images/cat/cat-6.jpg"></li>
    <li class="slide"><img src="http://www.pets4homes.co.uk/images/articles/962/large/6-large-domestic-cat-breeds-with-wild-relatives-51eff964e9d7b.jpg"></li>
    <li class="slide"><img src="http://media1.santabanta.com/full1/Animals/Cats/cats-93a.jpg"></li>
</ul>

The sizing might be a bit off looking at it for all my purposes, I think I'll use ID filters to set the size on each page for the carousels.