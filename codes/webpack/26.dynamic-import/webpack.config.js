const path = require("path")
const webpack = require('webpack');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: 'none',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, "dist"),
        publicPath: './' // 开发阶段要使用绝对路径的根目录，因为webpack-dev-server会把这些打包到内存
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack Index',
            template: path.resolve(__dirname, './src/index.html'),
        }),
    ],
    optimization: {
        // usedExports: true,
        // minimize: true,
        // concatenateModules: true
        // sideEffects: true
        // splitChunks: {
        //     minSize: 100,
        //     chunks: "all"
        // }
    },
    devServer: {
        port: 4000,
        contentBase: [path.join(__dirname, "dist"), path.join(__dirname, "public")],
        hotOnly: true
    }
}