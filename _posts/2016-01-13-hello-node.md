---
layout: posts
title: Hello Node - Getting Started in Node
category: devramble
tag: makers
---

So for this week a small group of us at Makers have set ourselves the challenge of getting an app off the ground with Node/Express/Mongo with the aim of at least getting to grips with building an MVC application using these techs (although if possible get the time to change it to a JSON API with either an Angular or jQuery front end).

It's proving to be a bitch and a half. Conceptually there isn't a huge amount of changes going into learning Node/Express/Mongo and now we're reaching the stage of actually assembling the application it's starting to flow. The issue is just getting those set-up steps down and reducing the time it took for us to actually get things as simple as making sure node packages are installed and running in the right places.

As such, I'm going to put together a few small blog posts that should take anyone who fancies through setting up a Node project to writing a small CRUD application following an MVC design pattern.

This first post is going to cover setting up Hello World with Node and Express plus building an acceptance test with selenium standalone, webdriverio and Mocha/Chai.

## Getting Started

So first of all you need to get node itself, I would strongly advise making sure this is installed via brew if you're on OS X and that you use brew for all updates to node and npm (node's inbuilt package manager which is bundled with node). If you've already installed node via a different source: this guide will teach you to get rid of it before starting - [delete node on SO](http://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x)

Let's boot up the terminal and get it installed!

{% highlight %}

$ brew install node

{% endhighlight %}

huzzah! We now have node so let's talk a bit about (npm)[https://www.npmjs.com/] or the node package manager.

## NPM - Node Package Manager

If you've only used ruby gems before, the first thing you have to get your head around is the concept of locally installed modules (within the project directory) and globally installed modules (which function everywhere). As a general rule of thumb - globally installed modules should be used for anything you might need to call from the command line (scaffolding generators, test runners, build tools, etc...) and locally installed modules should be used for anything you are using in the particular project, whenever you install a local module you MUST also always log it to your node project's `package.json` (we'll come to this shortly).

These are the basic commands for npm:

```
# To install a package globally, the -g flag designates this:
$ npm install -g <package-name>

# To install a package locally as a dev-dependency, the --save-dev flag designates this:
$ npm install --save-dev <package-name>

# To install a package locally as a dependency, the --save flag designates this:
$ npm install --save <package-name>
```

The concept of dev-dependency and application dependency can be thought of as 'is this needed in production?', if the answer is no, then it's a dev dependency.

## Let's Start the Project

Now let's initialize ourselves a project, there are many scaffolding tools out there but we'll start with npm's inbuilt `npm init` command for now, this will create a new node project in your current working directory.

This will boot up a config script which let's you set many basic items of the `package.json` file. The `package.json` file is effectively a combination of a gemfile that anyone else can use to quickly get any dependencies required installed, a place to run basic scripts from (like starting a server or running a test suite) and general information about your project.

For now, fill in any basic information you fancy.

```
$ mkdir hello-node
$ npm init hello-node
[fill-in-script]
...
```

You will now have a package.json file in the project which has the basic information ready to go. Let's now get set up with a web framework and basic test system.

## Express.js & Node's Package Structure

For our framework - we are going to use [Express.js](http://expressjs.com/), the defacto web framework for node currently. This we will need to install locally as a project dependency.

```
$ npm install --save express
```

While we're here it's important to talk about node's package structure and how it manages module imports and requirements. Unlike many Ruby gems, node packages are generally meant to following single responsibility principles very closely, because of this you will find yourself having to use a LOT more of them than normal to get the same functionality. Don't see this as a bad thing though - you're not using lots of superflous stuff you're unlikely to ever touch!

It's also important to note because of how node runs, it doesn't 'chain' require statements as an app boots up like ruby does. If you need to use something in a file, __IT MUST BE REQUIRED IN THAT FILE__ and you will have to set the package to a usable variable (and likely initialize it with a call). Equally every single file you make in your project will act like a package (and you will have to explicitly export it too if you want to use it in another file).

Now let's create a file called app.js which will tie everything in our project together.

```
$ touch app.js
```

```js
// Within app.js

// We require express and set it to a usable variable
var express = require('express');
// We call express and set it equal to a usable variable
var app = express();

// We start the app server, the port is passed as an argument.
app.listen(3000);
```

You can start this server with the very basic command

```
$ node app.js
```

At which point you will be able to visit the server in your browser at `http://localhost:3000/`! In a later walkthrough we will also cover using npm for start-up scripts to isolate different environments but this will function for now.

## Getting Started With a Test Suite

Like most techs, there are a thousand and one test tools out there for node. For this app we're going to make use of [selenium](http://www.seleniumhq.org/), [webdriverio](http://webdriver.io/), [mocha](https://mochajs.org/), [chai](http://chaijs.com/), [grunt](http://gruntjs.com/) and [grunt-webdriver](https://github.com/webdriverio/grunt-webdriver). Selenium is our web driver, webdriverio is a set of javascript bindings for selenium, grunt-webdriver lets us use webdriverio with less set-up than normal (and run from a grunt script), mocha is a testing framework and chai gives us access to various assertions for mocha (expect, assert and should).

There are many, many, many other test stacks you can use and I'd say definitely go research some.

Let's get them all installed, certain ones need to be local and global, others just local.

```
$ npm install -g grunt
$ npm install -g grunt-cli
$ npm install -g webdriverio
$ npm install -g selenium-standalone
$ npm install -g mocha
$ npm install --save grunt
$ npm install --save-dev grunt-webdriver
$ npm install --save-dev webdriverio
$ npm install --save-dev selenium-standalone
$ npm install --save-dev mocha
$ npm install --save-dev chai
```

Now when running acceptance tests with this stack you need to have both your express server AND a selenium server up and running before you start the testrunner.

To start a selenium server it is the following command:

```
$ selenium-standalone start
```

## Configuring webdriverio

So let's make ourselves a test directory to handle all test-related things.

```
$ mkdir test
$ cd test
```

Within test we now need to create our wdio config file. This is again just a simple script to build up the config file.

```
$ wdio config
? Where do you want to execute your tests?
> On my local machine
? Which framework do you want to use?
> mocha
? Where are your test specs located?
> <press enter to keep default>
? Which reporter do you want to use?
> spec
? Level of logging verbosity:
> silent
? In which directory should screenshots get saved if a command fails?
> ./test/errorShots/
? What is the base url?
> (http://localhost:3000)

Configuration file was created successfully!
```

You will receive a message saying that the file was created and that you can run your tests via `wdio wdio.conf.js`, this is one way to do it but what we're going to cover next is to run via grunt with grunt-webdriver.

## Using grunt-webdriver to run our suite

Head back to your project's root directory and we'll now create a 'Gruntfile'. This is a very similar concept to something like Make or Rakefile if you've come across them in other languages, a set of easy to use scripts to help us out.

Create a new file called `Gruntfile.js` then let's write our config:

```js
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      test: {
        configFile: './test/wdio.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);
};
```

We can now run our testsuite with the simple command

```
$ grunt
```

While we're setting up basic scripts, let's also go back to our `package.json` and add the following two scripts to the "Scripts" section `"start": "node app.js",` and `"test": "grunt"`.

Our package.json should now look like this:

```js
{
  "name": "hello-node",
  "version": "1.0.0",
  "description": "Hey, we can make node say hello!",
  "main": "index.js",
  "scripts": {
    "start": "node app.js",
    "test": "grunt"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.13.3",
    "grunt": "^0.4.5"
  },
  "devDependencies": {
    "chai": "^3.4.1",
    "grunt-webdriver": "^1.0.0",
    "mocha": "^2.3.4",
    "selenium-standalone": "^4.8.0",
    "webdriverio": "^3.4.0"
  }
}
```

We can now run our test suite with `$ npm test` and our server with `$ npm start`. While a bit uneccessary at this level it's important to take note of how we can isolate environments for later, for example we may want to manage multiple different types of environment, test, dev and prod for example and we can set up unique startup scripts for each one of them.

So let's try this out! For the following set of commands you will need multiple terminals ready to go as 2 will be taken up by node and selenium.

```
# within one terminal, boot up selenium
$ selenium-standalone start

# within another terminal, boot up express
$ npm start

# within another terminal, let's run our testrunner
$ npm test

> hello-node@1.0.0 test /Users/Michael/Projects/Makers/Course/Study/hello-node
> grunt

Running "webdriver:test" (webdriver) task

pattern ./test/specs/**/*.js did not match any file


0 passing (2.80s)



Done, without errors.
```

Huzzah! Our test runner works, our scripts work and everything is coming together nicely. The hardest most irritating part of node is behind you (at least as far as we found) and it's actually set up. Now for the fun of actually writing things.
