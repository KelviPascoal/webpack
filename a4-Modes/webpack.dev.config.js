const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer: {
       static: {
           directory: path.resolve(__dirname, './dist'),
       },
       devMiddleware: {
           index: false
       }
    },
    plugins: [
        new TerserPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Modes'
        })
    ],

}