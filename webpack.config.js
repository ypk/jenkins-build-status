var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var webpack = require('webpack');

var appPath = path.resolve(__dirname, 'src/app', 'app.js');
var buildPath = path.resolve(__dirname, 'src');

var isProd = true;

var webpackConfig = {
    devtool: '#inline-source-map',
    entry: [
        appPath
    ],
    module: {
        loaders: [{
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
              }, {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    output: {
        path: path.join(__dirname + "/dist"),
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: buildPath,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};

if(isProd) {
    webpackConfig.plugins.push(
      new HtmlWebpackPlugin({
          title: 'WTR - Environments',
          template: 'src/index.html'
      }),
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        compress: true,
      })
    );
}

module.exports = webpackConfig;
