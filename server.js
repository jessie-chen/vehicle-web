
const fs = require('fs');
const path = require('path');
const express = require('express');
const http = require('http');
const httpProxy = require('http-proxy');


const app = express();

const root = __dirname;
const config = require(path.join(root, "config"));
const host = config.host;
const port = config.port;

const target = 'http://' + host + ':' + port;
const proxy = httpProxy.createProxyServer({});


(function init_webpack () {
    const webpack = require('webpack');
    const webpackConfig = require(path.join(root, "webpack", "webpack.config.js"));

    const devMiddleware = require('webpack-dev-middleware');
    const hotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);

    // console.log(webpackConfig);

    const serverOptions = {
        contentBase: target,
        quiet: true,
        noInfo: true,
        hot: true,
        inline: true,
        lazy: false,
        publicPath: webpackConfig.output.publicPath
    };

    app.use(devMiddleware(compiler, serverOptions));
    app.use(hotMiddleware(compiler, {reload: true }));
    app.use(express.static(root + "/"));
})();


config.proxy.forEach(item => {
    app.route(item.pattern).all((req, res) => {
        return proxy.web(req, res, {
            target: item.target
        });
    });
});

// spa
// app.get(/.*/, function (req, res) {
//     res.sendFile(path.join(root,'index.html'));
// });

const server = http.createServer(app);
server.listen(port, function onListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> 💻  Open http://%s:%s in a browser to view the app.', host, port);
    }
});
