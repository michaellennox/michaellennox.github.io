---
layout: posts
title: NodeBoard Part 1 - CRUD with Mongo, Express, Node - Project Set Up
category: devramble
tag: makers
---

This continues on from my previous two posts about getting started in Node. It is intended to be the first part in assembling a basic CRUD app using Mongo, Express and Node. It will be focused on project setup and establish a basic isolation of environments. We're going to be building a very basic CRUD app which anyone can just leave a random message on!

The very basics of getting started with Node and Express can be found in my previous two posts.

##Hello Node
[Part 1 can be found here](http://www.michaellennox.me/devramble/2016/01/13/hello-node.html)
[Part 2 can be found here](http://www.michaellennox.me/devramble/2016/01/14/hello-node2.html)

So assuming you've got the basics in place from the previous two posts, you have most of the packages that you need globally already, the big difference this time is we are going to start off by using the [express generator](http://expressjs.com/en/starter/generator.html) which is a package designed to quickly set up an express project. This particular post is going to walk through the files it generates to try and explain a) what exactly has happened and b) how to set up a few small npm scripts designed to isolate your dev and test environments.

First off, get hold of the generator above as well as a package called [nodemon](https://github.com/remy/nodemon) which automatically reboots a running server every time a file is saved (very very helpful for dev or test environments where you're likely to keep changing and trying things).

~~~
$ npm install -g express-generator
$ npm install -g nodemon
~~~

Now create a new project using the generator, this creates a new project directory within your current working directory.

~~~
$ express nodeboard
[... confirmation trace ...]
~~~

This will create a set of files following a basic express structure. It's important to note that express is not a very opinionated framework, you can quite happily follow many different structures here and there are various other generators out there which will create a different directory structure.

We now need to install all of the base dependencies that the express generator has assumed we will want to make use of so let's move into our new nodeboard directory and get everything installed.

~~~
$ cd nodeboard
$ npm install
~~~

By calling npm install every package that express generator thinks you might have needed (and thus placed in your `package.json`) will be installed as a local module. If you make use of git with a node project I'd strongly recommend adding `node_modules` to your `.gitignore` or else you're just going to get a ton of stuff committed to your project which are just third party modules.

Now let's have a look at what the generator actually installed:

~~~
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
~~~

* `app.js`: effectively manages your middleware and some config, we'll have a peek at this shortly
* `bin/*`: this is where we place our start-up scripts for express. Helpful for isolating environments.
* `public`: your 'static' directory, javascript, css and any images you
* `routes`: routing logic goes here, controllers can be placed within routes or separated into their own directory
* `views`: views... fairly self explanatory. Express is set up to use [jade](http://jade-lang.com/) by default which is an awesome HAML-like templating language

Now let's look at what the generator assembled for us in `app.js`.

{% highlight javascript %}

// like in any node file, all the dependencies are imported at the very top

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

// cookieParser let's us use session/cookie data, bodyParser let's us make use of information submitted in the HTTP body

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// because our actual routes are each a module in their own right we need to import them here

var routes = require('./routes/index');
var users = require('./routes/users');

// initialize the express app

var app = express();

// view engine setup -
// simply sets the template engine to jade (can be set to other ones such as ejs)
// also points towards the directory containing our views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// here the express app 'use's the various middleware modules

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// here we set each route to their base path, the routes and users names correspond to what was imported at the top.

app.use('/', routes);
app.use('/users', users);

// various error handlers are set up for us below here

// [...]

//

// finally the app gets exported so we can make use of it in the bin start up scripts

module.exports = app;

{% endhighlight %}

What effectively is happening in this file is express is imported in and initialized, assigned to the `app` variable then has various middlewares attached and configurations set up. We export it as a node module at the end with `module.exports = app` to then make use of it in our start-up scripts in the `bin/`. If you add any other middleware to your application this is where you'll set it up.

Now what we are going to do next is set up our isolated development and test environments. Right now, dev test and prod will all start from identical scripts but as soon as we start doing things like incorporating database links they will start differentiating.

So first of all, let's make use of the bin/www script and create copies for dev and test.

~~~
$ cp bin/www bin/test
$ cp bin/www bin/dev
$ tree bin
bin
├── dev
├── test
└── www
~~~

Let's now go to our package.json and set up seperate npm scripts for each environment.

{% highlight javascript %}
{
  "name": "nodeboard",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "start-test": "nodemon --debug ./bin/test",
    "start-dev": "nodemon --debug ./bin/dev"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
  }
}
{% endhighlight %}

By adding two new scripts to our `package.json` we can initialize unique environments as and when we want them. If we now do `npm run start-test` it will start up a server with whatever we have configured in the `./bin/test`, if we use `npm run start-dev` it will boot up the startup script in `./bin/dev`. Because we make use of nodemon the server will reboot every time we change a file and the --debug flag will provide helpful logs to the console as we work and interact with our application.

For now, let's spin up the dev server and have a look!

~~~
$ npm run start-dev
> nodeboard@0.0.0 start-dev /Users/Michael/Projects/Study/nodeboard
> nodemon ./bin/dev

[nodemon] 1.8.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node ./bin/dev`
~~~

If you visit `http://localhost:3000/` in your browser you should now have the welcome to express message.

Now let's get the very final part of our set up completed - create our test directory, wdio config and grunt script to run our tests just as we did in the [hello world](http://www.michaellennox.me/devramble/2016/01/13/hello-node.html) example. Don't forget to install all local dependencies for our test suite with the correct `--save` or `--save-dev` flag and to create the `npm test` script which points to grunt.

Hopefully this has been a nice quick and dirty intro to getting started with the express generator package, in the next post I'll try to cover Mongo/Mongoose setup and we'll create some create and read routes.
