var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');


/*var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/dist/index.html',
  filename: '/index.html',
  inject: 'body'
});*/

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
          presets: [ 'es2015', 'react', 'react-hmre' ],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
        exclude: /(node_modules)\react-toolbox/
      },
      {
        test    : /(\.scss|\.css)$/,
        include : /(node_modules)\/react-toolbox/,
        loaders : [
          require.resolve('style-loader'),
          require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          require.resolve('sass-loader') + '?sourceMap'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|pdf|jpeg|ico)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', 'css', 'scss'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  postcss: [autoprefixer],
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};
