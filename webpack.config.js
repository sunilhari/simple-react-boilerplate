const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    inject: 'body',
    filename: 'index.html'
})
module.exports = {
    entry: __dirname + '/src/index.js',
    watch:true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'index.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig],
    "devServer": {
        "contentBase": __dirname+"./build",
        "disableHostCheck": true,
        "historyApiFallback": true,
        "host": "127.0.0.1",
        "port": 8080,
        "hot": true
    }
}