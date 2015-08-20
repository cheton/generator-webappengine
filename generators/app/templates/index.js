var path = require('path');
var webappengine = require('webappengine');

webappengine({
    port: 80,
    routes: [
        {
            type: 'server',
            route: '/',
            server: path.resolve(__dirname, 'app/app')
        }
    ]
});
