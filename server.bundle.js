/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var path = __webpack_require__(3);
	var express = __webpack_require__(4);
	var app = express();
	var PORT = process.env.PORT || 8080;
	var compression = __webpack_require__(5);

	// using webpack-dev-server and middleware in development environment
	if (process.env.NODE_ENV !== 'production') {
	  var webpackDevMiddleware = __webpack_require__(6);
	  var webpackHotMiddleware = __webpack_require__(7);
	  var webpack = __webpack_require__(8);
	  var config = __webpack_require__(9);
	  var compiler = webpack(config);

	  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
	  app.use(webpackHotMiddleware(compiler));
	}

	app.use(express.static(path.join(__dirname, 'dist')));

	app.get('*', function (req, res) {
	  match({ routes: routes, location: req.url }, function (err, redirect, props) {
	    // in here we can make some decisions all at once
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      // we haven't talked about `onEnter` hooks on routes, but before a
	      // route is entered, it can redirect. Here we handle on the server.
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // if we got props then we matched a route and can render
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	app.listen(PORT, function (error) {
	  if (error) {
	    console.error(error);
	  } else {
	    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

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

	var webpack = __webpack_require__(8);
	var path = __webpack_require__(3);
	var HTMLWebpackPlugin = __webpack_require__(10);

	var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	  template: __dirname + '/index.html',
	  filename: 'index.html',
	  inject: 'body'
	});

	module.exports = {
	  entry: ['./app/index.js'],
	  module: {
	    loaders: [{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015', 'react', 'react-hmre']
	      }
	    }, {
	      test: /\.scss$/,
	      loaders: ['style', 'css', 'sass']
	    }, {
	      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
	      loader: 'url-loader?limit=100000'
	    }]
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
	  plugins: [new webpack.optimize.OccurenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin(),
	  // new webpack.HotModuleReplacementPlugin(),
	  HTMLWebpackPluginConfig]
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("html-webpack-plugin");

/***/ }
/******/ ]);