---
layout: posts
title: Makerthon Day 1. One day, 500 insertions, 3/8s CRUD
category: devramble
tag: makers
---

Well today felt slightly slow...

We hit a major problem with building a MEAN stack app - we don't really know much about acceptance testing Express APIs and unfortunately it would appear there is not that many options out there. First off we started with [supertest](https://github.com/visionmedia/supertest) which looks brilliant and really useful, unfortunately after spending an entire morning and still not getting a single test functioning correctly with this tool (apparently because it plays really badly with Jasmine) so scrapped it and jumped onto this random but fairly cool little tool we found called [frisbyJS](http://frisbyjs.com/docs/api/) which actually did play nice with Jasmine although was very different syntatically to any other testing tool we have used so far.

For example this is our frisby testfile for our first resource - /achievements:


{% highlight js %}
var frisby = require('frisby');
var mongoose = require('mongoose');

var URL = 'http://localhost:8080/achievements/';

frisby.create('api call to add an achievement')
  .post(URL, {
    title:     'Bug Hunter',
    criteria:  'Find an error in the Makers Academy materials'
  })
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json; charset=utf-8')

  .after(function() {
    frisby.create('view list of achievements')
      .get(URL)
      .expectStatus(200)
      .expectHeaderContains('content-type', 'application/json; charset=utf-8')
      .expectJSON('?', {
        title: 'Bug Hunter',
        criteria: 'Find an error in the Makers Academy materials'
      })

      .afterJSON(function(achievements) {
        var achievement = achievements[0];
        frisby.create('view individual achievement')
          .get(URL + achievement._id)
          .expectStatus(200)
          .expectHeaderContains('content-type', 'application/json; charset=utf-8')
          .expectJSON({
            title: 'Bug Hunter',
            criteria: 'Find an error in the Makers Academy materials'
          })
        .toss();
      })
    .toss();
  })
.toss();
{% endhighlight %}

Basically you chain a set of API calls together just as you would for a selenium style acceptance test but instead of navigating via user actions, you define the calls and parameters you make then test the responses. While this was a rather nifty tool I think in future we'll just go with Mocha for both front and back end testing and make use of supertest which appears much more human readable.

So beyond our testing woes what did we do today?

3/8ths CRUD, ouch, that feels awfully slow. We basically completed our specification for a single resource (which you can find on my post about the [design sprint](http://www.michaellennox.me/devramble/2016/02/01/makerthondesign.html) and had that functioning on both the Angular app and the Express API.

At the end of the day our waffle board looked like this

![waffleboard](http://i.imgur.com/FAVVX3T.png)

A fair amount of stuff was starting to get ticked off but we still had no view specific achievement or for that matter any user authentication, submission data or links between the various resources! That I guess will have to come on day 2 (at a much faster pace).

To wrap up the day - we started planning ahead and built out some information on how our user auth system would work and prepared our tickets to go.

![user login](http://i.imgur.com/yCi9a0O.jpg)

![user register](http://i.imgur.com/LJuMHmi.jpg)

![achievement view](http://i.imgur.com/rFaz2SS.jpg)

![leaderbaord, profiles and achievement views](http://i.imgur.com/PtLMACt.png)

![tickets](http://i.imgur.com/PtLMACt.png)

Even though today was a little slow, it still feels great to have built something that _works_ in a brand new technology and have done it in the 'right' way with proper test coverage and not too much hacky code.
