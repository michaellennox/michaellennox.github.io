---
layout: posts
title: Makers Week 4, Day 2 - Up On Heroku
category: rambleramble
tag: makers
---

So today I was paired with the fantastic [Chris](https://github.com/Wynndow) for the 2nd day of our introduction to databases!

One thing we learnt - don't use DROP TABLE on your prod database on Heroku.... manually rebuilding it is very irritating.

![Exploits Of A Mom XKCD](http://imgs.xkcd.com/comics/exploits_of_a_mom.png)

Getting our head around INNER JOINS was a little confusing at first but it's starting to make sense after a night of sleep, going over it again today should help reinforce it nicely. This was also the first day where I hit a bug that couldn't be solved by putting all my code in my head and just figuring it out, Ptolomy introduced us to [byebug](https://github.com/deivid-rodriguez/byebug), the use of which solved our issue very rapidly. [He also made a lovely video on using it here](https://www.youtube.com/watch?v=FbXBx44JdRk) which is well worth checking out.

The codebase from Tuesday is available [here](https://github.com/michaellennox/bookmark_manager/tree/chris) and the heroku app is available [here](https://afternoon-savannah-3001.herokuapp.com/).
