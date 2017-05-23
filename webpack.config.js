var path = require("path")

module.exports = {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
        path: path.resolve(__dirname + '/bin'),
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}