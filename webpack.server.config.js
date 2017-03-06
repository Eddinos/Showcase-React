var fs = require('fs')
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: path.resolve(__dirname, 'server.js'),

  output: {
    filename: 'server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   query: {
      //     presets: [ 'es2015', 'react' ]
      //   }
      // },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass?sourceMap=true'),
        exclude: /(node_modules)\react-toolbox/
      },
      // {
      //   test    : /(\.scss|\.css)$/,
      //   include : /(node_modules)\/react-toolbox/,
      //   loaders : [
      //     require.resolve('style-loader'),
      //     require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      //     require.resolve('sass-loader') + '?sourceMap'
      //   ]
      // },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css', { allChunks: true })
  ]

};
