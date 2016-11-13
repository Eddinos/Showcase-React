// const path = require('path')
// const webpack = require('webpack')
//
// module.exports = {
//   devtool: 'source-map',
//
//   entry: [
//     './app/index'
//   ],
//
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: 'transformed.js',
//     publicPath: '/build/'
//   },
//
//   plugins: [
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.UglifyJsPlugin({
//       minimize: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.DefinePlugin({
//       'process.env': {
//         'NODE_ENV': JSON.stringify('production')
//       }
//     })
//   ],
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
//   }
// }


var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;
