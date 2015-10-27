---
layout: posts
title: Adding Bootstrap to Jekyll - Rapidly Converting to Responsive
category: devramble
---

So it's time to actually make this site responsive and I'm going to just quickly import bootstrap to do it to save time (also this will let me get away without doing too much typography for the sections I haven't got around to formatting properly yet), yay for lazyness!.

I'll be adding bootstrap from a CDN: `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">` `<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>` to make life nice and easy. Shove those two in the right spots in my head.html _includes file like below so they're incorporated into all my pages and I'm away.

{% highlight html %}{% raw %}

<head>
	
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title> {{ site.name }} {% if page.title %}| {{ page.title }} {% endif %} </title>
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link href="{{ site.baseurl }}/main.css" rel="stylesheet" type="text/css">
    <link href="{{ site.baseurl }}/css/pygments.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="{{ site.baseurl }}/javascript/site.js"></script>
    
    {% include analytics.html %}
	
</head>

{% endraw %} {% endhighlight %}

Now just edit a bunch of my old CSS so it works nicely with bootstrap (there's only a couple hundred lines of it) and add the grid layouts to my HTML and we're away! I'm also taking this lovely chance to actually implement proper tags instead of covering my poor site with `<divs>`.

Navbar needs a little additional fortmatting for mobile devices, I'll implement a special one for them at some point soon.