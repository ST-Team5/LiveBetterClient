LiveBetterClient
================

[![Build Status](https://travis-ci.org/ST-Team5/LiveBetterClient.svg?branch=master)](https://travis-ci.org/ST-Team5/LiveBetterClient)

The current build can be found at [https://st-team5.github.io/LiveBetterClient/](https://st-team5.github.io/LiveBetterClient/). Its raw contents are automatically added in the `gh-pages` branch (see below).

How to
======

Prepare your development environment
------------------------------------
1. Checkout this repository and make sure that your local copy has write (push) permission. In case it doesn't, you'll have to set the appropriate remote.
1. Install Node.js, if necessary.
1. Open a terminal.
1. Install yeoman globally: `npm install -g yo`
1. Install grunt globally: `npm install -g grunt grunt-cli`
1. `cd` to the directory of this project
1. Run `npm install` in the directory of this project to install all dependencies.
1. Run `bower install`

Run a local webserver for development
-------------------------------------
Run `grunt serve` in a terminal

Now open [http://localhost:9000/](http://localhost:9000/) (if it isn't already done automatically for you). Grunt will watch for changes, so you just need to save your files and the server (and probably even the browser!) will automatically reload, showing your changes immediately.

Add new views/routes/controllers/etc.
-------------------------------------
You may use [the different goodies](https://github.com/yeoman/generator-angular) provided by the Yeoman Angular generator. For example, ` yo angular:route foo` to add a route+view+controller named _foo_.

Deploy to GitHub pages
----------------------
1. Commit and push your changes.
1. Verify that everything is OK and build the project with `grunt`.
1. Run `grunt buildcontrol:pages`. It will automatically push the changes to GitHub pages.
1. Open https://st-team5.github.io/LiveBetterClient/ to verify that everything is OK there as well.

Build the project manually
--------------------------
Just run `grunt` with no arguments. After a few seconds, the build output will be in `dist/`, if everything is OK.

Run tests manually
------------------
Run `grunt test`. The tests will run on PhantomJS using Karma.
