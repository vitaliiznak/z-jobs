const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use(proxy('/api', {
    //     target: 'http://localhost:4000/',
    //     "pathRewrite": {
    //         "^/api": ""
    //     },
    //     "changeOrigin": true
    // }));
    // app.use(proxy('/graphql', { target: 'http://localhost:4000/' }));
};