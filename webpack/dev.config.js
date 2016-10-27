
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
            __SERVER__     : false,
            __DEVELOPMENT__: false,
            __DEVTOOLS__   : false
        })
    ],

    devServer: {
        hot: true,
        inline: true,
        contentBase: "src",
        quiet: true,
        host: "0.0.0.0",
        port: 3000,
        stats: { colors: true },
        proxy: {
            "/a": "http://localhost:8080"
        }
    }
};

