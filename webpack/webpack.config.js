"use strict";

require('babel-polyfill');

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const development = require('./dev.config');
const production = require('./prod.config');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist')
};


// babelrc
const babelrc = fs.readFileSync(path.join(__dirname, '../.babelrc'));
let babelConfig;
try {
    babelConfig = JSON.parse(babelrc);
} catch (err) {
    console.error('==> ERROR: Error parsing your .babelrc.');
    console.error(err);
}


// pages
const pages = ["login", "map", "bus_overview"];

const entry = pages.reduce((total, curr) => {
    let arr = ["babel-polyfill", path.join(PATHS.src, "js/app", curr)];
    if (TARGET === 'start-dev') {
        arr.push('webpack-hot-middleware/client');
    }
    total[curr] = arr;
    return total;
}, {});

// console.log(entry);

const common = {

    entry: entry,

    output: {
        path: PATHS.dist,
        filename: '[name].bundle.js',
        chunkFilename: "[id].chunk.js",
        publicPath: '/'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.scss']
    },

    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.scss$/, loader: "style!css?localIdentName=[path][name]--[local]!postcss-loader!sass"},
            {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"},
            {test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/, query: babelConfig},
            {test: /\.png$/, loader: 'file?name=[path][name].[ext]'},
            {test: /\.jpg/, loader: 'file?name=[path][name].[ext]'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\.html$/, loader: 'raw-loader'}
        ]
    },

    plugins: [
        new ExtractTextPlugin('bundle.css'),
        // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new webpack.ProvidePlugin({
            'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};


if (TARGET === 'start' || TARGET === 'start-dev' || !TARGET) {
    module.exports = merge(development, common);
}

if (TARGET === 'build' || !TARGET) {
    module.exports = merge(production, common);
}
