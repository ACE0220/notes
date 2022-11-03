const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "dist"),
        publicPath: './'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack Plugins',
            meta: {
                viewport: "width=device-width"
            },
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack about',
            meta: {
                viewport: "width=device-width"
            },
            template: './src/about.html',
            filename: 'about.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './public/**',
                    to: './'
                }
            ]
        })
    ]
}