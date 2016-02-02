---
layout: posts
title: Makerthon Day 1! Tom Needs Validation
category: devramble
tag: makers
---

So it's time! Here comes makerthon, effectively a 'hackathon' for makers students where we put together everything we have learnt over the last 8 weeks and in a team (our first time) assemble a mega-awesome-app-of-epicness (well probably not, but we can hope).

Our team was influenced by the powerful words of one very sad man,

Tom Bradley

![Tom](http://i.imgur.com/bCmp3xT.jpg)

Tom has a serious issue - he needs to feel validation for his achievements but unfortunately Makers' current sticker system poses a few issues for him:

* He's really good at losing things
* He doesn't want to deface his beautiful laptop with stickers
* Once he uses his sticker he can never display it again
* His stickers don't let him actually shout out to the world about his awesomeness

Luckily, after a quick brainstorming session

![brainstorming](http://i.imgur.com/erLbmfl.jpg)

We came up with a solution. A leaderboard and achievement system which lets Tom shout out to the world about how much better he is than the rest of us.

Initially we came up with a big phase of ideas to solve this

![many many ideas](http://i.imgur.com/Exo227v.jpg)

But this needed narrowing down, as much as Tom thinks of himself unfortunately he can't build all that in 3 days.

So we ended up with the following core idea for our initial concept.

![core ideas](http://i.imgur.com/zYqGAIk.jpg)

And mapped out the user flow for our achievement writing system (_really complex this one! /s_)

![achievement flow](http://i.imgur.com/7c3od2R.jpg)

Because we will be writing a very decoupled app (why? because we're stupid) we also mapped out what we pictured the required routes to be for our very first prototype.

![routes](http://i.imgur.com/l3LH48p.jpg)

So onwards! We decided we wanted a decoupled front end from our server side because we wanted to have some more practice writing a single page app.

What did we decide on technologies?

__Server/API__:

* MongoDB
* NodeJS
* ExpressJS

__FrontEnd Application__:

* AngularJS

__Testing__:

* Jasmine
* Protractor
*

How smart this is, considering we have 1 person in a team of 4 who feels comfortable writing an express/node API, not really anyone who feels that confident with Angular and only one person who's good at making things purdy, I'm not really sure. Infact I'm pretty certain we're morons because not only are we using technologies we don't really know or feel comfortable with but we're using them for a use case where a SQL DB and a 'traditional' MVC framework such as Sinatra, Rails, Flask or Django would make much more sense, but hey!

So beyond the specifications we also practiced our git fu! We're following a git flow like the follows

![git-flow](http://lanziani.com/slides/gitflow/images/gitflow_1.png)

We set up our project, set up our [main repo](https://github.com/michaellennox/netstix), our branches

~~~
From github.com:michaellennox/netstix
* [new branch]      development -> origin/development
* [new branch]      master     -> origin/master
~~~

And even forked off our first feature branches for both our Angular pair and our API pair. We wrote the following little contributor gist so people could quickly get a feature branch up and running

~~~
to open a new feature branch - fork the repo

$ mkdir <project name>
$ cd <project name>
$ git remote add upstream git@github.com:michaellennox/netstix.git
$ git remote add origin <your fork addy>

$ git fetch upstream
$ git checkout upstream/development
$ git checkout -b <your new feature name>

This will then create a new local branch under your feature name which can be pushed up to fork

$ git push <your fork remote name> <your new feature name>

and then the pair partner and yourself can keep working on this feature branch, pushing and pulling back and forth, we’ll do all pull requests into upstream/development, once a version is ready we will merge upstream/development into upstream/master and deploy.

When you're ready to open a pull request you need to verify that you have merged the most up to date upstream/development into your feature branch and handled any conflicts. So once you're happy with your feature, pull from upstream development.

$ git pull upstream development
# fix any conflicts
$ git add .
$ git commit -m "Commit message about fixing conflicts"

Then you will be ready to push back up

$ git push origin <your feature name>

Then go to your fork on github and open a pull request from your feature branch into upstream/development.

We will code review every pull request by the pair who did not work on that particular feature.
~~~

We also actually did our first two features, our mergers and pushed back into dev and here's the tree.

~~~
*   26a020d 2016-02-01 | Merge pull request #2 from michaellennox/backend_test_config (HEAD -> master, origin/development) [Michael Lennox]
|\
| * 5030fa2 2016-02-01 | Updates npm scripts within package.json (origin/backend_test_config) [michaellennox]
| * 77c9f59 2016-02-01 | Reintroduces updated test scripts to package.json [michaellennox]
| *   a97ec68 2016-02-01 | Merges development into backend_test_config feature branch, fixes conflicts [michaellennox]
| |\
| |/
|/|
* |   392695a 2016-02-01 | Merge pull request #1 from giamir/frontend_config [Michael Lennox]
|\ \
| * | 0b62d50 2016-02-01 | setup frontend testing configuration and relative grunt tasks [giamir]
|/ /
| * 15dd139 2016-02-01 | Adds jasmine config [michaellennox]
|/
* 60d6850 2016-02-01 | Adds scaffolding for project (origin/master) [michaellennox]
~~~

Giamir merged back in to our master first, I then pulled from master, fixed the conflicts, made a few final adjustments before we merged back in and then were away.

I'm excited as ever to actually be building something by our own steam so here we go. I guess we'll be able to see whether our choice was a little too stupid or not soon!
