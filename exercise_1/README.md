# Gulp - BrowserSync, Jade, Sass starter templates.

[![npm version](https://badge.fury.io/js/gulp-browsersync-jade-sass-starter.svg)](https://badge.fury.io/js/gulp-browsersync-jade-sass-starter)
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/piyushkalasariya/gulp-browsersync-jade-sass-starter/blob/master/LICENSE)

This is a Jade and Sass starter project using gulp for task automation. 

### How to install

Clone this repository by using `git` command
```
git clone https://github.com/piyushkalasariya/gulp-browsersync-jade-sass-starter
```

Or, install it by using `node.js` command
```
npm install gulp-browsersync-jade-sass-starter@1.0.4
```

### How to run

First, run `npm` command to install all dependencies.
```
npm install
```

Then, run `gulp` command to start server and compile jade and sass files.
```
gulp
```

### Features

1. Crossbrowser testing by using BrowserSync.
2. Handle errors and notify it through System messages.
3. Sass file with comman mixins(with usage) and variables.
4. Jade templates with partials and data json.

### This project uses.

1. [browser-sync](https://github.com/browsersync/browser-sync) lauches the server for crossbrowser testing.
2. [gulp-jade](https://github.com/phated/gulp-jade) compile your jade files.
3. [gulp-data](https://github.com/colynb/gulp-data) passes the data to jade. this project uses JSON as the data source.
4. [gulp-sass](https://github.com/dlmanning/gulp-sass) compile your sass files.
5. [gulp-plumber](https://github.com/floatdrop/gulp-plumber) Prevent pipe breaking caused by errors from gulp plugins.
6. [gulp-notify](https://github.com/mikaelbr/gulp-notify) notification plugin for gulp.

### MIT Licence
```
Copyright (c) 2016 Piyush Kalsariya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```