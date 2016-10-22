
const path = require('path');
const webpack = require('webpack');

module.exports = {
    
    devtool: '#eval-source-map',

    // entry: [
    //     'webpack-hot-middleware/client'
    // ],

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("development")
            },
            __DEVELOPMENT__: true
        })
    ]
};

