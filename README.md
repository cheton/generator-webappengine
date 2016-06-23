# generator-webappengine

[![NPM](https://nodei.co/npm/generator-webappengine.png?downloads=true&stars=true)](https://www.npmjs.com/package/generator-webappengine)

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

Your [index.js](/generators/app/templates/index.js) might look like this:
 ```js
var path = require('path');
var webappengine = require('webappengine');

webappengine({
    port: 8000,
    routes: [
        {
            type: 'server',
            route: '/',
            // An absolute path is recommended to use
            server: path.resolve(__dirname, 'app/app')
        }
    ]
});
```

## License

Copyright (c) 2015 Cheton Wu

Licensed under the [MIT License](LICENSE).
