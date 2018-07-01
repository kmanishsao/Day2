const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CleanwebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    enrty: {
        app: './src/index.js',
        printMe:'./src/print.js'
    },
    plugin: [
        new CleanwebpackPlugin(['dist']),
        new HtmlwebpackPlugin({
            title: 'Output Management in Production'
        }),
    ],
    Output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }

};