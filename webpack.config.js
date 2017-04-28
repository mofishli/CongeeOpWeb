var path = require('path');
var webpack = require('webpack');

function createBundle(entryfile) {
    var str = entryfile;
    var index = str.lastIndexOf("/");
    var fileName = str.substring(index + 1, str.length);
    var constantsPath = "public/src";
    var distpath = 'dist' + str.substring(str.indexOf(constantsPath) + constantsPath.length, index);
    var bundleName = fileName.split(".")[0] + ".bundle.js"
    console.log("正在打包jsbundle------" + distpath+"/"+bundleName)
    return {
        devtool: 'cheap-module-eval-source-map',
        entry: ['eventsource-polyfill', 'webpack-hot-middleware/client', entryfile],
        output: {path: path.join(__dirname, distpath), filename: bundleName,},
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {
                    warnings: false
                }
            })],
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel'],
                }]}
        }
}

module.exports = [
    createBundle('./public/src/login/index.js'),
    createBundle('./public/src/home/index.js'),
]