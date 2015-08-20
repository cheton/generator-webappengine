# generator-webappengine

[![NPM](https://nodei.co/npm/generator-webappengine.png?downloads=true&stars=true)](https://nodei.co/npm/webappengine/)    

A Yeoman Generator for [WebAppEngine](https://github.com/cheton/webappengine).  It includes Gulp, Browserify, Babelify, Stylus, Handlebars, i18next, and React.

## Installation
Follow the steps to run the generator:
```bash
$ npm install -g yo
$ npm install -g generator-webappengine
$ yo webappengine
```

Once completed, you have to install NPM packages and Bower components, and run the `gulp` command to build your project.
```bash
$ npm install
$ bower install
$ gulp
```

Now you can run `node app/main.js` to launch your web app, or use webappengine to load [app.js](/generators/app/templates/app/app.js). For example:
 ```js
 var webappengine = require('webappengine');
 webappengine({
     port: 80,
     routes: [
         {
             type: 'server',
             route: '/',
             server: '/path/to/your/project/app/app'
         }
     ]
 });
 ```
