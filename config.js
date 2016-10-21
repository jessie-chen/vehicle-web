

require('babel-polyfill');


//  http://test.dianjinhe.com/
// http://10.10.5.64/

module.exports = Object.assign({
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || '3000',
    app: "mobile_app",
    proxy: [
        { pattern: "/api/*", target: "http://test.dianjinhe.com/" }
    ]
});
