'use strict';

var path = require('path');
var generators = require('yeoman-generator');

var WebAppEngineGenerator = generators.Base.extend({
    constructor: function () {
        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);
    },
    init: function() {
        this.on('end', function () {
            if (this.options['skip-install']) {
                return;
            }

            this.installDependencies({
                bower: true,
                npm: true
            });
        });
    },
    prompting: function() {
        var done = this.async();
        this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your app\'s name',
                default: this.appname // Default to current folder name
            },
            {
                type: 'confirm',
                name: 'includeApp',
                message: 'Would you like to include Node.js app server?',
                default: true
            }
        ], function(answers) {
            this.name = answers.name;
            this.includeApp = answers.includeApp;
            done();
        }.bind(this));
    },
    copyFiles: function() {
        var filemaps = [
            'config',
            'dist',
            'gulp',
            'web',
            this.includeApp ? 'app' : { src: '_index.html', dest: 'web/index.html' },
            { src: '_gulpfile.js', dest: 'gulpfile.js' },
            { src: 'bowerrc', dest: '.bowerrc' },
            { src: 'eslintrc', dest: '.eslintrc' },
            { src: 'gitignore', dest: '.gitignore' }
        ];

        filemaps.forEach(function(filemap) {
            if ( ! filemap) {
                return;
            }

            if (typeof filemap === 'object') {
                this.fs.copy(path.join(this.sourceRoot(), filemap.src), this.destinationPath(filemap.dest));
            } else if (typeof filemap === 'string') {
                this.fs.copy(path.join(this.sourceRoot(), filemap), this.destinationPath(filemap));
            }
        }.bind(this));

        var context = {
            name: this.name
        };
        this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), context);
        this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), context);

    }
});

module.exports = WebAppEngineGenerator;
