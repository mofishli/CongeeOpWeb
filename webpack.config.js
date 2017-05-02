var path = require('path');
var webpack = require('webpack');


var jsxLoaders = [
    {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015'
    },
    {
        test: /\.css|scss$/,
        loader:  "style!css!sass!postcss",
    },

];

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
            loaders: jsxLoaders
        }
}}

module.exports = [
   // createBundle('./public/src/login/index.js'),
    createBundle('./public/src/home/index.js'),
]