const path = require("path")
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
                test: /.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attributes: {
                            list: [
                                {
                                  tag: 'img',
                                  attribute: 'data-src',
                                  type: 'src',
                                },
                                {
                                  tag: 'a',
                                  attribute: 'href',
                                  type: 'srcset',
                                },
                              ],
                        }
                    }
                }
            },
            {
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.css$/,
                use: ["style-loader",'css-loader']
            },
            {
                test: /.png$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10 * 1024
                    }
                }
            }
        ]
    }
}