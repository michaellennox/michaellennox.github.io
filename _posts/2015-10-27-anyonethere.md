---
layout: posts
title: Is Anyone Out There? Tracking Traffic to a Jekyll Blog With Google Analytics
category: devramble
---

So right now - god knows if anyone reads this site or even spends any time on a page if they do somehow end up here. Let's add google analytics to this blog so I know who, what, why, where and when they're here (and then maybe even bother writing stuff that's relevant to visitors)!

### 1. Sign up to Google Analytics

- Go to [https://www.google.co.uk/analytics/](https://www.google.co.uk/analytics/)
- Press Sign In
- Press Google Analytics
- Press Sign Up
- Fill in form

Well that was hard.

### 2. Go grab your Tracking ID

- Go to [https://analytics.google.com/](https://analytics.google.com/)
- You will now see a panel about the site you just registered
- Press "Admin" on the menu
- There will be a 3 column layout in front of you - look at the center one under PROPERTY and press "Tracking Info" then "Tracking Code"
- This will now open up a new section, scroll down slightly until you reach a code snippet titled website tracking, it will look like this:

{% highlight html %}
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'ID#', 'auto');
  ga('send', 'pageview');

</script>
{% endhighlight %}

- Copy this code snippet

### 3. Shove the Tracking ID into Jekyll

- Create a file for the tracking in your _includes directory, I called mine analytics.html. Copy paste the above code snippet into it.
- Insert this into every page on your site just before you close the `<head>` tag using {% raw %}{% include filenameyousavedasabove.html %}{%endraw%} - eg for me {%raw%}{% include analytics.html %}{%endraw%}. For this site I have a head.html containg my `<head></head>` in my _includes which is included in all pages on my site.
- Build and deploy

### 4. Enjoy your pretty data

- Enjoy the pretty information that will start appearing on your account at [analytics.google.com](analytics.google.com). 
- The information seems fairly intuitive to look around (for the basics), if you fancy finding out how to use it in a better way I'm sure there's a million tutorials out there. Let me know if you find something nice.