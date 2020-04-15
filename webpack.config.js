const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    mode: 'production',
    entry: './src/assets/scripts/App.js',
    output: {
        filename: 'App.js',
        path: path.resolve(__dirname, './src/temp/scripts'),
    },
    // devServer: {
    //     index: 'index.html',
    //     filename: 'bundle.js',
    //     open: true,
    //     openPage: './build/index.html'
    // },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};