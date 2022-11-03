const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

class MyPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            // compilation 此次打包过程中的上下文
            // compilation.assets 资源文件信息，是一个对象,key是文件名称，value是source函数
            for(const name in compilation.assets) {
                if(name.endsWith('.js')) { // 如果以js结尾
                    const contents = compilation.assets[name].source(); // 执行source函数能得到文件内容
                    const withoutComment = contents.replace(/\/\*\*+\*\//g, ''); // 替换
                    compilation.assets[name] = {
                        source: () => withoutComment, // 返回新的内容
                        size: () => withoutComment.length // 内容大小
                    }
                }
            }
        })
    }
}

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
        }),
        new MyPlugin()
    ]
}