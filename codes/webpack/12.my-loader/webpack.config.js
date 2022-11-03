const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "dist"),
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /.md$/,
                use:['html-loader', './markdown-loader'],
            },
        ]
    },
    
}