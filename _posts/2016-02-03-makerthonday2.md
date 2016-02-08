---
layout: posts
title: Makerthon Day 2 - Holy Shit We Can Code
category: devramble
tag: makers
---

Well today felt awesome. We were the gods of the MEAN stack as we blasted pretty much everything out the water!

The entirety of our User System, the extension of the Achievements resource and the brand new Submissions resource were all built in a single, slick day. It goes to show just how productive you can be when you have everything planned out and ready to go. The ticketing system was just an absolute lifesaver, we all got stuck in and moved at a pace which made the day before seem like a snail's pace.

You can view the repository's status at the end of day2 at [this repo](https://github.com/michaellennox/netstix/tree/c8dbb3cd889df602bbca8a3c587a8ac3d25a7ca2)

At this stage we had also carried out a total of 88 Github actions (pull requests or issues being raised) of which we had succesfully closed at least 67. While obviously in a 'real' project we wouldn't be working on quite as small tickets we got some brilliant practice in guiding our workflow and properly managing our development and deployment pipelines which we likely wouldn't have got if we wrote much larger tickets.

![waffle at the end](http://i.imgur.com/cetXZoZ.png)

We had a working app, it functioned pretty much how we were hoping, there was just the pesky cases of setting up a CI system, deploying it and maybe adding in a couple of validations to make sure some random numpty didn't come and destroy our databases. Tommorrow is presentation - we just have a few beautification and minor actions such as setting up a CI server and we will be ready and raring. I'm incredibly pleased in how well our team has worked together, in most cases learning brand new technologies and built a working and usable application that is fully tested in 2 days.

There's still a lot of work to go - mostly refactoring things like our over abundance of factories and our express API pretty much having all logic within the routes (which needs extracting to controllers and then to further modules to keep things nice and skinny).

~~~
.
├── Gruntfile.js
├── README.md
├── app
│   ├── models
│   │   ├── achievement.js
│   │   ├── submission.js
│   │   └── user.js
│   ├── routes
│   │   ├── achievements.js
│   │   ├── index.js
│   │   ├── sessions.js
│   │   ├── submissions.js
│   │   └── users.js
│   └── views
│       ├── error.jade
│       └── layout.jade
├── app.js
├── bower.json
├── config
│   └── env
│       ├── dev
│       ├── test
│       └── www
├── package.json
├── public
│   ├── css
│   │   └── style.css
│   ├── favicon.ico
│   ├── images
│   │   └── netstix.png
│   ├── js
│   │   ├── app.js
│   │   ├── controllers
│   │   │   ├── achievementController.js
│   │   │   ├── achievementsController.js
│   │   │   ├── loginController.js
│   │   │   ├── logoutController.js
│   │   │   ├── newAchievementController.js
│   │   │   ├── newSubmissionController.js
│   │   │   ├── registerController.js
│   │   │   ├── userController.js
│   │   │   └── usersController.js
│   │   └── factories
│   │       ├── UsersResourceFactory.js
│   │       ├── getAchievementFactory.js
│   │       ├── getAchievementsFactory.js
│   │       ├── postAchievementsFactory.js
│   │       ├── postSubmissionsFactory.js
│   │       └── userAuthFactory.js
│   └── views
│       ├── index.html
│       └── partials
│           ├── achievements
│           │   ├── achievement.html
│           │   ├── index.html
│           │   └── new.html
│           ├── navbar.html
│           ├── submissions
│           │   └── new.html
│           └── users
│               ├── leaderboard.html
│               ├── login.html
│               ├── register.html
│               └── user.html
└── test
    ├── e2e
    │   ├── conf.js
    │   └── features
    │       ├── achievementsFeature.js
    │       ├── submissionsFeature.js
    │       └── userAuthFeature.js
    ├── front_end
    │   ├── controllers
    │   │   ├── achievementController.spec.js
    │   │   ├── achievementsController.spec.js
    │   │   ├── newAchievementController.spec.js
    │   │   ├── newSubmissionController.spec.js
    │   │   ├── userAchievementController.spec.js
    │   │   └── usersAchievementsController.spec.js
    │   ├── factories
    │   │   ├── getAchievementFactory.spec.js
    │   │   ├── getAchievementsFactory.spec.js
    │   │   ├── postAchievementsFactory.spec.js
    │   │   ├── postSubmissionsFactory.spec.js
    │   │   └── usersResourceFactory.spec.js
    │   └── karma.conf.js
    └── server
        ├── controllers
        │   ├── achievementsSpec.js
        │   └── userAuthSpec.js
        ├── models
        └── support
            └── jasmine.json

27 directories, 66 files
~~~

But at the same time it feels quite good to have that app up and working.

Warning in advance - what comes below is not pretty, but it hopefully displays how much git fu we've learnt in just a couple of days, so much merge, so much PR, so much branching, so much git fu.

~~~
*   c8dbb3c 2016-02-03 | Merge pull request #88 from michaellennox/development (HEAD) [Tom Bradley]
|\
| *   ecf33a9 2016-02-03 | Merge pull request #87 from trbradley/newsubmission2 [Tom Bradley]
| |\
| | * b17642a 2016-02-03 | Fixes final test [Thomas Bradley]
| | *   51775f8 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into newsubmission2 [Thomas Bradley]
| | |\
| | |/
| |/|
| * |   0f48452 2016-02-03 | Merge pull request #86 from michaellennox/update_user_profile_route [Michael Lennox]
| |\ \
| | * | 1056c20 2016-02-03 | Adds to user profile view and route to display achieved tasks [michaellennox]
| | * | 9f78fc4 2016-02-03 | Fixes minor doodahs [michaellennox]
| |/ /
| * |   c32d379 2016-02-03 | Merge pull request #84 from giamir/make_leaderboard_partial [Michael Lennox]
| |\ \
| | * \   cf8d558 2016-02-03 | fix conflict in app.js [giamir]
| | |\ \
| | |/ /
| |/| |
| | * | 28ff650 2016-02-03 | implement usersResource factory and users controller to retrieve data and use it in the leaderboard [giamir]
| | * |   c4be9ba 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into make_leaderboard_partial [giamir]
| | |\ \
| | * | | b907235 2016-02-03 | wip creating users controller and relative factory [giamir]
| | | | * 47cddca 2016-02-03 | Updates achievements/achievement partial [Thomas Bradley]
| | |_|/
| |/| |
| * | |   6dd2015 2016-02-03 | Merge pull request #83 from Htunny/newsubmission [Andrew Htun]
| |\ \ \
| | * | | 7a48bde 2016-02-03 | submissions feature test still pending [Andrew]
| | * | |   6c3f923 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into newsubmission [Andrew]
| | |\ \ \
| | |/ / /
| |/| | |
| * | | |   98c4b31 2016-02-03 | Merge pull request #82 from trbradley/newsubmission2 [Tom Bradley]
| |\ \ \ \
| | * | | | 8b7a4b2 2016-02-03 | Hides submission and achievement add buttons when not logged in [Thomas Bradley]
| | * | | |   ade9ae5 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into newsubmission2 [Thomas Bradley]
| | |\ \ \ \
| | |/ / / /
| |/| | | |
| * | | | |   05649e4 2016-02-03 | Merge pull request #80 from michaellennox/route_populations [Tom Bradley]
| |\ \ \ \ \
| | * | | | | 1233b9e 2016-02-03 | API now returns all details required for achievement view [michaellennox]
| |/ / / / /
| | * | | |   cd008a0 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into newsubmission2 [Thomas Bradley]
| | |\ \ \ \
| | |/ / / /
| |/| | | |
| * | | | |   f83aa0d 2016-02-03 | Merge pull request #79 from michaellennox/submissions_user_achievements_associations [Michael Lennox]
| |\ \ \ \ \
| | |_|_|_|/
| |/| | | |
| | * | | | bbef4c1 2016-02-03 | Submission API working [michaellennox]
| | | | * | 38963e1 2016-02-03 | submissions added [Andrew]
| | | | * | 00daebc 2016-02-03 | clientside submissions working [Andrew]
| | | |/ /
| | | * |   008aaf3 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into newsubmission [Andrew]
| | | |\ \
| | |_|/ /
| |/| | |
| * | | |   61ee16a 2016-02-03 | Merge pull request #78 from giamir/make_users_partials_purdy [Michael Lennox]
| |\ \ \ \
| | |_|_|/
| |/| | |
| | * | | dc7fe96 2016-02-03 | styling users form [giamir]
| * | | |   9f01c66 2016-02-03 | Merge pull request #76 from trbradley/submission_tests [Michael Lennox]
| |\ \ \ \
| | |/ / /
| |/| | |
| | * | |   47ae0fb 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into submission_tests [Thomas Bradley]
| | |\ \ \
| | |/ / /
| |/| | |
| | * | | fbcf0c6 2016-02-03 | Fixes typo bug in new submission flow [Thomas Bradley]
| | * | | b2a4ece 2016-02-03 | Tidies up submission feature test and variable names [Thomas Bradley]
| | * | |   6530437 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into frisby_tests_users [Thomas Bradley]
| | |\ \ \
| |_|/ / /
|/| | | |
| | * | | 74e4cc5 2016-02-03 | Adds protractor test for user submission [Thomas Bradley]
| | | | * 5289589 2016-02-03 | submission factory/controller pending [Andrew]
| | | | *   a52d59a 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into newsubmission [Andrew]
| | | | |\
| | |_|_|/
| |/| | |
| * | | |   953769d 2016-02-03 | Merge pull request #75 from michaellennox/submissions_api_resource [Michael Lennox]
| |\ \ \ \
|/ / / / /
| | | _ /
| | |  /
| * | | 2027425 2016-02-03 | Sets up submission routing logic, nests it within achievements [michaellennox]
| * | | 05189a3 2016-02-03 | Adds Submission model [michaellennox]
|/ / /
| | * e48580d 2016-02-03 | submission factory/controller pending [Andrew]
| | * 53b444c 2016-02-03 | new submissions factory added [Andrew]
| |/
|/|
* |   86a7dc6 2016-02-03 | Merge pull request #72 from michaellennox/development [Michael Lennox]
|\ \
| * \   d028c2d 2016-02-03 | Merge pull request #71 from giamir/make_index_purdy [Michael Lennox]
| |\ \
| | * | 111500e 2016-02-03 | fix protractor tests [giamir]
| | * |   1fd50b7 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into make_index_purdy [giamir]
| | |\ \
| | |/ /
| |/| |
| * | |   47f853e 2016-02-03 | Merge pull request #70 from Htunny/userauth [Michael Lennox]
| |\ \ \
| | |_|/
| |/| |
| | * | 7ba7034 2016-02-03 | app.js updated [Andrew]
| | * | e3b0775 2016-02-03 | userauth factories added [Andrew]
| | * |   4baa139 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into userauth [Andrew]
| | |\ \
| | |/ /
| |/| |
| | * | 0fb8106 2016-02-03 | userauth pending [Andrew]
| | | *   d98a5c1 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into make_index_purdy [giamir]
| | | |\
| | |_|/
| |/| |
| * | |   e9d014a 2016-02-03 | Merge pull request #60 from trbradley/frisby_tests_users [Tom Bradley]
| |\ \ \
| | * | | 918b463 2016-02-03 | Extracts db dropping and adds sign in error test [Thomas Bradley]
| | * | | 030525e 2016-02-03 | Adds frisby tests for user auth [Thomas Bradley]
| |/ / /
| * | |   4e86afb 2016-02-03 | Merge pull request #58 from michaellennox/feature_test_user_authentication [Tom Bradley]
| |\ \ \
| | * | | 0adae5e 2016-02-03 | Completes protractor test following a journey for signin up, signing out, signing in [michaellennox]
| |/ / /
| * | |   51839e2 2016-02-03 | Merge pull request #56 from michaellennox/user_auth_api_endpoints [Tom Bradley]
| |\ \ \
| | * \ \   d307ca2 2016-02-03 | Merge branch 'master' of github.com:michaellennox/netstix into passport_config_and_user_model [michaellennox]
| | |\ \ \
| |_|/ / /
|/| | | |
* | | | |   7e77a82 2016-02-03 | Merge pull request #53 from michaellennox/development [Michael Lennox]
|\ \ \ \ \
* \ \ \ \ \   6d74d4b 2016-02-02 | Merge pull request #39 from michaellennox/development [Michael Lennox]
|\ \ \ \ \ \
| | | | * \ \   7a2e3e2 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into passport_config_and_user_model [michaellennox]
| | | | |\ \ \
| | | | |/ / /
| | | |/| | |
| | | | * | | b1fa7bb 2016-02-03 | User authentication routes are up and running [michaellennox]
| | | | * | | f1da5e8 2016-02-03 | Adds routes to the API for post and delete /sessions, post /users [michaellennox]
| | | | | | * 5ccb0ab 2016-02-03 | styling achievements  purdy [giamir]
| | | | | | *   edbe3d4 2016-02-03 | fix app favicon conflict [giamir]
| | | | | | |\
| | | | |_|_|/
| | | |/| | |
| | | * | | |   981cd3f 2016-02-03 | Merge pull request #55 from michaellennox/passport_config_and_user_model [Tom Bradley]
| | | |\ \ \ \
| | |/ / / / /
| | | | _ / /
| | | |  / /
| | | * | |   adc1baa 2016-02-03 | Merges upstream into local branch [michaellennox]
| | | |\ \ \
| | | |/ / /
| | |/| | |
| | * | | |   1f14b09 2016-02-03 | Merge pull request #51 from Htunny/achievementid_controller [Michael Lennox]
| | |\ \ \ \
| | | | |/ /
| | | |/| |
| | | * | | eadd1f0 2016-02-03 | fixed typo on protractor test [Andrew]
| | | * | |   1324c91 2016-02-03 | Merge branch 'development' of github.com:michaellennox/netstix into achievementid_controller [Andrew]
| | | |\ \ \
| | | |/ / /
| | |/| | |
| | | * | | 3a34ac9 2016-02-03 | create angular controller & factory for achievements/:id [Andrew]
| | |/ / /
| |/| | |
| | | * | 4913b27 2016-02-03 | Sets up passport config and the User model [michaellennox]
| | |/ /
| | * |   bf6cf68 2016-02-03 | Merge pull request #50 from michaellennox/extend_achievement_feature_test [Michael Lennox]
| | |\ \
| |/ / /
| | * | ea990c8 2016-02-03 | Extends achievements feature to include viewing a specic achievemnt [michaellennox]
| |/ /
| | * abada19 2016-02-03 | wip protractor stop after first command [giamir]
| |/
| *   ff50192 2016-02-02 | Merge pull request #38 from trbradley/frisby_tests [Tom Bradley]
| |\
| | * f73bee9 2016-02-02 | Drys out testing URL [Thomas Bradley]
| | * 3050ad3 2016-02-02 | Adds api testing with frisby. 100% green, ready to merge master! [Thomas Bradley]
| |/
| *   9bb241b 2016-02-02 | Merge pull request #34 from giamir/new_achievement_controller [Michael Lennox]
| |\
| | * 739cfd3 2016-02-02 | fix indentation in newAchievementController [giamir]
| | * 6ddf48e 2016-02-02 | drop test database before every protractor feature run [giamir]
| | *   3fdf422 2016-02-02 | Merge branch 'development' of github.com:michaellennox/netstix into new_achievement_controller [giamir]
| | |\
| | |/
| |/|
| * |   ceafb7c 2016-02-02 | Merge pull request #32 from michaellennox/achievement_id_view [Tom Bradley]
| |\ \
| | * \   71f6a73 2016-02-02 | Merges upstream into local [michaellennox]
| | |\ \
| | |/ /
| |/| |
| * | |   5146c05 2016-02-02 | Merge pull request #30 from michaellennox/e2e_achievements_feature_test [Michael Lennox]
| |\ \ \
| | * \ \   c91ee90 2016-02-02 | Merges upstream into local branch" [michaellennox]
| | |\ \ \
| | |/ / /
| |/| | |
| * | | |   fb47a6a 2016-02-02 | Merge pull request #29 from trbradley/new_achievement_routing [Michael Lennox]
| |\ \ \ \
| | * \ \ \   4062088 2016-02-02 | Merge branch 'development' of github.com:michaellennox/netstix into new_achievement_routing [Thomas Bradley]
| | |\ \ \ \
| | |/ / / /
| |/| | | |
| | * | | | f7ff3ff 2016-02-02 | Adds route for specific achievement id [Thomas Bradley]
| | | * | | 3416e5d 2016-02-02 | Updates feature test [michaellennox]
| | | * | |   2ba26c7 2016-02-02 | Merges upstream development into branch [michaellennox]
| | | |\ \ \
| | |_|/ / /
| |/| | | |
| | | * | | bde74ac 2016-02-02 | Protrctor test for creating a new achievement written, awaiting name of repeater for achievementsList [michaellennox]
| | | | * | 4842081 2016-02-02 | Adds routing logic and html template for get achievement/:id [michaellennox]
| | | |/ /
| | |/| |
| | | | * 02d8f27 2016-02-02 | add newAchievementController and relative test [giamir]
| | | | * 731d20f 2016-02-02 | add postAchievementsFactory and relative test [giamir]
| | | | *   77ae965 2016-02-02 | Merge branch 'development' of github.com:michaellennox/netstix into new_achievement_controller [giamir]
| | | | |\
| | |_|_|/
| |/| | |
| * | | |   b77a2e1 2016-02-02 | Merge pull request #27 from giamir/achievements_controller [Michael Lennox]
| |\ \ \ \
| | |/ / /
| |/| | |
| | |/ / /
| |/| | |
| | | | * d096291 2016-02-02 | add scaffolding for new achievement tests [giamir]
| | | |/
| | |/|
| | * | ed7f5b5 2016-02-02 | post reviews remove some superflous code [giamir]
| | * | 735072e 2016-02-02 | add controller in achievements/index partial [giamir]
| | * | afb2a00 2016-02-02 | changing controllers name convention [giamir]
| | * |   1ffe419 2016-02-02 | Merge branch 'development' of github.com:michaellennox/netstix into achievements_controller [giamir]
| | |\ \
| | |/ /
| |/| |
| * | |   34e06b1 2016-02-02 | Merge pull request #21 from trbradley/achievements_routing [Michael Lennox]
| |\ \ \
| | |_|/
| |/| |
| | * |   b056d1e 2016-02-02 | Merge branch 'development' of github.com:michaellennox/netstix into achievements_routing [Thomas Bradley]
| | |\ \
| | |/ /
| |/| |
| * | |   cfe064f 2016-02-02 | Merge pull request #16 from giamir/html_partial_achievements_new [Michael Lennox]
| |\ \ \
| | | * | 6063b65 2016-02-02 | Adds achievements routes, tested with postman [Thomas Bradley]
| | |/ /
| |/| |
| | | * 44bbc1a 2016-02-02 | factory spec passing [Andrew]
| | | * 7f0f304 2016-02-02 | factories pending [Andrew]
| | |/
| | * 62420fd 2016-02-02 | add html partial achievements new [giamir]
| |/
| *   e51993b 2016-02-02 | Merge pull request #15 from giamir/html_partial_achievements_index [Michael Lennox]
| |\
| | * 42131cc 2016-02-02 | add html partial achievements index [giamir]
| |/
| *   b55d153 2016-02-02 | Merge pull request #14 from Htunny/angular_setup [Michael Lennox]
| |\
| | *   401036b 2016-02-02 | Merge branch 'development' of github.com:michaellennox/netstix into htunnybranch [Andrew]
| | |\
| | |/
| |/|
| * |   b1ca4e5 2016-02-02 | Merge pull request #3 from michaellennox/achievements_schema [Michael Lennox]
| |\ \
| | * | 27de27e 2016-02-02 | Adds Achievement model with relevant schema [michaellennox]
| | * | bfa8e00 2016-02-02 | Adds mongoose connections for dev and test environments [michaellennox]
| |/ /
| | * 3ded62f 2016-02-02 | create achievements/new routes and controller [giamir]
| | * f68fde0 2016-02-02 | load angular and bootstrap dependencies in index.html [giamir]
| |/
| *   26a020d 2016-02-01 | Merge pull request #2 from michaellennox/backend_test_config [Michael Lennox]
| |\
| | * 5030fa2 2016-02-01 | Updates npm scripts within package.json [michaellennox]
| | * 77c9f59 2016-02-01 | Reintroduces updated test scripts to package.json [michaellennox]
| | *   a97ec68 2016-02-01 | Merges development into backend_test_config feature branch, fixes conflicts [michaellennox]
| | |\
| | |/
| |/|
| * |   392695a 2016-02-01 | Merge pull request #1 from giamir/frontend_config [Michael Lennox]
| |\ \
|/ / /
| * | 0b62d50 2016-02-01 | setup frontend testing configuration and relative grunt tasks [giamir]
|/ /
| * 15dd139 2016-02-01 | Adds jasmine config [michaellennox]
|/
* 60d6850 2016-02-01 | Adds scaffolding for project [michaellennox]
~~~
