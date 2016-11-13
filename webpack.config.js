// var webpack = require('webpack');
// var HTMLWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });
//
// module.exports = {
//   entry: __dirname + '/app/index.js',
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: [ 'es2015', 'react', 'react-hmre' ]
//         }
//       },
//       {
//           test: /\.scss$/,
//           loaders: [ 'style', 'css', 'sass' ]
//       },
//       {
//         test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//         loader: 'url-loader?limit=100000'
//       }
//     ]
//   },
//   output: {
//     filename: 'transformed.js',
//     path: __dirname + '/build ',
//     publicPath: '/'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     HTMLWebpackPluginConfig
//   ]
// };

var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');


var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react', 'react-hmre' ]
        }
      },
      {
          test: /\.scss$/,
          loaders: [ 'style', 'css', 'sass' ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', 'html']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    HTMLWebpackPluginConfig
  ]
};
