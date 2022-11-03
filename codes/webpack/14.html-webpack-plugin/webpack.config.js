const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
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
        })
    ]
}