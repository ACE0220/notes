const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: '[name]-[hash:6].bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Diff算法',
            template: './public/index.html'
        }),
    ],
    devServer: {
        port: 4000,
        static: '/'
    }
}