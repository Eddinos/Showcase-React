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

	var _reactRouter = __webpack_require__(1);

	var _routes = __webpack_require__(2);

	var _routes2 = _interopRequireDefault(_routes);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(252);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var path = __webpack_require__(253);
	var express = __webpack_require__(254);
	var app = express();
	var PORT = process.env.PORT || 8080;
	var compression = __webpack_require__(255);


	app.use(express.static(path.join(__dirname, 'dist')));

	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
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
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404);
	      res.send(render404());
	    }
	  });
	});

	function render404() {
	  return '\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="utf-8">\n      <title>Eddine shows off</title>\n      <link rel="icon" type="img/ico" href="ed.ico">\n      <style>\n        .msg404 {\n          position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: 5em;font-family: \'Century Gothic\'\n        }\n        a {color: #373277}\n      </style>\n    </head>\n    <body>\n      <div class="msg404">\n        <div>You\'ve met with a terrible fate haven\'t you ?</div>\n        <a href="/">Get back home</a>\n      </div>\n    </script>\n  </body>\n  </html>\n   ';
	}

	function renderPage(appHtml) {
	  return '\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="utf-8">\n      <title>Eddine shows off</title>\n      <link rel="icon" type="img/ico" href="/ed.ico">\n      <link href=\'//fonts.googleapis.com/css?family=Galada\' rel=\'stylesheet\'>\n    </head>\n    <body>\n      <div id=\'root\'/>\n      <script src="/bundle.js"></script>\n\n    </script>\n  </body>\n  </html>\n   ';
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

	module.exports = require("react-router");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(1);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	var _Pikachu = __webpack_require__(222);

	var _Pikachu2 = _interopRequireDefault(_Pikachu);

	var _Home = __webpack_require__(173);

	var _Home2 = _interopRequireDefault(_Home);

	var _Portfolio = __webpack_require__(224);

	var _Portfolio2 = _interopRequireDefault(_Portfolio);

	var _Project = __webpack_require__(231);

	var _Project2 = _interopRequireDefault(_Project);

	var _Resume = __webpack_require__(239);

	var _Resume2 = _interopRequireDefault(_Resume);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/pikachu', component: _Pikachu2.default }),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/portfolio', component: _Portfolio2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: 'project/:projectID', component: _Project2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: '/resume', component: _Resume2.default })
	);

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(5);

	var _Layout = __webpack_require__(6);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Home = __webpack_require__(173);

	var _Home2 = _interopRequireDefault(_Home);

	var _ed = __webpack_require__(221);

	var _ed2 = _interopRequireDefault(_ed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _Layout2.default,
	        { className: 'layout' },
	        this.props.children || _react2.default.createElement(_Home2.default, null)
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(7);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(171);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Layout(_ref) {
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_Header2.default, null),
	    children,
	    _react2.default.createElement(_Footer2.default, null)
	  );
	}

	Layout.propTypes = {
	  children: _react.PropTypes.element.isRequired
	};

	exports.default = Layout;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	__webpack_require__(8);

	var _AppBar = __webpack_require__(9);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(3);
	//import AppBar from 'material-ui/AppBar';

	// import { AppBar } from 'react-toolbox/lib/app_bar';
	// import Navigation from 'react-toolbox/lib/navigation';
	// import Link from 'react-toolbox/lib/Link';


	var GithubIcon = function GithubIcon() {
	  return React.createElement(
	    'svg',
	    { viewBox: '0 0 284 277' },
	    React.createElement(
	      'g',
	      null,
	      React.createElement('path', { d: 'M141.888675,0.0234927555 C63.5359948,0.0234927555 0,63.5477395 0,141.912168 C0,204.6023 40.6554239,257.788232 97.0321356,276.549924 C104.12328,277.86336 106.726656,273.471926 106.726656,269.724287 C106.726656,266.340838 106.595077,255.16371 106.533987,243.307542 C67.0604204,251.890693 58.7310279,226.56652 58.7310279,226.56652 C52.2766299,210.166193 42.9768456,205.805304 42.9768456,205.805304 C30.1032937,196.998939 43.9472374,197.17986 43.9472374,197.17986 C58.1953153,198.180797 65.6976425,211.801527 65.6976425,211.801527 C78.35268,233.493192 98.8906827,227.222064 106.987463,223.596605 C108.260955,214.426049 111.938106,208.166669 115.995895,204.623447 C84.4804813,201.035582 51.3508808,188.869264 51.3508808,134.501475 C51.3508808,119.01045 56.8936274,106.353063 65.9701981,96.4165325 C64.4969882,92.842765 59.6403297,78.411417 67.3447241,58.8673023 C67.3447241,58.8673023 79.2596322,55.0538738 106.374213,73.4114319 C117.692318,70.2676443 129.83044,68.6910512 141.888675,68.63701 C153.94691,68.6910512 166.09443,70.2676443 177.433682,73.4114319 C204.515368,55.0538738 216.413829,58.8673023 216.413829,58.8673023 C224.13702,78.411417 219.278012,92.842765 217.804802,96.4165325 C226.902519,106.353063 232.407672,119.01045 232.407672,134.501475 C232.407672,188.998493 199.214632,200.997988 167.619331,204.510665 C172.708602,208.913848 177.243363,217.54869 177.243363,230.786433 C177.243363,249.771339 177.078889,265.050898 177.078889,269.724287 C177.078889,273.500121 179.632923,277.92445 186.825101,276.531127 C243.171268,257.748288 283.775,204.581154 283.775,141.912168 C283.775,63.5477395 220.248404,0.0234927555 141.888675,0.0234927555' })
	    )
	  );
	};

	// const AppBarTest = () => (
	//   <AppBar title='NTMFDP' leftIcon='menu' rightIcon={<GithubIcon />}>
	//     <Navigation type='horizontal'>
	//       <Link href='http://' label='Inbox' icon='inbox' />
	//       <Link href='http://' active label='Profile' icon='person' />
	//     </Navigation>
	//   </AppBar>
	// );

	var Header = function (_Component) {
	  _inherits(Header, _Component);

	  function Header() {
	    _classCallCheck(this, Header);

	    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(_AppBar2.default, null);
	    }
	  }]);

	  return Header;
	}(_react.Component);

	exports.default = Header;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(1);

	var _AppBar = __webpack_require__(10);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	var _NavLink = __webpack_require__(11);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _IconButton = __webpack_require__(13);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _lightBaseTheme = __webpack_require__(140);

	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

	var _getMuiTheme = __webpack_require__(144);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _viewHeadline = __webpack_require__(157);

	var _viewHeadline2 = _interopRequireDefault(_viewHeadline);

	var _clear = __webpack_require__(169);

	var _clear2 = _interopRequireDefault(_clear);

	var _ed = __webpack_require__(170);

	var _ed2 = _interopRequireDefault(_ed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = {
	  icon: {
	    width: 48,
	    height: 48,
	    color: 'grey'
	  },
	  medium: {
	    width: 96,
	    height: 96,
	    padding: 24
	  }
	};

	var AppBar = function (_Component) {
	  _inherits(AppBar, _Component);

	  function AppBar(props) {
	    _classCallCheck(this, AppBar);

	    var _this = _possibleConstructorReturn(this, (AppBar.__proto__ || Object.getPrototypeOf(AppBar)).call(this, props));

	    var burgerStyleMedium = Object.assign({}, style.medium);
	    var closeStyleMedium = Object.assign({ display: 'none' }, style.medium);

	    _this.state = {
	      barStyle: {
	        bgColor: '',
	        height: '9em'
	      },
	      burgerStyle: burgerStyleMedium,
	      closeStyle: closeStyleMedium
	    };
	    return _this;
	  }

	  // Seems to be required w/ mui even if I'm just using an Icon


	  _createClass(AppBar, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default) };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      window.addEventListener('scroll', function () {
	        _this2.handleScroll();
	      });
	    }

	    // Trying not to mess with state object in case I make it richer later
	    // Obviously I didnt understand how setState worked when i wrote that

	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {
	      this.setState(function (prevState, props) {
	        var newState = prevState;
	        if (pageYOffset < 50) {
	          newState.barStyle.bgColor = '';
	          newState.barStyle.height = '9em';
	        } else {
	          newState.barStyle.bgColor = 'rgba(0, 255, 255, 0.8)';
	          // Cte media query lulz
	          var height = screen.width < 480 ? '6em' : '3em';
	          newState.barStyle.height = height;
	        }
	      });
	    }
	  }, {
	    key: 'displayMobileMenu',
	    value: function displayMobileMenu(show) {
	      this.setState(function (state, props) {
	        state.burgerStyle.display = show ? 'none' : 'block';
	        state.closeStyle.display = show ? 'block' : 'none';
	        // I should improve this badly
	        document.querySelector('.mobile-menu').style.display = show ? 'block' : 'none';
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'appBar', style: {
	            backgroundColor: this.state.barStyle.bgColor,
	            height: this.state.barStyle.height,
	            transition: 'height 0.7s, background-color 0.5s'
	          } },
	        _react2.default.createElement(
	          'a',
	          { href: '/', className: 'logo' },
	          _react2.default.createElement('img', { src: _ed2.default, alt: 'edcorp', style: { height: this.state.barStyle.height } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'app-bar-navigation' },
	          _react2.default.createElement(
	            _reactRouter.IndexLink,
	            { activeClassName: 'active', to: '/', className: 'nav-button' },
	            'Home'
	          ),
	          _react2.default.createElement(
	            _NavLink2.default,
	            { activeClassName: 'active', to: '/portfolio', className: 'nav-button' },
	            'Portfolio'
	          ),
	          _react2.default.createElement(
	            _NavLink2.default,
	            { activeClassName: 'active', to: '/resume', className: 'nav-button' },
	            'Resume'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'app-bar-nav-mobile' },
	          _react2.default.createElement(
	            _IconButton2.default,
	            {
	              className: 'menu-button--burger',
	              iconStyle: style.icon,
	              style: this.state.burgerStyle,
	              onClick: function onClick() {
	                _this3.displayMobileMenu(true);
	              }
	            },
	            _react2.default.createElement(_viewHeadline2.default, null)
	          ),
	          _react2.default.createElement(
	            _IconButton2.default,
	            {
	              className: 'menu-button--cross',
	              iconStyle: style.icon,
	              style: this.state.closeStyle,
	              onClick: function onClick() {
	                _this3.displayMobileMenu(false);
	              }
	            },
	            _react2.default.createElement(_clear2.default, null)
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'mobile-menu' },
	          _react2.default.createElement(
	            'div',
	            { className: 'nav' },
	            _react2.default.createElement(
	              _reactRouter.IndexLink,
	              { onClick: function onClick() {
	                  _this3.displayMobileMenu(false);
	                }, activeClassName: 'active', to: '/', className: 'nav-button' },
	              'Home'
	            ),
	            _react2.default.createElement(
	              _NavLink2.default,
	              { onClick: function onClick() {
	                  _this3.displayMobileMenu(false);
	                }, activeClassName: 'active', to: '/portfolio', className: 'nav-button' },
	              'Portfolio'
	            ),
	            _react2.default.createElement(
	              _NavLink2.default,
	              { onClick: function onClick() {
	                  _this3.displayMobileMenu(false);
	                }, activeClassName: 'active', to: '/resume', className: 'nav-button' },
	              'Resume'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return AppBar;
	}(_react.Component);

	exports.default = AppBar;


	AppBar.childContextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(1);

	__webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavLink = function (_Component) {
	  _inherits(NavLink, _Component);

	  function NavLink() {
	    _classCallCheck(this, NavLink);

	    return _possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).apply(this, arguments));
	  }

	  _createClass(NavLink, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	    }
	  }]);

	  return NavLink;
	}(_react.Component);

	exports.default = NavLink;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _IconButton = __webpack_require__(14);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _IconButton2.default;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _propTypes = __webpack_require__(109);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _EnhancedButton = __webpack_require__(110);

	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

	var _FontIcon = __webpack_require__(137);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _Tooltip = __webpack_require__(139);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _childUtils = __webpack_require__(111);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;


	  return {
	    root: {
	      position: 'relative',
	      boxSizing: 'border-box',
	      overflow: 'visible',
	      transition: _transitions2.default.easeOut(),
	      padding: baseTheme.spacing.iconSize / 2,
	      width: baseTheme.spacing.iconSize * 2,
	      height: baseTheme.spacing.iconSize * 2,
	      fontSize: 0
	    },
	    tooltip: {
	      boxSizing: 'border-box'
	    },
	    overlay: {
	      position: 'relative',
	      top: 0,
	      width: '100%',
	      height: '100%',
	      background: baseTheme.palette.disabledColor
	    },
	    disabled: {
	      color: baseTheme.palette.disabledColor,
	      fill: baseTheme.palette.disabledColor,
	      cursor: 'not-allowed'
	    }
	  };
	}

	var IconButton = function (_Component) {
	  (0, _inherits3.default)(IconButton, _Component);

	  function IconButton() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, IconButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      tooltipShown: false
	    }, _this.handleBlur = function (event) {
	      _this.hideTooltip();
	      if (_this.props.onBlur) _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      _this.showTooltip();
	      if (_this.props.onFocus) _this.props.onFocus(event);
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.refs.button.isKeyboardFocused()) _this.hideTooltip();
	      if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	    }, _this.handleMouseOut = function (event) {
	      if (_this.props.disabled) _this.hideTooltip();
	      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.showTooltip();
	      if (_this.props.onMouseEnter) _this.props.onMouseEnter(event);
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      if (keyboardFocused && !_this.props.disabled) {
	        _this.showTooltip();
	        if (_this.props.onFocus) _this.props.onFocus(event);
	      } else {
	        _this.hideTooltip();
	        if (_this.props.onBlur) _this.props.onBlur(event);
	      }

	      if (_this.props.onKeyboardFocus) {
	        _this.props.onKeyboardFocus(event, keyboardFocused);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(IconButton, [{
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus() {
	      this.refs.button.setKeyboardFocus();
	    }
	  }, {
	    key: 'showTooltip',
	    value: function showTooltip() {
	      if (this.props.tooltip) {
	        this.setState({ tooltipShown: true });
	      }
	    }
	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip() {
	      if (this.props.tooltip) this.setState({ tooltipShown: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          disabled = _props.disabled,
	          disableTouchRipple = _props.disableTouchRipple,
	          children = _props.children,
	          iconClassName = _props.iconClassName,
	          onKeyboardFocus = _props.onKeyboardFocus,
	          tooltip = _props.tooltip,
	          tooltipPositionProp = _props.tooltipPosition,
	          tooltipStyles = _props.tooltipStyles,
	          touch = _props.touch,
	          iconStyle = _props.iconStyle,
	          other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'disableTouchRipple', 'children', 'iconClassName', 'onKeyboardFocus', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);

	      var fonticon = void 0;

	      var styles = getStyles(this.props, this.context);
	      var tooltipPosition = tooltipPositionProp.split('-');

	      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
	        ref: 'tooltip',
	        label: tooltip,
	        show: this.state.tooltipShown,
	        touch: touch,
	        style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyles),
	        verticalPosition: tooltipPosition[0],
	        horizontalPosition: tooltipPosition[1]
	      }) : null;

	      if (iconClassName) {
	        var iconHoverColor = iconStyle.iconHoverColor,
	            iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);


	        fonticon = _react2.default.createElement(
	          _FontIcon2.default,
	          {
	            className: iconClassName,
	            hoverColor: disabled ? null : iconHoverColor,
	            style: (0, _simpleAssign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
	            color: this.context.muiTheme.baseTheme.palette.textColor
	          },
	          children
	        );
	      }

	      var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;

	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        (0, _extends3.default)({}, other, {
	          ref: 'button',
	          centerRipple: true,
	          disabled: disabled,
	          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
	          disableTouchRipple: disableTouchRipple,
	          onBlur: this.handleBlur,
	          onFocus: this.handleFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onMouseOut: this.handleMouseOut,
	          onKeyboardFocus: this.handleKeyboardFocus
	        }),
	        tooltipElement,
	        fonticon,
	        (0, _childUtils.extendChildren)(children, {
	          style: childrenStyle
	        })
	      );
	    }
	  }]);
	  return IconButton;
	}(_react.Component);

	IconButton.muiName = 'IconButton';
	IconButton.defaultProps = {
	  disabled: false,
	  disableTouchRipple: false,
	  iconStyle: {},
	  tooltipPosition: 'bottom-center',
	  touch: false
	};
	IconButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? IconButton.propTypes = {
	  /**
	   * Can be used to pass a `FontIcon` element as the icon for the button.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _react.PropTypes.bool,
	  /**
	   * If true, the element will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
	   */
	  iconClassName: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the icon element.
	   */
	  iconStyle: _react.PropTypes.object,
	  /** @ignore */
	  onBlur: _react.PropTypes.func,
	  /** @ignore */
	  onFocus: _react.PropTypes.func,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} keyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /** @ignore */
	  onMouseOut: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The text to supply to the element's tooltip.
	   */
	  tooltip: _react.PropTypes.node,
	  /**
	   * The vertical and horizontal positions, respectively, of the element's tooltip.
	   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
	   * "bottom-left", and "top-left".
	   */
	  tooltipPosition: _propTypes2.default.cornersAndCenter,
	  /**
	   * Override the inline-styles of the tooltip element.
	   */
	  tooltipStyles: _react.PropTypes.object,
	  /**
	   * If true, increase the tooltip element's size.  Useful for increasing tooltip
	   * readability on mobile devices.
	   */
	  touch: _react.PropTypes.bool
	} : void 0;
	exports.default = IconButton;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(16);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);
	module.exports = __webpack_require__(21).Object.assign;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(19);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(34)});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , core      = __webpack_require__(21)
	  , ctx       = __webpack_require__(22)
	  , hide      = __webpack_require__(24)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 20 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(23);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(25)
	  , createDesc = __webpack_require__(33);
	module.exports = __webpack_require__(29) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(26)
	  , IE8_DOM_DEFINE = __webpack_require__(28)
	  , toPrimitive    = __webpack_require__(32)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(29) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(27);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(29) && !__webpack_require__(30)(function(){
	  return Object.defineProperty(__webpack_require__(31)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(30)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(27)
	  , document = __webpack_require__(20).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(27);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(35)
	  , gOPS     = __webpack_require__(50)
	  , pIE      = __webpack_require__(51)
	  , toObject = __webpack_require__(52)
	  , IObject  = __webpack_require__(39)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(30)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(36)
	  , enumBugKeys = __webpack_require__(49);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(37)
	  , toIObject    = __webpack_require__(38)
	  , arrayIndexOf = __webpack_require__(42)(false)
	  , IE_PROTO     = __webpack_require__(46)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(39)
	  , defined = __webpack_require__(41);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(40);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(38)
	  , toLength  = __webpack_require__(43)
	  , toIndex   = __webpack_require__(45);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(44)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(44)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(47)('keys')
	  , uid    = __webpack_require__(48);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(20)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 50 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 51 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(41);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(56);
	module.exports = __webpack_require__(21).Object.getPrototypeOf;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(52)
	  , $getPrototypeOf = __webpack_require__(57);

	__webpack_require__(58)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(37)
	  , toObject    = __webpack_require__(52)
	  , IE_PROTO    = __webpack_require__(46)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(19)
	  , core    = __webpack_require__(21)
	  , fails   = __webpack_require__(30);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(61);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	var $Object = __webpack_require__(21).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(19);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(29), 'Object', {defineProperty: __webpack_require__(25).f});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(65);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(66);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(85);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68);
	__webpack_require__(80);
	module.exports = __webpack_require__(84).f('iterator');

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(69)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(70)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(44)
	  , defined   = __webpack_require__(41);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(71)
	  , $export        = __webpack_require__(19)
	  , redefine       = __webpack_require__(72)
	  , hide           = __webpack_require__(24)
	  , has            = __webpack_require__(37)
	  , Iterators      = __webpack_require__(73)
	  , $iterCreate    = __webpack_require__(74)
	  , setToStringTag = __webpack_require__(78)
	  , getPrototypeOf = __webpack_require__(57)
	  , ITERATOR       = __webpack_require__(79)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24);

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(75)
	  , descriptor     = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(78)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(24)(IteratorPrototype, __webpack_require__(79)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(26)
	  , dPs         = __webpack_require__(76)
	  , enumBugKeys = __webpack_require__(49)
	  , IE_PROTO    = __webpack_require__(46)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(31)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(77).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(25)
	  , anObject = __webpack_require__(26)
	  , getKeys  = __webpack_require__(35);

	module.exports = __webpack_require__(29) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20).document && document.documentElement;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(25).f
	  , has = __webpack_require__(37)
	  , TAG = __webpack_require__(79)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(47)('wks')
	  , uid        = __webpack_require__(48)
	  , Symbol     = __webpack_require__(20).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	var global        = __webpack_require__(20)
	  , hide          = __webpack_require__(24)
	  , Iterators     = __webpack_require__(73)
	  , TO_STRING_TAG = __webpack_require__(79)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(82)
	  , step             = __webpack_require__(83)
	  , Iterators        = __webpack_require__(73)
	  , toIObject        = __webpack_require__(38);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(70)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(79);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	module.exports = __webpack_require__(21).Symbol;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(20)
	  , has            = __webpack_require__(37)
	  , DESCRIPTORS    = __webpack_require__(29)
	  , $export        = __webpack_require__(19)
	  , redefine       = __webpack_require__(72)
	  , META           = __webpack_require__(88).KEY
	  , $fails         = __webpack_require__(30)
	  , shared         = __webpack_require__(47)
	  , setToStringTag = __webpack_require__(78)
	  , uid            = __webpack_require__(48)
	  , wks            = __webpack_require__(79)
	  , wksExt         = __webpack_require__(84)
	  , wksDefine      = __webpack_require__(89)
	  , keyOf          = __webpack_require__(90)
	  , enumKeys       = __webpack_require__(91)
	  , isArray        = __webpack_require__(92)
	  , anObject       = __webpack_require__(26)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(32)
	  , createDesc     = __webpack_require__(33)
	  , _create        = __webpack_require__(75)
	  , gOPNExt        = __webpack_require__(93)
	  , $GOPD          = __webpack_require__(95)
	  , $DP            = __webpack_require__(25)
	  , $keys          = __webpack_require__(35)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(94).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(51).f  = $propertyIsEnumerable;
	  __webpack_require__(50).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(71)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(24)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(48)('meta')
	  , isObject = __webpack_require__(27)
	  , has      = __webpack_require__(37)
	  , setDesc  = __webpack_require__(25).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(30)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(20)
	  , core           = __webpack_require__(21)
	  , LIBRARY        = __webpack_require__(71)
	  , wksExt         = __webpack_require__(84)
	  , defineProperty = __webpack_require__(25).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(35)
	  , toIObject = __webpack_require__(38);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(35)
	  , gOPS    = __webpack_require__(50)
	  , pIE     = __webpack_require__(51);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(40);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(38)
	  , gOPN      = __webpack_require__(94).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(36)
	  , hiddenKeys = __webpack_require__(49).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(51)
	  , createDesc     = __webpack_require__(33)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(32)
	  , has            = __webpack_require__(37)
	  , IE8_DOM_DEFINE = __webpack_require__(28)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(29) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(89)('asyncIterator');

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(89)('observable');

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(100);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(104);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(65);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(102);
	module.exports = __webpack_require__(21).Object.setPrototypeOf;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(19);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(103).set});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(27)
	  , anObject = __webpack_require__(26);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(22)(Function.call, __webpack_require__(95).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(106);
	var $Object = __webpack_require__(21).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(19)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(75)});

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = require("simple-assign");

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;

	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }

	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';

	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var horizontal = _react.PropTypes.oneOf(['left', 'middle', 'right']);
	var vertical = _react.PropTypes.oneOf(['top', 'center', 'bottom']);

	exports.default = {

	  corners: _react.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

	  horizontal: horizontal,

	  vertical: vertical,

	  origin: _react.PropTypes.shape({
	    horizontal: horizontal,
	    vertical: vertical
	  }),

	  cornersAndCenter: _react.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

	  stringOrNumber: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

	  zDepth: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5])

	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _childUtils = __webpack_require__(111);

	var _events = __webpack_require__(113);

	var _events2 = _interopRequireDefault(_events);

	var _keycode = __webpack_require__(114);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _FocusRipple = __webpack_require__(115);

	var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

	var _TouchRipple = __webpack_require__(123);

	var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styleInjected = false;
	var listening = false;
	var tabPressed = false;

	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';

	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}

	function listenForTabPresses() {
	  if (!listening) {
	    _events2.default.on(window, 'keydown', function (event) {
	      tabPressed = (0, _keycode2.default)(event) === 'tab';
	    });
	    listening = true;
	  }
	}

	var EnhancedButton = function (_Component) {
	  (0, _inherits3.default)(EnhancedButton, _Component);

	  function EnhancedButton() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, EnhancedButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedButton.__proto__ || (0, _getPrototypeOf2.default)(EnhancedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isKeyboardFocused: false }, _this.handleKeyDown = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	        if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
	          _this.removeKeyboardFocus(event);
	        }
	      }
	      _this.props.onKeyDown(event);
	    }, _this.handleKeyUp = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	      }
	      _this.props.onKeyUp(event);
	    }, _this.handleBlur = function (event) {
	      _this.cancelFocusTimeout();
	      _this.removeKeyboardFocus(event);
	      _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      if (event) event.persist();
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        // setTimeout is needed because the focus event fires first
	        // Wait so that we can capture if this was a keyboard focus
	        // or touch focus
	        _this.focusTimeout = setTimeout(function () {
	          if (tabPressed) {
	            _this.setKeyboardFocus(event);
	            tabPressed = false;
	          }
	        }, 150);

	        _this.props.onFocus(event);
	      }
	    }, _this.handleClick = function (event) {
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.props.onClick(event);
	      }
	    }, _this.handleTouchTap = function (event) {
	      _this.cancelFocusTimeout();
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.removeKeyboardFocus(event);
	        _this.props.onTouchTap(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(EnhancedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          disabled = _props.disabled,
	          disableKeyboardFocus = _props.disableKeyboardFocus,
	          keyboardFocused = _props.keyboardFocused;

	      if (!disabled && keyboardFocused && !disableKeyboardFocus) {
	        this.setState({ isKeyboardFocused: true });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      injectStyle();
	      listenForTabPresses();
	      if (this.state.isKeyboardFocused) {
	        this.refs.enhancedButton.focus();
	        this.props.onKeyboardFocus(null, true);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        if (nextProps.onKeyboardFocus) {
	          nextProps.onKeyboardFocus(null, false);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.focusTimeout);
	    }
	  }, {
	    key: 'isKeyboardFocused',
	    value: function isKeyboardFocused() {
	      return this.state.isKeyboardFocused;
	    }
	  }, {
	    key: 'removeKeyboardFocus',
	    value: function removeKeyboardFocus(event) {
	      if (this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        this.props.onKeyboardFocus(event, false);
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus(event) {
	      if (!this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: true });
	        this.props.onKeyboardFocus(event, true);
	      }
	    }
	  }, {
	    key: 'cancelFocusTimeout',
	    value: function cancelFocusTimeout() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	        this.focusTimeout = null;
	      }
	    }
	  }, {
	    key: 'createButtonChildren',
	    value: function createButtonChildren() {
	      var _props2 = this.props,
	          centerRipple = _props2.centerRipple,
	          children = _props2.children,
	          disabled = _props2.disabled,
	          disableFocusRipple = _props2.disableFocusRipple,
	          disableKeyboardFocus = _props2.disableKeyboardFocus,
	          disableTouchRipple = _props2.disableTouchRipple,
	          focusRippleColor = _props2.focusRippleColor,
	          focusRippleOpacity = _props2.focusRippleOpacity,
	          touchRippleColor = _props2.touchRippleColor,
	          touchRippleOpacity = _props2.touchRippleOpacity;
	      var isKeyboardFocused = this.state.isKeyboardFocused;

	      // Focus Ripple

	      var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
	        color: focusRippleColor,
	        opacity: focusRippleOpacity,
	        show: isKeyboardFocused
	      }) : undefined;

	      // Touch Ripple
	      var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
	        _TouchRipple2.default,
	        {
	          centerRipple: centerRipple,
	          color: touchRippleColor,
	          opacity: touchRippleOpacity
	        },
	        children
	      ) : undefined;

	      return (0, _childUtils.createChildFragment)({
	        focusRipple: focusRipple,
	        touchRipple: touchRipple,
	        children: touchRipple ? undefined : children
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          centerRipple = _props3.centerRipple,
	          children = _props3.children,
	          containerElement = _props3.containerElement,
	          disabled = _props3.disabled,
	          disableFocusRipple = _props3.disableFocusRipple,
	          disableKeyboardFocus = _props3.disableKeyboardFocus,
	          disableTouchRipple = _props3.disableTouchRipple,
	          focusRippleColor = _props3.focusRippleColor,
	          focusRippleOpacity = _props3.focusRippleOpacity,
	          href = _props3.href,
	          keyboardFocused = _props3.keyboardFocused,
	          touchRippleColor = _props3.touchRippleColor,
	          touchRippleOpacity = _props3.touchRippleOpacity,
	          onBlur = _props3.onBlur,
	          onClick = _props3.onClick,
	          onFocus = _props3.onFocus,
	          onKeyUp = _props3.onKeyUp,
	          onKeyDown = _props3.onKeyDown,
	          onKeyboardFocus = _props3.onKeyboardFocus,
	          onTouchTap = _props3.onTouchTap,
	          style = _props3.style,
	          tabIndex = _props3.tabIndex,
	          type = _props3.type,
	          other = (0, _objectWithoutProperties3.default)(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'onTouchTap', 'style', 'tabIndex', 'type']);
	      var _context$muiTheme = this.context.muiTheme,
	          prepareStyles = _context$muiTheme.prepareStyles,
	          enhancedButton = _context$muiTheme.enhancedButton;


	      var mergedStyles = (0, _simpleAssign2.default)({
	        border: 10,
	        boxSizing: 'border-box',
	        display: 'inline-block',
	        fontFamily: this.context.muiTheme.baseTheme.fontFamily,
	        WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
	        cursor: disabled ? 'default' : 'pointer',
	        textDecoration: 'none',
	        margin: 0,
	        padding: 0,
	        outline: 'none',
	        fontSize: 'inherit',
	        fontWeight: 'inherit',
	        /**
	         * This is needed so that ripples do not bleed
	         * past border radius.
	         * See: http://stackoverflow.com/questions/17298739/
	         * css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
	         */
	        transform: disableTouchRipple && disableFocusRipple ? null : 'translate(0, 0)',
	        verticalAlign: href ? 'middle' : null
	      }, style);

	      // Passing both background:none & backgroundColor can break due to object iteration order
	      if (!mergedStyles.backgroundColor && !mergedStyles.background) {
	        mergedStyles.background = 'none';
	      }

	      if (disabled && href) {
	        return _react2.default.createElement(
	          'span',
	          (0, _extends3.default)({}, other, {
	            style: mergedStyles
	          }),
	          children
	        );
	      }

	      var buttonProps = (0, _extends3.default)({}, other, {
	        style: prepareStyles(mergedStyles),
	        ref: 'enhancedButton',
	        disabled: disabled,
	        href: href,
	        onBlur: this.handleBlur,
	        onClick: this.handleClick,
	        onFocus: this.handleFocus,
	        onKeyUp: this.handleKeyUp,
	        onKeyDown: this.handleKeyDown,
	        onTouchTap: this.handleTouchTap,
	        tabIndex: tabIndex,
	        type: type
	      });
	      var buttonChildren = this.createButtonChildren();

	      if (_react2.default.isValidElement(containerElement)) {
	        return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
	      }

	      return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
	    }
	  }]);
	  return EnhancedButton;
	}(_react.Component);

	EnhancedButton.defaultProps = {
	  containerElement: 'button',
	  onBlur: function onBlur() {},
	  onClick: function onClick() {},
	  onFocus: function onFocus() {},
	  onKeyDown: function onKeyDown() {},
	  onKeyUp: function onKeyUp() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseDown: function onMouseDown() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onMouseUp: function onMouseUp() {},
	  onTouchEnd: function onTouchEnd() {},
	  onTouchStart: function onTouchStart() {},
	  onTouchTap: function onTouchTap() {},
	  tabIndex: 0,
	  type: 'button'
	};
	EnhancedButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? EnhancedButton.propTypes = {
	  centerRipple: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  containerElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  disableFocusRipple: _react.PropTypes.bool,
	  disableKeyboardFocus: _react.PropTypes.bool,
	  disableTouchRipple: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  focusRippleColor: _react.PropTypes.string,
	  focusRippleOpacity: _react.PropTypes.number,
	  href: _react.PropTypes.string,
	  keyboardFocused: _react.PropTypes.bool,
	  onBlur: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func,
	  onKeyUp: _react.PropTypes.func,
	  onKeyboardFocus: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func,
	  onTouchEnd: _react.PropTypes.func,
	  onTouchStart: _react.PropTypes.func,
	  onTouchTap: _react.PropTypes.func,
	  style: _react.PropTypes.object,
	  tabIndex: _react.PropTypes.number,
	  touchRippleColor: _react.PropTypes.string,
	  touchRippleOpacity: _react.PropTypes.number,
	  type: _react.PropTypes.string
	} : void 0;
	exports.default = EnhancedButton;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createChildFragment = createChildFragment;
	exports.extendChildren = extendChildren;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCreateFragment = __webpack_require__(112);

	var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createChildFragment(fragments) {
	  var newFragments = {};
	  var validChildrenCount = 0;
	  var firstKey = void 0;

	  // Only create non-empty key fragments
	  for (var key in fragments) {
	    var currentChild = fragments[key];

	    if (currentChild) {
	      if (validChildrenCount === 0) firstKey = key;
	      newFragments[key] = currentChild;
	      validChildrenCount++;
	    }
	  }

	  if (validChildrenCount === 0) return undefined;
	  if (validChildrenCount === 1) return newFragments[firstKey];
	  return (0, _reactAddonsCreateFragment2.default)(newFragments);
	}

	function extendChildren(children, extendedProps, extendedChildren) {
	  return _react2.default.Children.map(children, function (child) {
	    if (!_react2.default.isValidElement(child)) {
	      return child;
	    }

	    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;

	    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;

	    return _react2.default.cloneElement(child, newProps, newChildren);
	  });
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = require("react-addons-create-fragment");

/***/ },
/* 113 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(event) {
	      event.target.removeEventListener(event.type, recursiveFunction);
	      return callback(event);
	    };

	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	  isKeyboard: function isKeyboard(event) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
	  }
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = require("keycode");

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(116);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowEqual = __webpack_require__(117);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _autoPrefix = __webpack_require__(119);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _ScaleIn = __webpack_require__(120);

	var _ScaleIn2 = _interopRequireDefault(_ScaleIn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pulsateDuration = 750;

	var FocusRipple = function (_Component) {
	  (0, _inherits3.default)(FocusRipple, _Component);

	  function FocusRipple() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, FocusRipple);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FocusRipple.__proto__ || (0, _getPrototypeOf2.default)(FocusRipple)).call.apply(_ref, [this].concat(args))), _this), _this.pulsate = function () {
	      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
	      if (!innerCircle) return;

	      var startScale = 'scale(1)';
	      var endScale = 'scale(0.85)';
	      var currentScale = innerCircle.style.transform || startScale;
	      var nextScale = currentScale === startScale ? endScale : startScale;

	      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
	      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(FocusRipple, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      } else {
	        if (this.timeout) clearTimeout(this.timeout);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'getRippleElement',
	    value: function getRippleElement(props) {
	      var color = props.color,
	          innerStyle = props.innerStyle,
	          opacity = props.opacity;
	      var _context$muiTheme = this.context.muiTheme,
	          prepareStyles = _context$muiTheme.prepareStyles,
	          ripple = _context$muiTheme.ripple;


	      var innerStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        opacity: opacity ? opacity : 0.16,
	        backgroundColor: color || ripple.color,
	        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
	      }, innerStyle);

	      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	      var height = el.offsetHeight;
	      var width = el.offsetWidth;
	      var size = Math.max(height, width);

	      var oldTop = 0;
	      // For browsers that don't support endsWith()
	      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	        oldTop = parseInt(el.style.top);
	      }
	      el.style.height = size + 'px';
	      el.style.top = height / 2 - size / 2 + oldTop + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          show = _props.show,
	          style = _props.style;


	      var mergedRootStyles = (0, _simpleAssign2.default)({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0
	      }, style);

	      var ripple = show ? this.getRippleElement(this.props) : null;

	      return _react2.default.createElement(
	        _ScaleIn2.default,
	        {
	          maxScale: 0.85,
	          style: mergedRootStyles
	        },
	        ripple
	      );
	    }
	  }]);
	  return FocusRipple;
	}(_react.Component);

	FocusRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? FocusRipple.propTypes = {
	  color: _react.PropTypes.string,
	  innerStyle: _react.PropTypes.object,
	  opacity: _react.PropTypes.number,
	  show: _react.PropTypes.bool,
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = FocusRipple;

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _shallowEqual = __webpack_require__(118);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _shallowEqual2.default;

/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  set: function set(style, key, value) {
	    style[key] = value;
	  }
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsTransitionGroup = __webpack_require__(121);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var _ScaleInChild = __webpack_require__(122);

	var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ScaleIn = function (_Component) {
	  (0, _inherits3.default)(ScaleIn, _Component);

	  function ScaleIn() {
	    (0, _classCallCheck3.default)(this, ScaleIn);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleIn.__proto__ || (0, _getPrototypeOf2.default)(ScaleIn)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ScaleIn, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          childStyle = _props.childStyle,
	          enterDelay = _props.enterDelay,
	          maxScale = _props.maxScale,
	          minScale = _props.minScale,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;


	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'relative',
	        overflow: 'hidden',
	        height: '100%'
	      }, style);

	      var newChildren = _react2.default.Children.map(children, function (child) {
	        return _react2.default.createElement(
	          _ScaleInChild2.default,
	          {
	            key: child.key,
	            enterDelay: enterDelay,
	            maxScale: maxScale,
	            minScale: minScale,
	            style: childStyle
	          },
	          child
	        );
	      });

	      return _react2.default.createElement(
	        _reactAddonsTransitionGroup2.default,
	        (0, _extends3.default)({}, other, {
	          style: prepareStyles(mergedRootStyles),
	          component: 'div'
	        }),
	        newChildren
	      );
	    }
	  }]);
	  return ScaleIn;
	}(_react.Component);

	ScaleIn.defaultProps = {
	  enterDelay: 0
	};
	ScaleIn.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? ScaleIn.propTypes = {
	  childStyle: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  enterDelay: _react.PropTypes.number,
	  maxScale: _react.PropTypes.number,
	  minScale: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = ScaleIn;

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = require("react-addons-transition-group");

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(116);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _autoPrefix = __webpack_require__(119);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ScaleInChild = function (_Component) {
	  (0, _inherits3.default)(ScaleInChild, _Component);

	  function ScaleInChild() {
	    (0, _classCallCheck3.default)(this, ScaleInChild);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleInChild.__proto__ || (0, _getPrototypeOf2.default)(ScaleInChild)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ScaleInChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;

	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');

	      this.leaveTimer = setTimeout(callback, 450);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;

	      style.opacity = '1';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;

	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');

	      this.enterTimer = setTimeout(callback, this.props.enterDelay);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          enterDelay = _props.enterDelay,
	          maxScale = _props.maxScale,
	          minScale = _props.minScale,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;


	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        top: 0,
	        left: 0,
	        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	      }, style);

	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
	        children
	      );
	    }
	  }]);
	  return ScaleInChild;
	}(_react.Component);

	ScaleInChild.defaultProps = {
	  enterDelay: 0,
	  maxScale: 1,
	  minScale: 0
	};
	ScaleInChild.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? ScaleInChild.propTypes = {
	  children: _react.PropTypes.node,
	  enterDelay: _react.PropTypes.number,
	  maxScale: _react.PropTypes.number,
	  minScale: _react.PropTypes.number,
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = ScaleInChild;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(124);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _toArray2 = __webpack_require__(134);

	var _toArray3 = _interopRequireDefault(_toArray2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(116);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsTransitionGroup = __webpack_require__(121);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var _dom = __webpack_require__(135);

	var _dom2 = _interopRequireDefault(_dom);

	var _CircleRipple = __webpack_require__(136);

	var _CircleRipple2 = _interopRequireDefault(_CircleRipple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Remove the first element of the array
	var shift = function shift(_ref) {
	  var _ref2 = (0, _toArray3.default)(_ref),
	      newArray = _ref2.slice(1);

	  return newArray;
	};

	var TouchRipple = function (_Component) {
	  (0, _inherits3.default)(TouchRipple, _Component);

	  function TouchRipple(props, context) {
	    (0, _classCallCheck3.default)(this, TouchRipple);

	    // Touch start produces a mouse down event for compat reasons. To avoid
	    // showing ripples twice we skip showing a ripple for the first mouse down
	    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    // to avoid re-rendering when we change it.
	    var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props, context));

	    _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.start(event, false);
	      }
	    };

	    _this.handleMouseUp = function () {
	      _this.end();
	    };

	    _this.handleMouseLeave = function () {
	      _this.end();
	    };

	    _this.handleTouchStart = function (event) {
	      event.stopPropagation();
	      // If the user is swiping (not just tapping), save the position so we can
	      // abort ripples if the user appears to be scrolling.
	      if (_this.props.abortOnScroll && event.touches) {
	        _this.startListeningForScrollAbort(event);
	        _this.startTime = Date.now();
	      }
	      _this.start(event, true);
	    };

	    _this.handleTouchEnd = function () {
	      _this.end();
	    };

	    _this.handleTouchMove = function (event) {
	      // Stop trying to abort if we're already 300ms into the animation
	      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
	      if (timeSinceStart > 300) {
	        _this.stopListeningForScrollAbort();
	        return;
	      }

	      // If the user is scrolling...
	      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
	      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
	      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
	      if (deltaY > 6 || deltaX > 6) {
	        var currentRipples = _this.state.ripples;
	        var ripple = currentRipples[0];
	        // This clone will replace the ripple in ReactTransitionGroup with a
	        // version that will disappear immediately when removed from the DOM
	        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
	        // Remove the old ripple and replace it with the new updated one
	        currentRipples = shift(currentRipples);
	        currentRipples = [].concat((0, _toConsumableArray3.default)(currentRipples), [abortedRipple]);
	        _this.setState({ ripples: currentRipples }, function () {
	          // Call end after we've set the ripple to abort otherwise the setState
	          // in end() merges with this and the ripple abort fails
	          _this.end();
	        });
	      }
	    };

	    _this.ignoreNextMouseDown = false;

	    _this.state = {
	      // This prop allows us to only render the ReactTransitionGroup
	      // on the first click of the component, making the inital render faster.
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(TouchRipple, [{
	    key: 'start',
	    value: function start(event, isRippleTouchGenerated) {
	      var theme = this.context.muiTheme.ripple;

	      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
	        this.ignoreNextMouseDown = false;
	        return;
	      }

	      var ripples = this.state.ripples;

	      // Add a ripple to the ripples array
	      ripples = [].concat((0, _toConsumableArray3.default)(ripples), [_react2.default.createElement(_CircleRipple2.default, {
	        key: this.state.nextKey,
	        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
	        color: this.props.color || theme.color,
	        opacity: this.props.opacity,
	        touchGenerated: isRippleTouchGenerated
	      })]);

	      this.ignoreNextMouseDown = isRippleTouchGenerated;
	      this.setState({
	        hasRipples: true,
	        nextKey: this.state.nextKey + 1,
	        ripples: ripples
	      });
	    }
	  }, {
	    key: 'end',
	    value: function end() {
	      var currentRipples = this.state.ripples;
	      this.setState({
	        ripples: shift(currentRipples)
	      });
	      if (this.props.abortOnScroll) {
	        this.stopListeningForScrollAbort();
	      }
	    }

	    // Check if the user seems to be scrolling and abort the animation if so

	  }, {
	    key: 'startListeningForScrollAbort',
	    value: function startListeningForScrollAbort(event) {
	      this.firstTouchY = event.touches[0].clientY;
	      this.firstTouchX = event.touches[0].clientX;
	      // Note that when scolling Chrome throttles this event to every 200ms
	      // Also note we don't listen for scroll events directly as there's no general
	      // way to cover cases like scrolling within containers on the page
	      document.body.addEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'stopListeningForScrollAbort',
	    value: function stopListeningForScrollAbort() {
	      document.body.removeEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'getRippleStyle',
	    value: function getRippleStyle(event) {
	      var el = _reactDom2.default.findDOMNode(this);
	      var elHeight = el.offsetHeight;
	      var elWidth = el.offsetWidth;
	      var offset = _dom2.default.offset(el);
	      var isTouchEvent = event.touches && event.touches.length;
	      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
	      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
	      var pointerX = pageX - offset.left;
	      var pointerY = pageY - offset.top;
	      var topLeftDiag = this.calcDiag(pointerX, pointerY);
	      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
	      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
	      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
	      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	      var rippleSize = rippleRadius * 2;
	      var left = pointerX - rippleRadius;
	      var top = pointerY - rippleRadius;

	      return {
	        directionInvariant: true,
	        height: rippleSize,
	        width: rippleSize,
	        top: top,
	        left: left
	      };
	    }
	  }, {
	    key: 'calcDiag',
	    value: function calcDiag(a, b) {
	      return Math.sqrt(a * a + b * b);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          style = _props.style;
	      var _state = this.state,
	          hasRipples = _state.hasRipples,
	          ripples = _state.ripples;
	      var prepareStyles = this.context.muiTheme.prepareStyles;


	      var rippleGroup = void 0;

	      if (hasRipples) {
	        var mergedStyles = (0, _simpleAssign2.default)({
	          height: '100%',
	          width: '100%',
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          overflow: 'hidden'
	        }, style);

	        rippleGroup = _react2.default.createElement(
	          _reactAddonsTransitionGroup2.default,
	          { style: prepareStyles(mergedStyles) },
	          ripples
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseUp: this.handleMouseUp,
	          onMouseDown: this.handleMouseDown,
	          onMouseLeave: this.handleMouseLeave,
	          onTouchStart: this.handleTouchStart,
	          onTouchEnd: this.handleTouchEnd
	        },
	        rippleGroup,
	        children
	      );
	    }
	  }]);
	  return TouchRipple;
	}(_react.Component);

	TouchRipple.defaultProps = {
	  abortOnScroll: true
	};
	TouchRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? TouchRipple.propTypes = {
	  abortOnScroll: _react.PropTypes.bool,
	  centerRipple: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  color: _react.PropTypes.string,
	  opacity: _react.PropTypes.number,
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = TouchRipple;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(125);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68);
	__webpack_require__(127);
	module.exports = __webpack_require__(21).Array.from;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(22)
	  , $export        = __webpack_require__(19)
	  , toObject       = __webpack_require__(52)
	  , call           = __webpack_require__(128)
	  , isArrayIter    = __webpack_require__(129)
	  , toLength       = __webpack_require__(43)
	  , createProperty = __webpack_require__(130)
	  , getIterFn      = __webpack_require__(131);

	$export($export.S + $export.F * !__webpack_require__(133)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(26);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(73)
	  , ITERATOR   = __webpack_require__(79)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(25)
	  , createDesc      = __webpack_require__(33);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(132)
	  , ITERATOR  = __webpack_require__(79)('iterator')
	  , Iterators = __webpack_require__(73);
	module.exports = __webpack_require__(21).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(40)
	  , TAG = __webpack_require__(79)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(79)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(125);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;

	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }

	    return false;
	  },
	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  }
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(116);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowEqual = __webpack_require__(117);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _autoPrefix = __webpack_require__(119);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CircleRipple = function (_Component) {
	  (0, _inherits3.default)(CircleRipple, _Component);

	  function CircleRipple() {
	    (0, _classCallCheck3.default)(this, CircleRipple);
	    return (0, _possibleConstructorReturn3.default)(this, (CircleRipple.__proto__ || (0, _getPrototypeOf2.default)(CircleRipple)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(CircleRipple, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = 0;
	      // If the animation is aborted, remove from the DOM immediately
	      var removeAfter = this.props.aborted ? 0 : 2000;
	      this.enterTimer = setTimeout(callback, removeAfter);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
	      _autoPrefix2.default.set(style, 'transition', transitionValue);
	      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = this.props.opacity;
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	      this.leaveTimer = setTimeout(callback, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          aborted = _props.aborted,
	          color = _props.color,
	          opacity = _props.opacity,
	          style = _props.style,
	          touchGenerated = _props.touchGenerated,
	          other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;


	      var mergedStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        backgroundColor: color
	      }, style);

	      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
	    }
	  }]);
	  return CircleRipple;
	}(_react.Component);

	CircleRipple.defaultProps = {
	  opacity: 0.1,
	  aborted: false
	};
	CircleRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? CircleRipple.propTypes = {
	  aborted: _react.PropTypes.bool,
	  color: _react.PropTypes.string,
	  opacity: _react.PropTypes.number,
	  style: _react.PropTypes.object,
	  touchGenerated: _react.PropTypes.bool
	} : void 0;
	exports.default = CircleRipple;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _FontIcon = __webpack_require__(138);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FontIcon2.default;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context, state) {
	  var color = props.color,
	      hoverColor = props.hoverColor;
	  var baseTheme = context.muiTheme.baseTheme;

	  var offColor = color || baseTheme.palette.textColor;
	  var onColor = hoverColor || offColor;

	  return {
	    root: {
	      color: state.hovered ? onColor : offColor,
	      position: 'relative',
	      fontSize: baseTheme.spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }
	  };
	}

	var FontIcon = function (_Component) {
	  (0, _inherits3.default)(FontIcon, _Component);

	  function FontIcon() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, FontIcon);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontIcon.__proto__ || (0, _getPrototypeOf2.default)(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: false });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(FontIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          hoverColor = _props.hoverColor,
	          onMouseLeave = _props.onMouseLeave,
	          onMouseEnter = _props.onMouseEnter,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);

	      return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	      }));
	    }
	  }]);
	  return FontIcon;
	}(_react.Component);

	FontIcon.muiName = 'FontIcon';
	FontIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {}
	};
	FontIcon.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? FontIcon.propTypes = {
	  /**
	   * This is the font color of the font icon. If not specified,
	   * this component will default to muiTheme.palette.textColor.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _react.PropTypes.string,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = FontIcon;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context, state) {
	  var verticalPosition = props.verticalPosition;
	  var horizontalPosition = props.horizontalPosition;
	  var touchMarginOffset = props.touch ? 10 : 0;
	  var touchOffsetTop = props.touch ? -20 : -10;
	  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      zIndex = _context$muiTheme.zIndex,
	      tooltip = _context$muiTheme.tooltip;


	  var styles = {
	    root: {
	      position: 'absolute',
	      fontFamily: baseTheme.fontFamily,
	      fontSize: '10px',
	      lineHeight: '22px',
	      padding: '0 8px',
	      zIndex: zIndex.tooltip,
	      color: tooltip.color,
	      overflow: 'hidden',
	      top: -10000,
	      borderRadius: 2,
	      userSelect: 'none',
	      opacity: 0,
	      right: horizontalPosition === 'left' ? 12 : null,
	      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : null,
	      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    label: {
	      position: 'relative',
	      whiteSpace: 'nowrap'
	    },
	    ripple: {
	      position: 'absolute',
	      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	      top: verticalPosition === 'bottom' ? 0 : '100%',
	      transform: 'translate(-50%, -50%)',
	      borderRadius: '50%',
	      backgroundColor: 'transparent',
	      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    },
	    rootWhenShown: {
	      top: verticalPosition === 'top' ? touchOffsetTop : 36,
	      opacity: 0.9,
	      transform: 'translate(0px, ' + offset + 'px)',
	      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    rootWhenTouched: {
	      fontSize: '14px',
	      lineHeight: '32px',
	      padding: '0 16px'
	    },
	    rippleWhenShown: {
	      backgroundColor: tooltip.rippleBackgroundColor,
	      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    }
	  };

	  return styles;
	}

	var Tooltip = function (_Component) {
	  (0, _inherits3.default)(Tooltip, _Component);

	  function Tooltip() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Tooltip);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      offsetWidth: null
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(Tooltip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setRippleSize();
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setRippleSize();
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var ripple = this.refs.ripple;
	      var tooltip = this.refs.tooltip;
	      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);

	      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	      if (this.props.show) {
	        ripple.style.height = rippleDiameter + 'px';
	        ripple.style.width = rippleDiameter + 'px';
	      } else {
	        ripple.style.width = '0px';
	        ripple.style.height = '0px';
	      }
	    }
	  }, {
	    key: 'setTooltipPosition',
	    value: function setTooltipPosition() {
	      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          horizontalPosition = _props.horizontalPosition,
	          label = _props.label,
	          show = _props.show,
	          touch = _props.touch,
	          verticalPosition = _props.verticalPosition,
	          other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);

	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, {
	          ref: 'tooltip',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
	        }),
	        _react2.default.createElement('div', {
	          ref: 'ripple',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
	        }),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(styles.label) },
	          label
	        )
	      );
	    }
	  }]);
	  return Tooltip;
	}(_react.Component);

	Tooltip.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? Tooltip.propTypes = {
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  horizontalPosition: _react.PropTypes.oneOf(['left', 'right', 'center']),
	  label: _react.PropTypes.node.isRequired,
	  show: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  touch: _react.PropTypes.bool,
	  verticalPosition: _react.PropTypes.oneOf(['top', 'bottom'])
	} : void 0;
	exports.default = Tooltip;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _colors = __webpack_require__(141);

	var _colorManipulator = __webpack_require__(142);

	var _spacing = __webpack_require__(143);

	var _spacing2 = _interopRequireDefault(_spacing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */
	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors.cyan500,
	    primary2Color: _colors.cyan700,
	    primary3Color: _colors.grey400,
	    accent1Color: _colors.pinkA200,
	    accent2Color: _colors.grey100,
	    accent3Color: _colors.grey500,
	    textColor: _colors.darkBlack,
	    secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
	    alternateTextColor: _colors.white,
	    canvasColor: _colors.white,
	    borderColor: _colors.grey300,
	    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
	    pickerHeaderColor: _colors.cyan500,
	    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
	    shadowColor: _colors.fullBlack
	  }
	}; /**
	    * NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
	    */

/***/ },
/* 141 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var red50 = exports.red50 = '#ffebee';
	var red100 = exports.red100 = '#ffcdd2';
	var red200 = exports.red200 = '#ef9a9a';
	var red300 = exports.red300 = '#e57373';
	var red400 = exports.red400 = '#ef5350';
	var red500 = exports.red500 = '#f44336';
	var red600 = exports.red600 = '#e53935';
	var red700 = exports.red700 = '#d32f2f';
	var red800 = exports.red800 = '#c62828';
	var red900 = exports.red900 = '#b71c1c';
	var redA100 = exports.redA100 = '#ff8a80';
	var redA200 = exports.redA200 = '#ff5252';
	var redA400 = exports.redA400 = '#ff1744';
	var redA700 = exports.redA700 = '#d50000';

	var pink50 = exports.pink50 = '#fce4ec';
	var pink100 = exports.pink100 = '#f8bbd0';
	var pink200 = exports.pink200 = '#f48fb1';
	var pink300 = exports.pink300 = '#f06292';
	var pink400 = exports.pink400 = '#ec407a';
	var pink500 = exports.pink500 = '#e91e63';
	var pink600 = exports.pink600 = '#d81b60';
	var pink700 = exports.pink700 = '#c2185b';
	var pink800 = exports.pink800 = '#ad1457';
	var pink900 = exports.pink900 = '#880e4f';
	var pinkA100 = exports.pinkA100 = '#ff80ab';
	var pinkA200 = exports.pinkA200 = '#ff4081';
	var pinkA400 = exports.pinkA400 = '#f50057';
	var pinkA700 = exports.pinkA700 = '#c51162';

	var purple50 = exports.purple50 = '#f3e5f5';
	var purple100 = exports.purple100 = '#e1bee7';
	var purple200 = exports.purple200 = '#ce93d8';
	var purple300 = exports.purple300 = '#ba68c8';
	var purple400 = exports.purple400 = '#ab47bc';
	var purple500 = exports.purple500 = '#9c27b0';
	var purple600 = exports.purple600 = '#8e24aa';
	var purple700 = exports.purple700 = '#7b1fa2';
	var purple800 = exports.purple800 = '#6a1b9a';
	var purple900 = exports.purple900 = '#4a148c';
	var purpleA100 = exports.purpleA100 = '#ea80fc';
	var purpleA200 = exports.purpleA200 = '#e040fb';
	var purpleA400 = exports.purpleA400 = '#d500f9';
	var purpleA700 = exports.purpleA700 = '#aa00ff';

	var deepPurple50 = exports.deepPurple50 = '#ede7f6';
	var deepPurple100 = exports.deepPurple100 = '#d1c4e9';
	var deepPurple200 = exports.deepPurple200 = '#b39ddb';
	var deepPurple300 = exports.deepPurple300 = '#9575cd';
	var deepPurple400 = exports.deepPurple400 = '#7e57c2';
	var deepPurple500 = exports.deepPurple500 = '#673ab7';
	var deepPurple600 = exports.deepPurple600 = '#5e35b1';
	var deepPurple700 = exports.deepPurple700 = '#512da8';
	var deepPurple800 = exports.deepPurple800 = '#4527a0';
	var deepPurple900 = exports.deepPurple900 = '#311b92';
	var deepPurpleA100 = exports.deepPurpleA100 = '#b388ff';
	var deepPurpleA200 = exports.deepPurpleA200 = '#7c4dff';
	var deepPurpleA400 = exports.deepPurpleA400 = '#651fff';
	var deepPurpleA700 = exports.deepPurpleA700 = '#6200ea';

	var indigo50 = exports.indigo50 = '#e8eaf6';
	var indigo100 = exports.indigo100 = '#c5cae9';
	var indigo200 = exports.indigo200 = '#9fa8da';
	var indigo300 = exports.indigo300 = '#7986cb';
	var indigo400 = exports.indigo400 = '#5c6bc0';
	var indigo500 = exports.indigo500 = '#3f51b5';
	var indigo600 = exports.indigo600 = '#3949ab';
	var indigo700 = exports.indigo700 = '#303f9f';
	var indigo800 = exports.indigo800 = '#283593';
	var indigo900 = exports.indigo900 = '#1a237e';
	var indigoA100 = exports.indigoA100 = '#8c9eff';
	var indigoA200 = exports.indigoA200 = '#536dfe';
	var indigoA400 = exports.indigoA400 = '#3d5afe';
	var indigoA700 = exports.indigoA700 = '#304ffe';

	var blue50 = exports.blue50 = '#e3f2fd';
	var blue100 = exports.blue100 = '#bbdefb';
	var blue200 = exports.blue200 = '#90caf9';
	var blue300 = exports.blue300 = '#64b5f6';
	var blue400 = exports.blue400 = '#42a5f5';
	var blue500 = exports.blue500 = '#2196f3';
	var blue600 = exports.blue600 = '#1e88e5';
	var blue700 = exports.blue700 = '#1976d2';
	var blue800 = exports.blue800 = '#1565c0';
	var blue900 = exports.blue900 = '#0d47a1';
	var blueA100 = exports.blueA100 = '#82b1ff';
	var blueA200 = exports.blueA200 = '#448aff';
	var blueA400 = exports.blueA400 = '#2979ff';
	var blueA700 = exports.blueA700 = '#2962ff';

	var lightBlue50 = exports.lightBlue50 = '#e1f5fe';
	var lightBlue100 = exports.lightBlue100 = '#b3e5fc';
	var lightBlue200 = exports.lightBlue200 = '#81d4fa';
	var lightBlue300 = exports.lightBlue300 = '#4fc3f7';
	var lightBlue400 = exports.lightBlue400 = '#29b6f6';
	var lightBlue500 = exports.lightBlue500 = '#03a9f4';
	var lightBlue600 = exports.lightBlue600 = '#039be5';
	var lightBlue700 = exports.lightBlue700 = '#0288d1';
	var lightBlue800 = exports.lightBlue800 = '#0277bd';
	var lightBlue900 = exports.lightBlue900 = '#01579b';
	var lightBlueA100 = exports.lightBlueA100 = '#80d8ff';
	var lightBlueA200 = exports.lightBlueA200 = '#40c4ff';
	var lightBlueA400 = exports.lightBlueA400 = '#00b0ff';
	var lightBlueA700 = exports.lightBlueA700 = '#0091ea';

	var cyan50 = exports.cyan50 = '#e0f7fa';
	var cyan100 = exports.cyan100 = '#b2ebf2';
	var cyan200 = exports.cyan200 = '#80deea';
	var cyan300 = exports.cyan300 = '#4dd0e1';
	var cyan400 = exports.cyan400 = '#26c6da';
	var cyan500 = exports.cyan500 = '#00bcd4';
	var cyan600 = exports.cyan600 = '#00acc1';
	var cyan700 = exports.cyan700 = '#0097a7';
	var cyan800 = exports.cyan800 = '#00838f';
	var cyan900 = exports.cyan900 = '#006064';
	var cyanA100 = exports.cyanA100 = '#84ffff';
	var cyanA200 = exports.cyanA200 = '#18ffff';
	var cyanA400 = exports.cyanA400 = '#00e5ff';
	var cyanA700 = exports.cyanA700 = '#00b8d4';

	var teal50 = exports.teal50 = '#e0f2f1';
	var teal100 = exports.teal100 = '#b2dfdb';
	var teal200 = exports.teal200 = '#80cbc4';
	var teal300 = exports.teal300 = '#4db6ac';
	var teal400 = exports.teal400 = '#26a69a';
	var teal500 = exports.teal500 = '#009688';
	var teal600 = exports.teal600 = '#00897b';
	var teal700 = exports.teal700 = '#00796b';
	var teal800 = exports.teal800 = '#00695c';
	var teal900 = exports.teal900 = '#004d40';
	var tealA100 = exports.tealA100 = '#a7ffeb';
	var tealA200 = exports.tealA200 = '#64ffda';
	var tealA400 = exports.tealA400 = '#1de9b6';
	var tealA700 = exports.tealA700 = '#00bfa5';

	var green50 = exports.green50 = '#e8f5e9';
	var green100 = exports.green100 = '#c8e6c9';
	var green200 = exports.green200 = '#a5d6a7';
	var green300 = exports.green300 = '#81c784';
	var green400 = exports.green400 = '#66bb6a';
	var green500 = exports.green500 = '#4caf50';
	var green600 = exports.green600 = '#43a047';
	var green700 = exports.green700 = '#388e3c';
	var green800 = exports.green800 = '#2e7d32';
	var green900 = exports.green900 = '#1b5e20';
	var greenA100 = exports.greenA100 = '#b9f6ca';
	var greenA200 = exports.greenA200 = '#69f0ae';
	var greenA400 = exports.greenA400 = '#00e676';
	var greenA700 = exports.greenA700 = '#00c853';

	var lightGreen50 = exports.lightGreen50 = '#f1f8e9';
	var lightGreen100 = exports.lightGreen100 = '#dcedc8';
	var lightGreen200 = exports.lightGreen200 = '#c5e1a5';
	var lightGreen300 = exports.lightGreen300 = '#aed581';
	var lightGreen400 = exports.lightGreen400 = '#9ccc65';
	var lightGreen500 = exports.lightGreen500 = '#8bc34a';
	var lightGreen600 = exports.lightGreen600 = '#7cb342';
	var lightGreen700 = exports.lightGreen700 = '#689f38';
	var lightGreen800 = exports.lightGreen800 = '#558b2f';
	var lightGreen900 = exports.lightGreen900 = '#33691e';
	var lightGreenA100 = exports.lightGreenA100 = '#ccff90';
	var lightGreenA200 = exports.lightGreenA200 = '#b2ff59';
	var lightGreenA400 = exports.lightGreenA400 = '#76ff03';
	var lightGreenA700 = exports.lightGreenA700 = '#64dd17';

	var lime50 = exports.lime50 = '#f9fbe7';
	var lime100 = exports.lime100 = '#f0f4c3';
	var lime200 = exports.lime200 = '#e6ee9c';
	var lime300 = exports.lime300 = '#dce775';
	var lime400 = exports.lime400 = '#d4e157';
	var lime500 = exports.lime500 = '#cddc39';
	var lime600 = exports.lime600 = '#c0ca33';
	var lime700 = exports.lime700 = '#afb42b';
	var lime800 = exports.lime800 = '#9e9d24';
	var lime900 = exports.lime900 = '#827717';
	var limeA100 = exports.limeA100 = '#f4ff81';
	var limeA200 = exports.limeA200 = '#eeff41';
	var limeA400 = exports.limeA400 = '#c6ff00';
	var limeA700 = exports.limeA700 = '#aeea00';

	var yellow50 = exports.yellow50 = '#fffde7';
	var yellow100 = exports.yellow100 = '#fff9c4';
	var yellow200 = exports.yellow200 = '#fff59d';
	var yellow300 = exports.yellow300 = '#fff176';
	var yellow400 = exports.yellow400 = '#ffee58';
	var yellow500 = exports.yellow500 = '#ffeb3b';
	var yellow600 = exports.yellow600 = '#fdd835';
	var yellow700 = exports.yellow700 = '#fbc02d';
	var yellow800 = exports.yellow800 = '#f9a825';
	var yellow900 = exports.yellow900 = '#f57f17';
	var yellowA100 = exports.yellowA100 = '#ffff8d';
	var yellowA200 = exports.yellowA200 = '#ffff00';
	var yellowA400 = exports.yellowA400 = '#ffea00';
	var yellowA700 = exports.yellowA700 = '#ffd600';

	var amber50 = exports.amber50 = '#fff8e1';
	var amber100 = exports.amber100 = '#ffecb3';
	var amber200 = exports.amber200 = '#ffe082';
	var amber300 = exports.amber300 = '#ffd54f';
	var amber400 = exports.amber400 = '#ffca28';
	var amber500 = exports.amber500 = '#ffc107';
	var amber600 = exports.amber600 = '#ffb300';
	var amber700 = exports.amber700 = '#ffa000';
	var amber800 = exports.amber800 = '#ff8f00';
	var amber900 = exports.amber900 = '#ff6f00';
	var amberA100 = exports.amberA100 = '#ffe57f';
	var amberA200 = exports.amberA200 = '#ffd740';
	var amberA400 = exports.amberA400 = '#ffc400';
	var amberA700 = exports.amberA700 = '#ffab00';

	var orange50 = exports.orange50 = '#fff3e0';
	var orange100 = exports.orange100 = '#ffe0b2';
	var orange200 = exports.orange200 = '#ffcc80';
	var orange300 = exports.orange300 = '#ffb74d';
	var orange400 = exports.orange400 = '#ffa726';
	var orange500 = exports.orange500 = '#ff9800';
	var orange600 = exports.orange600 = '#fb8c00';
	var orange700 = exports.orange700 = '#f57c00';
	var orange800 = exports.orange800 = '#ef6c00';
	var orange900 = exports.orange900 = '#e65100';
	var orangeA100 = exports.orangeA100 = '#ffd180';
	var orangeA200 = exports.orangeA200 = '#ffab40';
	var orangeA400 = exports.orangeA400 = '#ff9100';
	var orangeA700 = exports.orangeA700 = '#ff6d00';

	var deepOrange50 = exports.deepOrange50 = '#fbe9e7';
	var deepOrange100 = exports.deepOrange100 = '#ffccbc';
	var deepOrange200 = exports.deepOrange200 = '#ffab91';
	var deepOrange300 = exports.deepOrange300 = '#ff8a65';
	var deepOrange400 = exports.deepOrange400 = '#ff7043';
	var deepOrange500 = exports.deepOrange500 = '#ff5722';
	var deepOrange600 = exports.deepOrange600 = '#f4511e';
	var deepOrange700 = exports.deepOrange700 = '#e64a19';
	var deepOrange800 = exports.deepOrange800 = '#d84315';
	var deepOrange900 = exports.deepOrange900 = '#bf360c';
	var deepOrangeA100 = exports.deepOrangeA100 = '#ff9e80';
	var deepOrangeA200 = exports.deepOrangeA200 = '#ff6e40';
	var deepOrangeA400 = exports.deepOrangeA400 = '#ff3d00';
	var deepOrangeA700 = exports.deepOrangeA700 = '#dd2c00';

	var brown50 = exports.brown50 = '#efebe9';
	var brown100 = exports.brown100 = '#d7ccc8';
	var brown200 = exports.brown200 = '#bcaaa4';
	var brown300 = exports.brown300 = '#a1887f';
	var brown400 = exports.brown400 = '#8d6e63';
	var brown500 = exports.brown500 = '#795548';
	var brown600 = exports.brown600 = '#6d4c41';
	var brown700 = exports.brown700 = '#5d4037';
	var brown800 = exports.brown800 = '#4e342e';
	var brown900 = exports.brown900 = '#3e2723';

	var blueGrey50 = exports.blueGrey50 = '#eceff1';
	var blueGrey100 = exports.blueGrey100 = '#cfd8dc';
	var blueGrey200 = exports.blueGrey200 = '#b0bec5';
	var blueGrey300 = exports.blueGrey300 = '#90a4ae';
	var blueGrey400 = exports.blueGrey400 = '#78909c';
	var blueGrey500 = exports.blueGrey500 = '#607d8b';
	var blueGrey600 = exports.blueGrey600 = '#546e7a';
	var blueGrey700 = exports.blueGrey700 = '#455a64';
	var blueGrey800 = exports.blueGrey800 = '#37474f';
	var blueGrey900 = exports.blueGrey900 = '#263238';

	var grey50 = exports.grey50 = '#fafafa';
	var grey100 = exports.grey100 = '#f5f5f5';
	var grey200 = exports.grey200 = '#eeeeee';
	var grey300 = exports.grey300 = '#e0e0e0';
	var grey400 = exports.grey400 = '#bdbdbd';
	var grey500 = exports.grey500 = '#9e9e9e';
	var grey600 = exports.grey600 = '#757575';
	var grey700 = exports.grey700 = '#616161';
	var grey800 = exports.grey800 = '#424242';
	var grey900 = exports.grey900 = '#212121';

	var black = exports.black = '#000000';
	var white = exports.white = '#ffffff';

	var transparent = exports.transparent = 'rgba(0, 0, 0, 0)';
	var fullBlack = exports.fullBlack = 'rgba(0, 0, 0, 1)';
	var darkBlack = exports.darkBlack = 'rgba(0, 0, 0, 0.87)';
	var lightBlack = exports.lightBlack = 'rgba(0, 0, 0, 0.54)';
	var minBlack = exports.minBlack = 'rgba(0, 0, 0, 0.26)';
	var faintBlack = exports.faintBlack = 'rgba(0, 0, 0, 0.12)';
	var fullWhite = exports.fullWhite = 'rgba(255, 255, 255, 1)';
	var darkWhite = exports.darkWhite = 'rgba(255, 255, 255, 0.87)';
	var lightWhite = exports.lightWhite = 'rgba(255, 255, 255, 0.54)';

/***/ },
/* 142 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.convertColorToString = convertColorToString;
	exports.convertHexToRGB = convertHexToRGB;
	exports.decomposeColor = decomposeColor;
	exports.getContrastRatio = getContrastRatio;
	exports.getLuminance = getLuminance;
	exports.emphasize = emphasize;
	exports.fade = fade;
	exports.darken = darken;
	exports.lighten = lighten;
	/**
	 * Returns a number whose value is limited to the given range.
	 *
	 * @param {number} value The value to be clamped
	 * @param {number} min The lower boundary of the output range
	 * @param {number} max The upper boundary of the output range
	 * @returns {number} A number in the range [min, max]
	 */
	function clamp(value, min, max) {
	  if (value < min) {
	    return min;
	  }
	  if (value > max) {
	    return max;
	  }
	  return value;
	}

	/**
	 * Converts a color object with type and values to a string.
	 *
	 * @param {object} color - Decomposed color
	 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
	 * @param {array} color.values - [n,n,n] or [n,n,n,n]
	 * @returns {string} A CSS color string
	 */
	function convertColorToString(color) {
	  var type = color.type,
	      values = color.values;


	  if (type.indexOf('rgb') > -1) {
	    // Only convert the first 3 values to int (i.e. not alpha)
	    for (var i = 0; i < 3; i++) {
	      values[i] = parseInt(values[i]);
	    }
	  }

	  var colorString = void 0;

	  if (type.indexOf('hsl') > -1) {
	    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
	  } else {
	    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
	  }

	  if (values.length === 4) {
	    colorString += ', ' + color.values[3] + ')';
	  } else {
	    colorString += ')';
	  }

	  return colorString;
	}

	/**
	 * Converts a color from CSS hex format to CSS rgb format.
	 *
	 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
	 *  @returns {string} A CSS rgb color string
	 */
	function convertHexToRGB(color) {
	  if (color.length === 4) {
	    var extendedColor = '#';
	    for (var i = 1; i < color.length; i++) {
	      extendedColor += color.charAt(i) + color.charAt(i);
	    }
	    color = extendedColor;
	  }

	  var values = {
	    r: parseInt(color.substr(1, 2), 16),
	    g: parseInt(color.substr(3, 2), 16),
	    b: parseInt(color.substr(5, 2), 16)
	  };

	  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
	}

	/**
	 * Returns an object with the type and values of a color.
	 *
	 * Note: Does not support rgb % values.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {{type: string, values: number[]}} A MUI color object
	 */
	function decomposeColor(color) {
	  if (color.charAt(0) === '#') {
	    return decomposeColor(convertHexToRGB(color));
	  }

	  var marker = color.indexOf('(');
	  var type = color.substring(0, marker);
	  var values = color.substring(marker + 1, color.length - 1).split(',');
	  values = values.map(function (value) {
	    return parseFloat(value);
	  });

	  return { type: type, values: values };
	}

	/**
	 * Calculates the contrast ratio between two colors.
	 *
	 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	 *
	 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
	 */
	function getContrastRatio(foreground, background) {
	  var lumA = getLuminance(foreground);
	  var lumB = getLuminance(background);
	  var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);

	  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
	}

	/**
	 * The relative brightness of any point in a color space,
	 * normalized to 0 for darkest black and 1 for lightest white.
	 *
	 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} The relative brightness of the color in the range 0 - 1
	 */
	function getLuminance(color) {
	  color = decomposeColor(color);

	  if (color.type.indexOf('rgb') > -1) {
	    var rgb = color.values.map(function (val) {
	      val /= 255; // normalized
	      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	    });
	    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
	  } else if (color.type.indexOf('hsl') > -1) {
	    return color.values[2] / 100;
	  }
	}

	/**
	 * Darken or lighten a colour, depending on its luminance.
	 * Light colors are darkened, dark colors are lightened.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function emphasize(color) {
	  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;

	  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
	}

	/**
	 * Set the absolute transparency of a color.
	 * Any existing alpha values are overwritten.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} value - value to set the alpha channel to in the range 0 -1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function fade(color, value) {
	  color = decomposeColor(color);
	  value = clamp(value, 0, 1);

	  if (color.type === 'rgb' || color.type === 'hsl') {
	    color.type += 'a';
	  }
	  color.values[3] = value;

	  return convertColorToString(color);
	}

	/**
	 * Darkens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function darken(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient, 0, 1);

	  if (color.type.indexOf('hsl') > -1) {
	    color.values[2] *= 1 - coefficient;
	  } else if (color.type.indexOf('rgb') > -1) {
	    for (var i = 0; i < 3; i++) {
	      color.values[i] *= 1 - coefficient;
	    }
	  }
	  return convertColorToString(color);
	}

	/**
	 * Lightens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function lighten(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient, 0, 1);

	  if (color.type.indexOf('hsl') > -1) {
	    color.values[2] += (100 - color.values[2]) * coefficient;
	  } else if (color.type.indexOf('rgb') > -1) {
	    for (var i = 0; i < 3; i++) {
	      color.values[i] += (255 - color.values[i]) * coefficient;
	    }
	  }

	  return convertColorToString(color);
	}

/***/ },
/* 143 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  iconSize: 24,

	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopDrawerMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(124);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	exports.default = getMuiTheme;

	var _lodash = __webpack_require__(145);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _colorManipulator = __webpack_require__(142);

	var _lightBaseTheme = __webpack_require__(140);

	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

	var _zIndex = __webpack_require__(146);

	var _zIndex2 = _interopRequireDefault(_zIndex);

	var _autoprefixer = __webpack_require__(147);

	var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

	var _callOnce = __webpack_require__(150);

	var _callOnce2 = _interopRequireDefault(_callOnce);

	var _rtl = __webpack_require__(151);

	var _rtl2 = _interopRequireDefault(_rtl);

	var _compose = __webpack_require__(155);

	var _compose2 = _interopRequireDefault(_compose);

	var _typography = __webpack_require__(156);

	var _typography2 = _interopRequireDefault(_typography);

	var _colors = __webpack_require__(141);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get the MUI theme corresponding to a base theme.
	 * It's possible to override the computed theme values
	 * by providing a second argument. The calculated
	 * theme will be deeply merged with the second argument.
	 */
	function getMuiTheme(muiTheme) {
	  for (var _len = arguments.length, more = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    more[_key - 1] = arguments[_key];
	  }

	  muiTheme = _lodash2.default.apply(undefined, [{
	    zIndex: _zIndex2.default,
	    isRtl: false,
	    userAgent: undefined
	  }, _lightBaseTheme2.default, muiTheme].concat(more));

	  var _muiTheme = muiTheme,
	      spacing = _muiTheme.spacing,
	      fontFamily = _muiTheme.fontFamily,
	      palette = _muiTheme.palette;

	  var baseTheme = { spacing: spacing, fontFamily: fontFamily, palette: palette };

	  muiTheme = (0, _lodash2.default)({
	    appBar: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      height: spacing.desktopKeylineIncrement,
	      titleFontWeight: _typography2.default.fontWeightNormal,
	      padding: spacing.desktopGutter
	    },
	    avatar: {
	      color: palette.canvasColor,
	      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.26)
	    },
	    badge: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.primary1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    bottomNavigation: {
	      backgroundColor: palette.canvasColor,
	      unselectedColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      selectedColor: palette.primary1Color,
	      height: 56,
	      unselectedFontSize: 12,
	      selectedFontSize: 14
	    },
	    button: {
	      height: 36,
	      minWidth: 88,
	      iconButtonSize: spacing.iconSize * 2
	    },
	    card: {
	      titleColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      subtitleColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    cardMedia: {
	      color: _colors.darkWhite,
	      overlayContentBackground: _colors.lightBlack,
	      titleColor: _colors.darkWhite,
	      subtitleColor: _colors.lightWhite
	    },
	    cardText: {
	      textColor: palette.textColor
	    },
	    checkbox: {
	      boxColor: palette.textColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    chip: {
	      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12),
	      deleteIconColor: (0, _colorManipulator.fade)(palette.textColor, 0.26),
	      textColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      fontSize: 14,
	      fontWeight: _typography2.default.fontWeightNormal,
	      shadow: '0 1px 6px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12) + ',\n        0 1px 4px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12)
	    },
	    datePicker: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      calendarTextColor: palette.textColor,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor,
	      calendarYearBackgroundColor: palette.canvasColor
	    },
	    dialog: {
	      titleFontSize: 22,
	      bodyFontSize: 16,
	      bodyColor: (0, _colorManipulator.fade)(palette.textColor, 0.6)
	    },
	    dropDownMenu: {
	      accentColor: palette.borderColor
	    },
	    enhancedButton: {
	      tapHighlightColor: _colors.transparent
	    },
	    flatButton: {
	      color: _colors.transparent,
	      buttonFilterColor: '#999999',
	      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
	      textColor: palette.textColor,
	      primaryTextColor: palette.primary1Color,
	      secondaryTextColor: palette.accent1Color,
	      fontSize: _typography2.default.fontStyleButtonFontSize,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    floatingActionButton: {
	      buttonSize: 56,
	      miniSize: 40,
	      color: palette.primary1Color,
	      iconColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryIconColor: palette.alternateTextColor,
	      disabledTextColor: palette.disabledColor,
	      disabledColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12)
	    },
	    gridTile: {
	      textColor: _colors.white
	    },
	    icon: {
	      color: palette.canvasColor,
	      backgroundColor: palette.primary1Color
	    },
	    inkBar: {
	      backgroundColor: palette.accent1Color
	    },
	    drawer: {
	      width: spacing.desktopKeylineIncrement * 4,
	      color: palette.canvasColor
	    },
	    listItem: {
	      nestedLevelDepth: 18,
	      secondaryTextColor: palette.secondaryTextColor,
	      leftIconColor: _colors.grey600,
	      rightIconColor: _colors.grey600
	    },
	    menu: {
	      backgroundColor: palette.canvasColor,
	      containerBackgroundColor: palette.canvasColor
	    },
	    menuItem: {
	      dataHeight: 32,
	      height: 48,
	      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1),
	      padding: spacing.desktopGutter,
	      selectedTextColor: palette.accent1Color,
	      rightIconDesktopFill: _colors.grey600
	    },
	    menuSubheader: {
	      padding: spacing.desktopGutter,
	      borderColor: palette.borderColor,
	      textColor: palette.primary1Color
	    },
	    overlay: {
	      backgroundColor: _colors.lightBlack
	    },
	    paper: {
	      color: palette.textColor,
	      backgroundColor: palette.canvasColor,
	      zDepthShadows: [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
	        return '0 ' + d[0] + 'px ' + d[1] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[2]) + ',\n         0 ' + d[3] + 'px ' + d[4] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[5]);
	      })
	    },
	    radioButton: {
	      borderColor: palette.textColor,
	      backgroundColor: palette.alternateTextColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      size: 24,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    raisedButton: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.primary1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      disabledColor: (0, _colorManipulator.darken)(palette.alternateTextColor, 0.1),
	      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
	      fontSize: _typography2.default.fontStyleButtonFontSize,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    refreshIndicator: {
	      strokeColor: palette.borderColor,
	      loadingStrokeColor: palette.primary1Color
	    },
	    ripple: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.87)
	    },
	    slider: {
	      trackSize: 2,
	      trackColor: palette.primary3Color,
	      trackColorSelected: palette.accent3Color,
	      handleSize: 12,
	      handleSizeDisabled: 8,
	      handleSizeActive: 18,
	      handleColorZero: palette.primary3Color,
	      handleFillColor: palette.alternateTextColor,
	      selectionColor: palette.primary1Color,
	      rippleColor: palette.primary1Color
	    },
	    snackbar: {
	      textColor: palette.alternateTextColor,
	      backgroundColor: palette.textColor,
	      actionColor: palette.accent1Color
	    },
	    subheader: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    stepper: {
	      backgroundColor: 'transparent',
	      hoverBackgroundColor: (0, _colorManipulator.fade)(_colors.black, 0.06),
	      iconColor: palette.primary1Color,
	      hoveredIconColor: _colors.grey700,
	      inactiveIconColor: _colors.grey500,
	      textColor: (0, _colorManipulator.fade)(_colors.black, 0.87),
	      disabledTextColor: (0, _colorManipulator.fade)(_colors.black, 0.26),
	      connectorLineColor: _colors.grey400
	    },
	    svgIcon: {
	      color: palette.textColor
	    },
	    table: {
	      backgroundColor: palette.canvasColor
	    },
	    tableFooter: {
	      borderColor: palette.borderColor,
	      textColor: palette.accent3Color
	    },
	    tableHeader: {
	      borderColor: palette.borderColor
	    },
	    tableHeaderColumn: {
	      textColor: palette.accent3Color,
	      height: 56,
	      spacing: 24
	    },
	    tableRow: {
	      hoverColor: palette.accent2Color,
	      stripeColor: (0, _colorManipulator.fade)((0, _colorManipulator.lighten)(palette.primary1Color, 0.5), 0.4),
	      selectedColor: palette.borderColor,
	      textColor: palette.textColor,
	      borderColor: palette.borderColor,
	      height: 48
	    },
	    tableRowColumn: {
	      height: 48,
	      spacing: 24
	    },
	    tabs: {
	      backgroundColor: palette.primary1Color,
	      textColor: (0, _colorManipulator.fade)(palette.alternateTextColor, 0.7),
	      selectedTextColor: palette.alternateTextColor
	    },
	    textField: {
	      textColor: palette.textColor,
	      hintColor: palette.disabledColor,
	      floatingLabelColor: palette.disabledColor,
	      disabledTextColor: palette.disabledColor,
	      errorColor: _colors.red500,
	      focusColor: palette.primary1Color,
	      backgroundColor: 'transparent',
	      borderColor: palette.borderColor
	    },
	    timePicker: {
	      color: palette.alternateTextColor,
	      textColor: palette.accent3Color,
	      accentColor: palette.primary1Color,
	      clockColor: palette.textColor,
	      clockCircleColor: palette.clockCircleColor,
	      headerColor: palette.pickerHeaderColor || palette.primary1Color,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    toggle: {
	      thumbOnColor: palette.primary1Color,
	      thumbOffColor: palette.accent2Color,
	      thumbDisabledColor: palette.borderColor,
	      thumbRequiredColor: palette.primary1Color,
	      trackOnColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5),
	      trackOffColor: palette.primary3Color,
	      trackDisabledColor: palette.primary3Color,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor,
	      trackRequiredColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5)
	    },
	    toolbar: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      backgroundColor: (0, _colorManipulator.darken)(palette.accent2Color, 0.05),
	      height: 56,
	      titleFontSize: 20,
	      iconColor: (0, _colorManipulator.fade)(palette.textColor, 0.4),
	      separatorColor: (0, _colorManipulator.fade)(palette.textColor, 0.175),
	      menuHoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1)
	    },
	    tooltip: {
	      color: _colors.white,
	      rippleBackgroundColor: _colors.grey700
	    }
	  }, muiTheme, {
	    baseTheme: baseTheme, // To provide backward compatibility.
	    rawTheme: baseTheme });

	  var transformers = [_autoprefixer2.default, _rtl2.default, _callOnce2.default].map(function (t) {
	    return t(muiTheme);
	  }).filter(function (t) {
	    return t;
	  });
	  muiTheme.prepareStyles = _compose2.default.apply(undefined, (0, _toConsumableArray3.default)(transformers));

	  return muiTheme;
	}

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = require("lodash.merge");

/***/ },
/* 146 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  menu: 1000,
	  appBar: 1100,
	  drawerOverlay: 1200,
	  drawer: 1300,
	  dialogOverlay: 1400,
	  dialog: 1500,
	  layer: 2000,
	  popover: 2100,
	  snackbar: 2900,
	  tooltip: 3000
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(65);

	var _typeof3 = _interopRequireDefault(_typeof2);

	exports.default = function (muiTheme) {
	  var userAgent = muiTheme.userAgent;

	  if (userAgent === undefined && typeof navigator !== 'undefined') {
	    userAgent = navigator.userAgent;
	  }

	  if (userAgent === undefined && !hasWarnedAboutUserAgent) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: userAgent should be supplied in the muiTheme context\n      for server-side rendering.') : void 0;

	    hasWarnedAboutUserAgent = true;
	  }

	  if (userAgent === false) {
	    // Disabled autoprefixer
	    return null;
	  } else if (userAgent === 'all' || userAgent === undefined) {
	    // Prefix for all user agent
	    return function (style) {
	      return _inlineStylePrefixer2.default.prefixAll(style);
	    };
	  } else {
	    var _ret = function () {
	      var prefixer = new _inlineStylePrefixer2.default({
	        userAgent: userAgent
	      });

	      return {
	        v: function v(style) {
	          return prefixer.prefix(style);
	        }
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	  }
	};

	var _inlineStylePrefixer = __webpack_require__(148);

	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

	var _warning = __webpack_require__(149);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hasWarnedAboutUserAgent = false;

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = require("inline-style-prefixer");

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = require("warning");

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = callOnce;

	var _warning = __webpack_require__(149);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CALLED_ONCE = 'muiPrepared';

	function callOnce() {
	  if (process.env.NODE_ENV !== 'production') {
	    return function (style) {
	      if (style[CALLED_ONCE]) {
	        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: You cannot call prepareStyles() on the same style object more than once.') : void 0;
	      }
	      style[CALLED_ONCE] = true;
	      return style;
	    };
	  }
	}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(152);

	var _keys2 = _interopRequireDefault(_keys);

	exports.default = rtl;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

	/**
	 * This function ensures that `style` supports both ltr and rtl directions by
	 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
	 * necessary.
	 */
	function rtl(muiTheme) {
	  if (muiTheme.isRtl) {
	    return function (style) {
	      if (style.directionInvariant === true) {
	        return style;
	      }

	      var flippedAttributes = {
	        // Keys and their replacements.
	        right: 'left',
	        left: 'right',
	        marginRight: 'marginLeft',
	        marginLeft: 'marginRight',
	        paddingRight: 'paddingLeft',
	        paddingLeft: 'paddingRight',
	        borderRight: 'borderLeft',
	        borderLeft: 'borderRight'
	      };

	      var newStyle = {};

	      (0, _keys2.default)(style).forEach(function (attribute) {
	        var value = style[attribute];
	        var key = attribute;

	        if (flippedAttributes.hasOwnProperty(attribute)) {
	          key = flippedAttributes[attribute];
	        }

	        switch (attribute) {
	          case 'float':
	          case 'textAlign':
	            if (value === 'right') {
	              value = 'left';
	            } else if (value === 'left') {
	              value = 'right';
	            }
	            break;

	          case 'direction':
	            if (value === 'ltr') {
	              value = 'rtl';
	            } else if (value === 'rtl') {
	              value = 'ltr';
	            }
	            break;

	          case 'transform':
	            if (!value) break;
	            var matches = void 0;
	            if (matches = value.match(reTranslate)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	            }
	            if (matches = value.match(reSkew)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ', ' + (-parseFloat(matches[7]) + matches[8]) : '');
	            }
	            break;

	          case 'transformOrigin':
	            if (!value) break;
	            if (value.indexOf('right') > -1) {
	              value = value.replace('right', 'left');
	            } else if (value.indexOf('left') > -1) {
	              value = value.replace('left', 'right');
	            }
	            break;
	        }

	        newStyle[key] = value;
	      });

	      return newStyle;
	    };
	  }
	}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(154);
	module.exports = __webpack_require__(21).Object.keys;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(52)
	  , $keys    = __webpack_require__(35);

	__webpack_require__(58)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 155 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = compose;
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  return function () {
	    var result = last.apply(undefined, arguments);
	    for (var i = funcs.length - 2; i >= 0; i--) {
	      var f = funcs[i];
	      result = f(result);
	    }
	    return result;
	  };
	}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _colors = __webpack_require__(141);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Typography = function Typography() {
	  (0, _classCallCheck3.default)(this, Typography);

	  // text colors
	  this.textFullBlack = _colors.fullBlack;
	  this.textDarkBlack = _colors.darkBlack;
	  this.textLightBlack = _colors.lightBlack;
	  this.textMinBlack = _colors.minBlack;
	  this.textFullWhite = _colors.fullWhite;
	  this.textDarkWhite = _colors.darkWhite;
	  this.textLightWhite = _colors.lightWhite;

	  // font weight
	  this.fontWeightLight = 300;
	  this.fontWeightNormal = 400;
	  this.fontWeightMedium = 500;

	  this.fontStyleButtonFontSize = 14;
	};

	exports.default = new Typography();

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(158);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(167);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionViewHeadline = function ActionViewHeadline(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z' })
	  );
	};
	ActionViewHeadline = (0, _pure2.default)(ActionViewHeadline);
	ActionViewHeadline.displayName = 'ActionViewHeadline';
	ActionViewHeadline.muiName = 'SvgIcon';

	exports.default = ActionViewHeadline;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _shouldUpdate = __webpack_require__(159);

	var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

	var _shallowEqual = __webpack_require__(117);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _createHelper = __webpack_require__(160);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
	  return !(0, _shallowEqual2.default)(props, nextProps);
	});

	exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var _createHelper = __webpack_require__(160);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(163);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var shouldUpdate = function shouldUpdate(test) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return function (_Component) {
	      _inherits(_class, _Component);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }

	      _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return test(this.props, nextProps);
	      };

	      _class.prototype.render = function render() {
	        return factory(this.props);
	      };

	      return _class;
	    }(_react.Component);
	  };
	};

	exports.default = (0, _createHelper2.default)(shouldUpdate, 'shouldUpdate');

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var createHelper = function createHelper(func, helperName) {
	  var setDisplayName = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	  var noArgs = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
	    var _ret = function () {
	      /* eslint-disable global-require */
	      var wrapDisplayName = __webpack_require__(161).default;
	      /* eslint-enable global-require */

	      if (noArgs) {
	        return {
	          v: function v(BaseComponent) {
	            var Component = func(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          }
	        };
	      }

	      return {
	        v: function v() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }

	          if (args.length > func.length) {
	            /* eslint-disable */
	            console.error(
	            /* eslint-enable */
	            'Too many arguments passed to ' + helperName + '(). It should called ' + ('like so: ' + helperName + '(...args)(BaseComponent).'));
	          }

	          return function (BaseComponent) {
	            var Component = func.apply(undefined, args)(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          };
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }

	  return func;
	};

	exports.default = createHelper;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _getDisplayName = __webpack_require__(162);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
	};

	exports.default = wrapDisplayName;

/***/ },
/* 162 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var getDisplayName = function getDisplayName(Component) {
	  if (typeof Component === 'string') {
	    return Component;
	  }

	  if (!Component) {
	    return undefined;
	  }

	  return Component.displayName || Component.name || 'Component';
	};

	exports.default = getDisplayName;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createEagerElementUtil = __webpack_require__(164);

	var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

	var _isReferentiallyTransparentFunctionComponent = __webpack_require__(165);

	var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createFactory = function createFactory(type) {
	  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
	  return function (p, c) {
	    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
	  };
	};

	exports.default = createFactory;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
	  if (!hasKey && isReferentiallyTransparent) {
	    if (children) {
	      return type(_extends({}, props, { children: children }));
	    }
	    return type(props);
	  }

	  var Component = type;

	  if (children) {
	    return _react2.default.createElement(
	      Component,
	      props,
	      children
	    );
	  }

	  return _react2.default.createElement(Component, props);
	};

	exports.default = createEagerElementUtil;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isClassComponent = __webpack_require__(166);

	var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
	  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && !Component.propTypes);
	};

	exports.default = isReferentiallyTransparentFunctionComponent;

/***/ },
/* 166 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var isClassComponent = function isClassComponent(Component) {
	  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
	};

	exports.default = isClassComponent;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _SvgIcon = __webpack_require__(168);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SvgIcon2.default;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SvgIcon = function (_Component) {
	  (0, _inherits3.default)(SvgIcon, _Component);

	  function SvgIcon() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, SvgIcon);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(SvgIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          color = _props.color,
	          hoverColor = _props.hoverColor,
	          onMouseEnter = _props.onMouseEnter,
	          onMouseLeave = _props.onMouseLeave,
	          style = _props.style,
	          viewBox = _props.viewBox,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
	      var _context$muiTheme = this.context.muiTheme,
	          svgIcon = _context$muiTheme.svgIcon,
	          prepareStyles = _context$muiTheme.prepareStyles;


	      var offColor = color ? color : 'currentColor';
	      var onColor = hoverColor ? hoverColor : offColor;

	      var mergedStyles = (0, _simpleAssign2.default)({
	        display: 'inline-block',
	        color: svgIcon.color,
	        fill: this.state.hovered ? onColor : offColor,
	        height: 24,
	        width: 24,
	        userSelect: 'none',
	        transition: _transitions2.default.easeOut()
	      }, style);

	      return _react2.default.createElement(
	        'svg',
	        (0, _extends3.default)({}, other, {
	          onMouseEnter: this.handleMouseEnter,
	          onMouseLeave: this.handleMouseLeave,
	          style: prepareStyles(mergedStyles),
	          viewBox: viewBox
	        }),
	        children
	      );
	    }
	  }]);
	  return SvgIcon;
	}(_react.Component);

	SvgIcon.muiName = 'SvgIcon';
	SvgIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  viewBox: '0 0 24 24'
	};
	SvgIcon.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? SvgIcon.propTypes = {
	  /**
	   * Elements passed into the SVG Icon.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * This is the fill color of the svg icon.
	   * If not specified, this component will default
	   * to muiTheme.palette.textColor.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _react.PropTypes.string,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Allows you to redefine what the coordinates
	   * without units mean inside an svg element. For example,
	   * if the SVG element is 500 (width) by 200 (height), and you
	   * pass viewBox="0 0 50 20", this means that the coordinates inside
	   * the svg will go from the top left corner (0,0) to bottom right (50,20)
	   * and each unit will be worth 10px.
	   */
	  viewBox: _react.PropTypes.string
	} : void 0;
	exports.default = SvgIcon;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(158);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(167);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentClear = function ContentClear(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' })
	  );
	};
	ContentClear = (0, _pure2.default)(ContentClear);
	ContentClear.displayName = 'ContentClear';
	ContentClear.muiName = 'SvgIcon';

	exports.default = ContentClear;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ed.png";

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	__webpack_require__(172);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(3);

	var Footer = function (_Component) {
	  _inherits(Footer, _Component);

	  function Footer() {
	    _classCallCheck(this, Footer);

	    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	  }

	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'footer' },
	        React.createElement(
	          'div',
	          { className: 'container' },
	          React.createElement(
	            'div',
	            { className: 'credits' },
	            React.createElement(
	              'span',
	              { className: 'corp' },
	              '\xA9 Eddine Corp'
	            ),
	            React.createElement(
	              'span',
	              { className: 'spacer' },
	              '|'
	            ),
	            React.createElement(
	              'span',
	              { className: 'about' },
	              'About'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Footer;
	}(_react.Component);

	exports.default = Footer;

/***/ },
/* 172 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _Home = __webpack_require__(174);

	var _Home2 = _interopRequireDefault(_Home);

	var _reactRouter = __webpack_require__(1);

	var _AppBar = __webpack_require__(9);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	var _config = __webpack_require__(175);

	var _config2 = _interopRequireDefault(_config);

	var _DinoSir = __webpack_require__(176);

	var _DinoSir2 = _interopRequireDefault(_DinoSir);

	var _lyon_desktop = __webpack_require__(177);

	var _lyon_desktop2 = _interopRequireDefault(_lyon_desktop);

	var _lyon_mobile = __webpack_require__(178);

	var _lyon_mobile2 = _interopRequireDefault(_lyon_mobile);

	var _shanghai_desktop = __webpack_require__(179);

	var _shanghai_desktop2 = _interopRequireDefault(_shanghai_desktop);

	var _shanghai_wide = __webpack_require__(180);

	var _shanghai_wide2 = _interopRequireDefault(_shanghai_wide);

	var _shanghai_mobile = __webpack_require__(181);

	var _shanghai_mobile2 = _interopRequireDefault(_shanghai_mobile);

	var _paris_desktop = __webpack_require__(182);

	var _paris_desktop2 = _interopRequireDefault(_paris_desktop);

	var _paris_mobile = __webpack_require__(183);

	var _paris_mobile2 = _interopRequireDefault(_paris_mobile);

	var _cv = __webpack_require__(184);

	var _cv2 = _interopRequireDefault(_cv);

	var _Map = __webpack_require__(185);

	var _Map2 = _interopRequireDefault(_Map);

	var _Contact = __webpack_require__(186);

	var _Contact2 = _interopRequireDefault(_Contact);

	var _Card = __webpack_require__(217);

	var _Card2 = _interopRequireDefault(_Card);

	var _NavLink = __webpack_require__(11);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _Duo = __webpack_require__(214);

	var _Duo2 = _interopRequireDefault(_Duo);

	var _axios = __webpack_require__(198);

	var _axios2 = _interopRequireDefault(_axios);

	var _Banner = __webpack_require__(219);

	var _Banner2 = _interopRequireDefault(_Banner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(3);


	var Who = function Who() {
	  var picture = React.createElement(
	    'a',
	    { href: '/resume', className: 'profilePicture' },
	    React.createElement('img', { src: _DinoSir2.default, alt: 'dinosir' })
	  );
	  var text = React.createElement(
	    'div',
	    { className: 'home-who__bio' },
	    React.createElement(
	      'h3',
	      { className: 'content-title' },
	      'Trust me, I\'m an engineer'
	    ),
	    React.createElement(
	      'p',
	      { className: 'content-text' },
	      'Basketball legend, web development genius, blabla lorem ipsum lorem ipsum who reads these self-descriptions anyway'
	    )
	  );
	  return React.createElement(_Duo2.default, { className: 'home-who content',
	    eltLeft: picture,
	    eltRight: text
	  });
	};

	var currentProjectID = 2;

	var WhatPlaceHolder = function WhatPlaceHolder() {
	  return React.createElement(
	    _NavLink2.default,
	    { to: '/portfolio', className: 'prout' },
	    React.createElement(_Card2.default, {
	      source: 'http://www.basketusa.com/wp-content/uploads/2017/02/okafor-1.jpg',
	      title: 'Jahlil Okafor',
	      description: 'Give it time, it\'s hosted on free servers !'
	    })
	  );
	};
	var What = function What(props) {
	  var text = React.createElement(
	    'div',
	    { className: 'content-text' },
	    React.createElement(
	      'h4',
	      null,
	      'My projects'
	    ),
	    React.createElement(
	      'p',
	      null,
	      'Check out my last realization, but also other school and personal works'
	    ),
	    React.createElement(
	      _NavLink2.default,
	      { to: '/portfolio', className: 'moreButton' },
	      'See more projects'
	    )
	  );
	  var exemple = props.currentProject ? React.createElement(
	    _NavLink2.default,
	    { to: '/portfolio/project/' + props.currentProject.id },
	    React.createElement(_Card2.default, {
	      source: props.currentProject.media,
	      title: props.currentProject.title,
	      description: props.currentProject.shortDescription
	    })
	  ) : React.createElement(WhatPlaceHolder, null);
	  return React.createElement(_Duo2.default, { className: 'home-what content',
	    eltLeft: text,
	    eltRight: exemple
	  });
	};

	var hometowns = [{
	  name: 'Lyon',
	  src: _lyon_desktop2.default,
	  srcsetXL: _lyon_desktop2.default,
	  srcsetMobile: _lyon_mobile2.default,
	  opacity: 1
	}, {
	  name: 'SH',
	  src: _shanghai_desktop2.default,
	  srcsetXL: _shanghai_wide2.default,
	  srcsetMobile: _shanghai_mobile2.default,
	  opacity: 0
	}, {
	  name: 'Paname',
	  src: _paris_desktop2.default,
	  srcsetXL: _paris_desktop2.default,
	  srcsetMobile: _paris_mobile2.default,
	  opacity: 0
	}];

	var Home = function (_Component) {
	  _inherits(Home, _Component);

	  function Home(props) {
	    _classCallCheck(this, Home);

	    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

	    _this.state = {
	      hometown: hometowns[Math.floor(Math.random() * 3)]
	    };
	    return _this;
	  }

	  _createClass(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var currentProjectAPI = _config2.default.projectsAPI + '?id=' + currentProjectID;
	      _axios2.default.get(currentProjectAPI).then(function (response) {
	        _this2.setState({ currentProject: response.data.projects });
	      }).catch(function (error) {
	        console.log(error.message);
	      });
	    }
	  }, {
	    key: 'setCurrentHometown',
	    value: function setCurrentHometown() {
	      if (!this.state.hometown) {
	        return '';
	      }
	      if (screen.width < 480) {
	        return this.state.hometown.srcsetMobile;
	      } else if (screen.width < 1440) {
	        return this.state.hometown.src;
	      }
	      return this.state.hometown.srcsetXL;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bgImg = this.setCurrentHometown();
	      return React.createElement(
	        'div',
	        { className: 'home' },
	        React.createElement(_Banner2.default, { title: 'Welcome to my sh*t', backgroundImage: 'url(' + bgImg + ')' }),
	        React.createElement(Who, null),
	        React.createElement(What, { currentProject: this.state.currentProject }),
	        React.createElement(_Contact2.default, null)
	      );
	    }
	  }]);

	  return Home;
	}(_react.Component);

	exports.default = Home;

/***/ },
/* 174 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 175 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  images: '../../../tools/images',
	  contactAPI: "https://snt-backend.herokuapp.com/api/contactus",
	  projectsAPI: "https://snt-backend.herokuapp.com/api/getProjects"
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Dino-sir.jpg";

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "lyon_desktop.png";

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "lyon_mobile.png";

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "shanghai_desktop.jpg";

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "shanghai_wide.jpg";

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "shanghai_mobile.jpg";

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "paris_desktop.jpg";

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "paris_mobile.jpg";

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cv.pdf";

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EIFFEL_TOWER_POSITION = {
	  lat: 48.858608,
	  lng: 2.294471
	};

	var Map = function (_Component) {
	  _inherits(Map, _Component);

	  function Map() {
	    _classCallCheck(this, Map);

	    return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
	  }

	  _createClass(Map, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.map = new google.maps.Map(this.refs.map, {
	        center: EIFFEL_TOWER_POSITION,
	        zoom: 16
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var mapStyle = {
	        width: '100%',
	        height: 300,
	        border: '1px solid black'
	      };

	      return _react2.default.createElement(
	        'div',
	        { ref: 'map', style: mapStyle },
	        'I should be a map!'
	      );
	    }
	  }]);

	  return Map;
	}(_react.Component);

	exports.default = Map;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _TextField = __webpack_require__(187);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _lightBaseTheme = __webpack_require__(140);

	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

	var _getMuiTheme = __webpack_require__(144);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _RaisedButton = __webpack_require__(194);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _axios = __webpack_require__(198);

	var _axios2 = _interopRequireDefault(_axios);

	var _config = __webpack_require__(175);

	var _config2 = _interopRequireDefault(_config);

	var _FlatButton = __webpack_require__(199);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _Dialog = __webpack_require__(202);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _Snackbar = __webpack_require__(207);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	var _CircularProgress = __webpack_require__(212);

	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

	var _Duo = __webpack_require__(214);

	var _Duo2 = _interopRequireDefault(_Duo);

	__webpack_require__(216);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(3);

	var Contact = function (_Component) {
	  _inherits(Contact, _Component);

	  function Contact(props) {
	    _classCallCheck(this, Contact);

	    var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

	    _this.state = {
	      errorText: {},
	      contact: {},
	      openRequiredFieldsDialog: false,
	      openMsgSentSnackbar: false,
	      snackBarMessage: '',
	      disableFields: false
	    };
	    return _this;
	  }

	  _createClass(Contact, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default) };
	    }
	  }, {
	    key: 'handleRFD',
	    value: function handleRFD(show) {
	      this.setState({ openRequiredFieldsDialog: show });
	    }
	  }, {
	    key: 'handleMSS',
	    value: function handleMSS(show) {
	      this.setState({ openMsgSentSnackbar: show });
	    }
	  }, {
	    key: 'makeChangeHandler',
	    value: function makeChangeHandler(property) {
	      var _this2 = this;

	      return function (event) {
	        // Set the error message of the corresponding input
	        var er = _this2.state.errorText;
	        er[property] = event.target.value == '' ? 'This field is required' : '';

	        // If dealing with email field, value should match the classical email address regex
	        if (property == 'email' && event.target.value != '') {
	          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	          if (!re.test(event.target.value)) {
	            er[property] = 'Email address should match the format \'smthing@smthing.smthing\'';
	          }
	        }

	        // Update the object containing the data used to send the message
	        var contactMessage = _this2.state.contact;
	        contactMessage[property] = event.target.value;

	        _this2.setState({ contact: contactMessage });
	        _this2.setState({ errorText: er });
	      };
	    }
	  }, {
	    key: 'sendMessage',
	    value: function sendMessage() {
	      var _this3 = this;

	      var errors = this.state.errorText;

	      // Check if the form is filled
	      if (!errors || Object.keys(errors).length === 0 && errors.constructor === Object) {
	        this.handleRFD(true);
	      } else {
	        // Check if the form is correctly filled, might be improved later
	        for (var label in errors) {
	          if (errors[label] != '' || Object.keys(errors).length < 4) {
	            this.handleRFD(true);
	            return;
	          }
	        }

	        this.setState({ disableFields: true });

	        //Send email
	        _axios2.default.post(_config2.default.contactAPI, {
	          name: this.state.contact.firstName + ' ' + this.state.contact.lastName,
	          from: this.state.contact.email,
	          message: this.state.contact.message
	        }).then(function (response) {
	          _this3.setState({ snackBarMessage: response.data.msg, disableFields: false });
	          _this3.handleMSS(true);
	        }).catch(function (error) {
	          _this3.setState({ snackBarMessage: error.toString(), disableFields: false });
	          _this3.handleMSS(true);
	          console.log(error);
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var actions = [React.createElement(_FlatButton2.default, {
	        label: 'OK',
	        primary: true,
	        onTouchTap: function onTouchTap() {
	          _this4.handleRFD(false);
	        }
	      })];

	      var msg = React.createElement(
	        'div',
	        { className: 'contact-msg' },
	        React.createElement(
	          'h4',
	          null,
	          'Contact me !'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'Please feel free to send a message if you have any questions you believe I could answer, or if you just want to say hello'
	        )
	      );

	      // Should be a component
	      var form = React.createElement(
	        'div',
	        { className: 'contact-form' },
	        React.createElement(
	          'div',
	          { className: 'loading-container' },
	          React.createElement(_CircularProgress2.default, {
	            size: 80,
	            style: { display: this.state.disableFields ? 'block' : 'none',
	              position: 'relative',
	              left: '50%',
	              top: '50%',
	              transform: 'translate(-50%, -50%)'
	            }
	          })
	        ),
	        React.createElement(
	          'div',
	          { className: 'name' },
	          React.createElement(_TextField2.default, {
	            floatingLabelText: 'First Name',
	            errorText: this.state.errorText.firstName,
	            onBlur: this.makeChangeHandler('firstName').bind(this),
	            disabled: this.state.disableFields,
	            style: { filter: this.state.disableFields ? 'blur(3px)' : 'none' }
	          }),
	          React.createElement(_TextField2.default, {
	            floatingLabelText: 'Last Name',
	            errorText: this.state.errorText.lastName,
	            onBlur: this.makeChangeHandler('lastName').bind(this),
	            disabled: this.state.disableFields,
	            style: { filter: this.state.disableFields ? 'blur(3px)' : 'none' }
	          })
	        ),
	        React.createElement(
	          'div',
	          { className: 'mail-address' },
	          React.createElement(_TextField2.default, {
	            floatingLabelText: 'Email address',
	            errorText: this.state.errorText.email,
	            onBlur: this.makeChangeHandler('email').bind(this),
	            fullWidth: true,
	            disabled: this.state.disableFields,
	            style: { filter: this.state.disableFields ? 'blur(3px)' : 'none' }
	          })
	        ),
	        React.createElement(
	          'div',
	          { className: 'message' },
	          React.createElement(_TextField2.default, {
	            floatingLabelText: 'Your message',
	            errorText: this.state.errorText.message,
	            onBlur: this.makeChangeHandler('message').bind(this),
	            fullWidth: true,
	            multiLine: true,
	            rows: 4,
	            className: 'tf',
	            disabled: this.state.disableFields,
	            style: { filter: this.state.disableFields ? 'blur(3px)' : 'none' }
	          })
	        ),
	        React.createElement(_FlatButton2.default, {
	          label: 'Send message',
	          className: 'send-button',
	          secondary: false,
	          disabled: this.state.disableFields,
	          onClick: this.sendMessage.bind(this)
	        })
	      );

	      return React.createElement(
	        'div',
	        { className: 'home-contact content' },
	        React.createElement(
	          _Dialog2.default,
	          {
	            title: 'Missing information',
	            actions: actions,
	            modal: true,
	            open: this.state.openRequiredFieldsDialog
	          },
	          'Please be sure to fill all the required fields'
	        ),
	        React.createElement(_Snackbar2.default, {
	          open: this.state.openMsgSentSnackbar,
	          message: this.state.snackBarMessage,
	          autoHideDuration: 4000,
	          onRequestClose: function onRequestClose() {
	            _this4.handleMSS(false);
	          }
	        }),
	        React.createElement('div', { className: 'contact-elts' }),
	        React.createElement(_Duo2.default, { className: 'contact-elts',
	          eltLeft: msg,
	          eltRight: form
	        })
	      );
	    }
	  }]);

	  return Contact;
	}(_react.Component);

	exports.default = Contact;


	Contact.childContextTypes = {
	  muiTheme: React.PropTypes.object.isRequired
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _TextField = __webpack_require__(188);

	var _TextField2 = _interopRequireDefault(_TextField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _TextField2.default;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(116);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowEqual = __webpack_require__(117);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _EnhancedTextarea = __webpack_require__(189);

	var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);

	var _TextFieldHint = __webpack_require__(191);

	var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

	var _TextFieldLabel = __webpack_require__(192);

	var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

	var _TextFieldUnderline = __webpack_require__(193);

	var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

	var _warning = __webpack_require__(149);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getStyles = function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      _context$muiTheme$tex = _context$muiTheme.textField,
	      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
	      focusColor = _context$muiTheme$tex.focusColor,
	      textColor = _context$muiTheme$tex.textColor,
	      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
	      backgroundColor = _context$muiTheme$tex.backgroundColor,
	      errorColor = _context$muiTheme$tex.errorColor;


	  var styles = {
	    root: {
	      fontSize: 16,
	      lineHeight: '24px',
	      width: props.fullWidth ? '100%' : 256,
	      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
	      display: 'inline-block',
	      position: 'relative',
	      backgroundColor: backgroundColor,
	      fontFamily: baseTheme.fontFamily,
	      transition: _transitions2.default.easeOut('200ms', 'height'),
	      cursor: props.disabled ? 'not-allowed' : 'auto'
	    },
	    error: {
	      position: 'relative',
	      bottom: 2,
	      fontSize: 12,
	      lineHeight: '12px',
	      color: errorColor,
	      transition: _transitions2.default.easeOut()
	    },
	    floatingLabel: {
	      color: props.disabled ? disabledTextColor : floatingLabelColor,
	      pointerEvents: 'none'
	    },
	    input: {
	      padding: 0,
	      position: 'relative',
	      width: '100%',
	      border: 'none',
	      outline: 'none',
	      backgroundColor: 'rgba(0,0,0,0)',
	      color: props.disabled ? disabledTextColor : textColor,
	      cursor: 'inherit',
	      font: 'inherit',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
	    inputNative: {
	      appearance: 'textfield' }
	  };

	  (0, _simpleAssign2.default)(styles.error, props.errorStyle);

	  styles.textarea = (0, _simpleAssign2.default)({}, styles.input, {
	    marginTop: props.floatingLabelText ? 36 : 12,
	    marginBottom: props.floatingLabelText ? -36 : -12,
	    boxSizing: 'border-box',
	    font: 'inherit'
	  });

	  // Do not assign a height to the textarea as he handles it on his own.
	  styles.input.height = '100%';

	  if (state.isFocused) {
	    styles.floatingLabel.color = focusColor;
	  }

	  if (props.floatingLabelText) {
	    styles.input.boxSizing = 'border-box';

	    if (!props.multiLine) {
	      styles.input.marginTop = 14;
	    }

	    if (state.errorText) {
	      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
	    }
	  }

	  if (state.errorText) {
	    if (state.isFocused) {
	      styles.floatingLabel.color = styles.error.color;
	    }
	  }

	  return styles;
	};

	/**
	 * Check if a value is valid to be displayed inside an input.
	 *
	 * @param The value to check.
	 * @returns True if the string provided is valid, false otherwise.
	 */
	function isValid(value) {
	  return value !== '' && value !== undefined && value !== null;
	}

	var TextField = function (_Component) {
	  (0, _inherits3.default)(TextField, _Component);

	  function TextField() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, TextField);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isFocused: false,
	      errorText: undefined,
	      hasValue: false
	    }, _this.handleInputBlur = function (event) {
	      _this.setState({ isFocused: false });
	      if (_this.props.onBlur) _this.props.onBlur(event);
	    }, _this.handleInputChange = function (event) {
	      _this.setState({ hasValue: isValid(event.target.value) });
	      if (_this.props.onChange) _this.props.onChange(event, event.target.value);
	    }, _this.handleInputFocus = function (event) {
	      if (_this.props.disabled) {
	        return;
	      }
	      _this.setState({ isFocused: true });
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _this.handleHeightChange = function (event, height) {
	      var newHeight = height + 24;
	      if (_this.props.floatingLabelText) {
	        newHeight += 24;
	      }
	      _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(TextField, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          children = _props.children,
	          name = _props.name,
	          hintText = _props.hintText,
	          floatingLabelText = _props.floatingLabelText,
	          id = _props.id;


	      var propsLeaf = children ? children.props : this.props;

	      this.setState({
	        errorText: this.props.errorText,
	        hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
	      });

	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(name || hintText || floatingLabelText || id, 'Material-UI: We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.') : void 0;

	      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
	      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.errorText !== this.props.errorText) {
	        this.setState({
	          errorText: nextProps.errorText
	        });
	      }

	      if (nextProps.children && nextProps.children.props) {
	        nextProps = nextProps.children.props;
	      }

	      if (nextProps.hasOwnProperty('value')) {
	        var hasValue = isValid(nextProps.value);

	        this.setState({
	          hasValue: hasValue
	        });
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	  }, {
	    key: 'blur',
	    value: function blur() {
	      if (this.input) this.getInputNode().blur();
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (this.input) this.getInputNode().focus();
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (this.input) this.getInputNode().select();
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.input ? this.getInputNode().value : undefined;
	    }
	  }, {
	    key: 'getInputNode',
	    value: function getInputNode() {
	      return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
	    }
	  }, {
	    key: '_isControlled',
	    value: function _isControlled() {
	      return this.props.hasOwnProperty('value');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props2 = this.props,
	          children = _props2.children,
	          className = _props2.className,
	          disabled = _props2.disabled,
	          errorStyle = _props2.errorStyle,
	          errorText = _props2.errorText,
	          floatingLabelFixed = _props2.floatingLabelFixed,
	          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
	          floatingLabelStyle = _props2.floatingLabelStyle,
	          floatingLabelText = _props2.floatingLabelText,
	          fullWidth = _props2.fullWidth,
	          hintText = _props2.hintText,
	          hintStyle = _props2.hintStyle,
	          id = _props2.id,
	          inputStyle = _props2.inputStyle,
	          multiLine = _props2.multiLine,
	          onBlur = _props2.onBlur,
	          onChange = _props2.onChange,
	          onFocus = _props2.onFocus,
	          style = _props2.style,
	          type = _props2.type,
	          underlineDisabledStyle = _props2.underlineDisabledStyle,
	          underlineFocusStyle = _props2.underlineFocusStyle,
	          underlineShow = _props2.underlineShow,
	          underlineStyle = _props2.underlineStyle,
	          rows = _props2.rows,
	          rowsMax = _props2.rowsMax,
	          textareaStyle = _props2.textareaStyle,
	          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);
	      var inputId = id || this.uniqueId;

	      var errorTextElement = this.state.errorText && _react2.default.createElement(
	        'div',
	        { style: prepareStyles(styles.error) },
	        this.state.errorText
	      );

	      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
	        _TextFieldLabel2.default,
	        {
	          muiTheme: this.context.muiTheme,
	          style: (0, _simpleAssign2.default)(styles.floatingLabel, floatingLabelStyle, this.state.isFocused ? floatingLabelFocusStyle : null),
	          htmlFor: inputId,
	          shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
	          disabled: disabled
	        },
	        floatingLabelText
	      );

	      var inputProps = {
	        id: inputId,
	        ref: function ref(elem) {
	          return _this2.input = elem;
	        },
	        disabled: this.props.disabled,
	        onBlur: this.handleInputBlur,
	        onChange: this.handleInputChange,
	        onFocus: this.handleInputFocus
	      };

	      var childStyleMerged = (0, _simpleAssign2.default)(styles.input, inputStyle);

	      var inputElement = void 0;
	      if (children) {
	        inputElement = _react2.default.cloneElement(children, (0, _extends3.default)({}, inputProps, children.props, {
	          style: (0, _simpleAssign2.default)(childStyleMerged, children.props.style)
	        }));
	      } else {
	        inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, (0, _extends3.default)({
	          style: childStyleMerged,
	          textareaStyle: (0, _simpleAssign2.default)(styles.textarea, styles.inputNative, textareaStyle),
	          rows: rows,
	          rowsMax: rowsMax
	        }, other, inputProps, {
	          onHeightChange: this.handleHeightChange
	        })) : _react2.default.createElement('input', (0, _extends3.default)({
	          type: type,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.inputNative, childStyleMerged))
	        }, other, inputProps));
	      }

	      var rootProps = {};

	      if (children) {
	        rootProps = other;
	      }

	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, rootProps, {
	          className: className,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	        }),
	        floatingLabelTextElement,
	        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
	          muiTheme: this.context.muiTheme,
	          show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
	          style: hintStyle,
	          text: hintText
	        }) : null,
	        inputElement,
	        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
	          disabled: disabled,
	          disabledStyle: underlineDisabledStyle,
	          error: !!this.state.errorText,
	          errorStyle: errorStyle,
	          focus: this.state.isFocused,
	          focusStyle: underlineFocusStyle,
	          muiTheme: this.context.muiTheme,
	          style: underlineStyle
	        }) : null,
	        errorTextElement
	      );
	    }
	  }]);
	  return TextField;
	}(_react.Component);

	TextField.defaultProps = {
	  disabled: false,
	  floatingLabelFixed: false,
	  multiLine: false,
	  fullWidth: false,
	  type: 'text',
	  underlineShow: true,
	  rows: 1
	};
	TextField.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? TextField.propTypes = {
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The text string to use for the default value.
	   */
	  defaultValue: _react.PropTypes.any,
	  /**
	   * Disables the text field if set to true.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * The style object to use to override error styles.
	   */
	  errorStyle: _react.PropTypes.object,
	  /**
	   * The error content to display.
	   */
	  errorText: _react.PropTypes.node,
	  /**
	   * If true, the floating label will float even when there is no value.
	   */
	  floatingLabelFixed: _react.PropTypes.bool,
	  /**
	   * The style object to use to override floating label styles when focused.
	   */
	  floatingLabelFocusStyle: _react.PropTypes.object,
	  /**
	   * The style object to use to override floating label styles.
	   */
	  floatingLabelStyle: _react.PropTypes.object,
	  /**
	   * The content to use for the floating label element.
	   */
	  floatingLabelText: _react.PropTypes.node,
	  /**
	   * If true, the field receives the property width 100%.
	   */
	  fullWidth: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the TextField's hint text element.
	   */
	  hintStyle: _react.PropTypes.object,
	  /**
	   * The hint content to display.
	   */
	  hintText: _react.PropTypes.node,
	  /**
	   * The id prop for the text field.
	   */
	  id: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the TextField's input element.
	   * When multiLine is false: define the style of the input element.
	   * When multiLine is true: define the style of the container of the textarea.
	   */
	  inputStyle: _react.PropTypes.object,
	  /**
	   * If true, a textarea element will be rendered.
	   * The textarea also grows and shrinks according to the number of lines.
	   */
	  multiLine: _react.PropTypes.bool,
	  /**
	   * Name applied to the input.
	   */
	  name: _react.PropTypes.string,
	  /** @ignore */
	  onBlur: _react.PropTypes.func,
	  /**
	   * Callback function that is fired when the textfield's value changes.
	   */
	  onChange: _react.PropTypes.func,
	  /** @ignore */
	  onFocus: _react.PropTypes.func,
	  /**
	   * Number of rows to display when multiLine option is set to true.
	   */
	  rows: _react.PropTypes.number,
	  /**
	   * Maximum number of rows to display when
	   * multiLine option is set to true.
	   */
	  rowsMax: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the TextField's textarea element.
	   * The TextField use either a textarea or an input,
	   * this property has effects only when multiLine is true.
	   */
	  textareaStyle: _react.PropTypes.object,
	  /**
	   * Specifies the type of input to display
	   * such as "password" or "text".
	   */
	  type: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the
	   * TextField's underline element when disabled.
	   */
	  underlineDisabledStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the TextField's
	   * underline element when focussed.
	   */
	  underlineFocusStyle: _react.PropTypes.object,
	  /**
	   * If true, shows the underline for the text field.
	   */
	  underlineShow: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the TextField's underline element.
	   */
	  underlineStyle: _react.PropTypes.object,
	  /**
	   * The value of the text field.
	   */
	  value: _react.PropTypes.any
	} : void 0;
	exports.default = TextField;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactEventListener = __webpack_require__(190);

	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rowsHeight = 24;

	function getStyles(props, context, state) {
	  return {
	    root: {
	      position: 'relative' },
	    textarea: {
	      height: state.height,
	      width: '100%',
	      resize: 'none',
	      font: 'inherit',
	      padding: 0,
	      cursor: 'inherit'
	    },
	    shadow: {
	      resize: 'none',
	      // Overflow also needed to here to remove the extra row
	      // added to textareas in Firefox.
	      overflow: 'hidden',
	      // Visibility needed to hide the extra text area on ipads
	      visibility: 'hidden',
	      position: 'absolute',
	      height: 'initial'
	    }
	  };
	}

	var EnhancedTextarea = function (_Component) {
	  (0, _inherits3.default)(EnhancedTextarea, _Component);

	  function EnhancedTextarea() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, EnhancedTextarea);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedTextarea.__proto__ || (0, _getPrototypeOf2.default)(EnhancedTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      height: null
	    }, _this.handleResize = function (event) {
	      _this.syncHeightWithShadow(undefined, event);
	    }, _this.handleChange = function (event) {
	      _this.syncHeightWithShadow(event.target.value);

	      if (_this.props.hasOwnProperty('valueLink')) {
	        _this.props.valueLink.requestChange(event.target.value);
	      }

	      if (_this.props.onChange) {
	        _this.props.onChange(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(EnhancedTextarea, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        height: this.props.rows * rowsHeight
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.syncHeightWithShadow();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.value !== this.props.value) {
	        this.syncHeightWithShadow(nextProps.value);
	      }
	    }
	  }, {
	    key: 'getInputNode',
	    value: function getInputNode() {
	      return this.refs.input;
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(value) {
	      this.getInputNode().value = value;
	      this.syncHeightWithShadow(value);
	    }
	  }, {
	    key: 'syncHeightWithShadow',
	    value: function syncHeightWithShadow(newValue, event) {
	      var shadow = this.refs.shadow;

	      if (newValue !== undefined) {
	        shadow.value = newValue;
	      }

	      var newHeight = shadow.scrollHeight;

	      // Guarding for jsdom, where scrollHeight isn't present.
	      // See https://github.com/tmpvar/jsdom/issues/1013
	      if (newHeight === undefined) return;

	      if (this.props.rowsMax >= this.props.rows) {
	        newHeight = Math.min(this.props.rowsMax * rowsHeight, newHeight);
	      }

	      newHeight = Math.max(newHeight, rowsHeight);

	      if (this.state.height !== newHeight) {
	        this.setState({
	          height: newHeight
	        });

	        if (this.props.onHeightChange) {
	          this.props.onHeightChange(event, newHeight);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          onChange = _props.onChange,
	          onHeightChange = _props.onHeightChange,
	          rows = _props.rows,
	          rowsMax = _props.rowsMax,
	          shadowStyle = _props.shadowStyle,
	          style = _props.style,
	          textareaStyle = _props.textareaStyle,
	          valueLink = _props.valueLink,
	          other = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'onHeightChange', 'rows', 'rowsMax', 'shadowStyle', 'style', 'textareaStyle', 'valueLink']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);
	      var rootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var textareaStyles = (0, _simpleAssign2.default)(styles.textarea, textareaStyle);
	      var shadowStyles = (0, _simpleAssign2.default)({}, textareaStyles, styles.shadow, shadowStyle);

	      if (this.props.hasOwnProperty('valueLink')) {
	        other.value = this.props.valueLink.value;
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: prepareStyles(rootStyles) },
	        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
	        _react2.default.createElement('textarea', {
	          ref: 'shadow',
	          style: prepareStyles(shadowStyles),
	          tabIndex: '-1',
	          rows: this.props.rows,
	          defaultValue: this.props.defaultValue,
	          readOnly: true,
	          value: this.props.value,
	          valueLink: this.props.valueLink
	        }),
	        _react2.default.createElement('textarea', (0, _extends3.default)({}, other, {
	          ref: 'input',
	          rows: this.props.rows,
	          style: prepareStyles(textareaStyles),
	          onChange: this.handleChange
	        }))
	      );
	    }
	  }]);
	  return EnhancedTextarea;
	}(_react.Component);

	EnhancedTextarea.defaultProps = {
	  rows: 1
	};
	EnhancedTextarea.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? EnhancedTextarea.propTypes = {
	  defaultValue: _react.PropTypes.any,
	  disabled: _react.PropTypes.bool,
	  onChange: _react.PropTypes.func,
	  onHeightChange: _react.PropTypes.func,
	  rows: _react.PropTypes.number,
	  rowsMax: _react.PropTypes.number,
	  shadowStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  textareaStyle: _react.PropTypes.object,
	  value: _react.PropTypes.string,
	  valueLink: _react.PropTypes.object
	} : void 0;
	exports.default = EnhancedTextarea;

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = require("react-event-listener");

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props) {
	  var hintColor = props.muiTheme.textField.hintColor,
	      show = props.show;


	  return {
	    root: {
	      position: 'absolute',
	      opacity: show ? 1 : 0,
	      color: hintColor,
	      transition: _transitions2.default.easeOut(),
	      bottom: 12
	    }
	  };
	}

	var TextFieldHint = function TextFieldHint(props) {
	  var prepareStyles = props.muiTheme.prepareStyles,
	      style = props.style,
	      text = props.text;


	  var styles = getStyles(props);

	  return _react2.default.createElement(
	    'div',
	    { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	    text
	  );
	};

	process.env.NODE_ENV !== "production" ? TextFieldHint.propTypes = {
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react.PropTypes.object.isRequired,
	  /**
	   * True if the hint text should be visible.
	   */
	  show: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The hint text displayed.
	   */
	  text: _react.PropTypes.node
	} : void 0;

	TextFieldHint.defaultProps = {
	  show: true
	};

	exports.default = TextFieldHint;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props) {
	  var defaultStyles = {
	    position: 'absolute',
	    lineHeight: '22px',
	    top: 38,
	    transition: _transitions2.default.easeOut(),
	    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
	    transform: 'scale(1) translate(0, 0)',
	    transformOrigin: 'left top',
	    pointerEvents: 'auto',
	    userSelect: 'none'
	  };

	  var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
	    transform: 'scale(0.75) translate(0, -28px)',
	    pointerEvents: 'none'
	  }, props.shrinkStyle) : null;

	  return {
	    root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
	  };
	}

	var TextFieldLabel = function TextFieldLabel(props) {
	  var muiTheme = props.muiTheme,
	      className = props.className,
	      children = props.children,
	      htmlFor = props.htmlFor,
	      onTouchTap = props.onTouchTap;
	  var prepareStyles = muiTheme.prepareStyles;

	  var styles = getStyles(props);

	  return _react2.default.createElement(
	    'label',
	    {
	      className: className,
	      style: prepareStyles(styles.root),
	      htmlFor: htmlFor,
	      onTouchTap: onTouchTap
	    },
	    children
	  );
	};

	process.env.NODE_ENV !== "production" ? TextFieldLabel.propTypes = {
	  /**
	   * The label contents.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * Disables the label if set to true.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * The id of the target element that this label should refer to.
	   */
	  htmlFor: _react.PropTypes.string,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react.PropTypes.object.isRequired,
	  /**
	   * Callback function for when the label is selected via a touch tap.
	   */
	  onTouchTap: _react.PropTypes.func,
	  /**
	   * True if the floating label should shrink.
	   */
	  shrink: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element when focused.
	   */
	  shrinkStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;

	TextFieldLabel.defaultProps = {
	  disabled: false,
	  shrink: false
	};

	exports.default = TextFieldLabel;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  /**
	   * True if the parent `TextField` is disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is disabled.
	   */
	  disabledStyle: _react.PropTypes.object,
	  /**
	   * True if the parent `TextField` has an error.
	   */
	  error: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` has an error.
	   */
	  errorStyle: _react.PropTypes.object,
	  /**
	   * True if the parent `TextField` is focused.
	   */
	  focus: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is focused.
	   */
	  focusStyle: _react.PropTypes.object,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react.PropTypes.object.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};

	var defaultProps = {
	  disabled: false,
	  disabledStyle: {},
	  error: false,
	  errorStyle: {},
	  focus: false,
	  focusStyle: {},
	  style: {}
	};

	var TextFieldUnderline = function TextFieldUnderline(props) {
	  var disabled = props.disabled,
	      disabledStyle = props.disabledStyle,
	      error = props.error,
	      errorStyle = props.errorStyle,
	      focus = props.focus,
	      focusStyle = props.focusStyle,
	      muiTheme = props.muiTheme,
	      style = props.style;
	  var errorStyleColor = errorStyle.color;
	  var prepareStyles = muiTheme.prepareStyles,
	      _muiTheme$textField = muiTheme.textField,
	      borderColor = _muiTheme$textField.borderColor,
	      disabledTextColor = _muiTheme$textField.disabledTextColor,
	      errorColor = _muiTheme$textField.errorColor,
	      focusColor = _muiTheme$textField.focusColor;


	  var styles = {
	    root: {
	      border: 'none',
	      borderBottom: 'solid 1px',
	      borderColor: borderColor,
	      bottom: 8,
	      boxSizing: 'content-box',
	      margin: 0,
	      position: 'absolute',
	      width: '100%'
	    },
	    disabled: {
	      borderBottom: 'dotted 2px',
	      borderColor: disabledTextColor
	    },
	    focus: {
	      borderBottom: 'solid 2px',
	      borderColor: focusColor,
	      transform: 'scaleX(0)',
	      transition: _transitions2.default.easeOut()
	    },
	    error: {
	      borderColor: errorStyleColor ? errorStyleColor : errorColor,
	      transform: 'scaleX(1)'
	    }
	  };

	  var underline = (0, _simpleAssign2.default)({}, styles.root, style);
	  var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);

	  if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
	  if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
	  if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('hr', { style: prepareStyles(underline) }),
	    _react2.default.createElement('hr', { style: prepareStyles(focusedUnderline) })
	  );
	};

	process.env.NODE_ENV !== "production" ? TextFieldUnderline.propTypes = propTypes : void 0;
	TextFieldUnderline.defaultProps = defaultProps;

	exports.default = TextFieldUnderline;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _RaisedButton = __webpack_require__(195);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _RaisedButton2.default;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colorManipulator = __webpack_require__(142);

	var _childUtils = __webpack_require__(111);

	var _EnhancedButton = __webpack_require__(110);

	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

	var _Paper = __webpack_require__(196);

	var _Paper2 = _interopRequireDefault(_Paper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function validateLabel(props, propName, componentName) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}

	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      button = _context$muiTheme.button,
	      raisedButton = _context$muiTheme.raisedButton;
	  var disabled = props.disabled,
	      disabledBackgroundColor = props.disabledBackgroundColor,
	      disabledLabelColor = props.disabledLabelColor,
	      fullWidth = props.fullWidth,
	      icon = props.icon,
	      label = props.label,
	      labelPosition = props.labelPosition,
	      primary = props.primary,
	      secondary = props.secondary,
	      style = props.style;


	  var amount = primary || secondary ? 0.4 : 0.08;

	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;

	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }

	  var buttonHeight = style && style.height || button.height;
	  var borderRadius = 2;

	  return {
	    root: {
	      display: 'inline-block',
	      transition: _transitions2.default.easeOut(),
	      minWidth: fullWidth ? '100%' : button.minWidth
	    },
	    button: {
	      position: 'relative',
	      height: buttonHeight,
	      lineHeight: buttonHeight + 'px',
	      width: '100%',
	      padding: 0,
	      borderRadius: borderRadius,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      opacity: 1,
	      fontSize: raisedButton.fontSize,
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      color: labelColor
	    },
	    icon: {
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      height: buttonHeight,
	      borderRadius: borderRadius,
	      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}

	var RaisedButton = function (_Component) {
	  (0, _inherits3.default)(RaisedButton, _Component);

	  function RaisedButton() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, RaisedButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      keyboardFocused: false,
	      touched: false,
	      initialZDepth: 0,
	      zDepth: 0
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth + 1
	        });
	      }
	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.state.keyboardFocused) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth,
	          hovered: false
	        });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.keyboardFocused && !_this.state.touched) {
	        _this.setState({
	          hovered: true
	        });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth + 1
	      });

	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth
	      });

	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;

	      _this.setState({
	        zDepth: zDepth,
	        keyboardFocused: keyboardFocused
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(RaisedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var zDepth = this.props.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var zDepth = nextProps.disabled ? 0 : 1;
	      var nextState = {
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      };

	      if (nextProps.disabled) {
	        nextState.hovered = false;
	      }

	      this.setState(nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          backgroundColor = _props.backgroundColor,
	          buttonStyle = _props.buttonStyle,
	          children = _props.children,
	          className = _props.className,
	          disabled = _props.disabled,
	          disabledBackgroundColor = _props.disabledBackgroundColor,
	          disabledLabelColor = _props.disabledLabelColor,
	          fullWidth = _props.fullWidth,
	          icon = _props.icon,
	          label = _props.label,
	          labelColor = _props.labelColor,
	          labelPosition = _props.labelPosition,
	          labelStyle = _props.labelStyle,
	          overlayStyle = _props.overlayStyle,
	          primary = _props.primary,
	          rippleStyle = _props.rippleStyle,
	          secondary = _props.secondary,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);
	      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);

	      var buttonEventHandlers = disabled ? {} : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };

	      var labelElement = label && _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
	        label
	      );

	      var iconCloned = icon && (0, _react.cloneElement)(icon, {
	        color: icon.props.color || styles.label.color,
	        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
	      });

	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };

	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);

	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: this.state.zDepth
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          (0, _extends3.default)({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
	            focusRippleColor: mergedRippleStyles.color,
	            touchRippleColor: mergedRippleStyles.color,
	            focusRippleOpacity: mergedRippleStyles.opacity,
	            touchRippleOpacity: mergedRippleStyles.opacity
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
	            },
	            enhancedButtonChildren
	          )
	        )
	      );
	    }
	  }]);
	  return RaisedButton;
	}(_react.Component);

	RaisedButton.muiName = 'RaisedButton';
	RaisedButton.defaultProps = {
	  disabled: false,
	  labelPosition: 'after',
	  fullWidth: false,
	  primary: false,
	  secondary: false
	};
	RaisedButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? RaisedButton.propTypes = {
	  /**
	   * Override the default background color for the button,
	   * but not the default disabled background color
	   * (use `disabledBackgroundColor` for this).
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the button element.
	   */
	  buttonStyle: _react.PropTypes.object,
	  /**
	   * The content of the button.
	   * If a label is provided via the `label` prop, the text within the label
	   * will be displayed in addition to the content provided here.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the button will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Override the default background color for the button
	   * when it is disabled.
	   */
	  disabledBackgroundColor: _react.PropTypes.string,
	  /**
	   * The color of the button's label when the button is disabled.
	   */
	  disabledLabelColor: _react.PropTypes.string,
	  /**
	   * If true, the button will take up the full width of its container.
	   */
	  fullWidth: _react.PropTypes.bool,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * An icon to be displayed within the button.
	   */
	  icon: _react.PropTypes.node,
	  /**
	   * The label to be displayed within the button.
	   * If content is provided via the `children` prop, that content will be
	   * displayed in addition to the label provided here.
	   */
	  label: validateLabel,
	  /**
	   * The color of the button's label.
	   */
	  labelColor: _react.PropTypes.string,
	  /**
	   * The position of the button's label relative to the button's `children`.
	   */
	  labelPosition: _react.PropTypes.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _react.PropTypes.object,
	  /** @ignore */
	  onMouseDown: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /** @ignore */
	  onMouseUp: _react.PropTypes.func,
	  /** @ignore */
	  onTouchEnd: _react.PropTypes.func,
	  /** @ignore */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * Override the inline style of the button overlay.
	   */
	  overlayStyle: _react.PropTypes.object,
	  /**
	   * If true, the button will use the theme's primary color.
	   */
	  primary: _react.PropTypes.bool,
	  /**
	   * Override the inline style of the ripple element.
	   */
	  rippleStyle: _react.PropTypes.object,
	  /**
	   * If true, the button will use the theme's secondary color.
	   * If both `secondary` and `primary` are true, the button will use
	   * the theme's primary color.
	   */
	  secondary: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = RaisedButton;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Paper = __webpack_require__(197);

	var _Paper2 = _interopRequireDefault(_Paper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Paper2.default;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(109);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context) {
	  var rounded = props.rounded,
	      circle = props.circle,
	      transitionEnabled = props.transitionEnabled,
	      zDepth = props.zDepth;
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      paper = _context$muiTheme.paper;


	  return {
	    root: {
	      color: paper.color,
	      backgroundColor: paper.backgroundColor,
	      transition: transitionEnabled && _transitions2.default.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: baseTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
	      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
	    }
	  };
	}

	var Paper = function (_Component) {
	  (0, _inherits3.default)(Paper, _Component);

	  function Paper() {
	    (0, _classCallCheck3.default)(this, Paper);
	    return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || (0, _getPrototypeOf2.default)(Paper)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Paper, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          circle = _props.circle,
	          rounded = _props.rounded,
	          style = _props.style,
	          transitionEnabled = _props.transitionEnabled,
	          zDepth = _props.zDepth,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context);

	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        children
	      );
	    }
	  }]);
	  return Paper;
	}(_react.Component);

	Paper.defaultProps = {
	  circle: false,
	  rounded: true,
	  transitionEnabled: true,
	  zDepth: 1
	};
	Paper.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? Paper.propTypes = {
	  /**
	   * Children passed into the paper element.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Set to true to generate a circlular paper container.
	   */
	  circle: _react.PropTypes.bool,
	  /**
	   * By default, the paper container will have a border radius.
	   * Set this to false to generate a container with sharp corners.
	   */
	  rounded: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Set to false to disable CSS transitions for the paper element.
	   */
	  transitionEnabled: _react.PropTypes.bool,
	  /**
	   * This number represents the zDepth of the paper shadow.
	   */
	  zDepth: _propTypes2.default.zDepth
	} : void 0;
	exports.default = Paper;

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _FlatButton = __webpack_require__(200);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FlatButton2.default;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _childUtils = __webpack_require__(111);

	var _colorManipulator = __webpack_require__(142);

	var _EnhancedButton = __webpack_require__(110);

	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

	var _FlatButtonLabel = __webpack_require__(201);

	var _FlatButtonLabel2 = _interopRequireDefault(_FlatButtonLabel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function validateLabel(props, propName, componentName) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}

	var FlatButton = function (_Component) {
	  (0, _inherits3.default)(FlatButton, _Component);

	  function FlatButton() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, FlatButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FlatButton.__proto__ || (0, _getPrototypeOf2.default)(FlatButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      touch: false
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      _this.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleMouseEnter = function (event) {
	      // Cancel hover styles for touch devices
	      if (!_this.state.touch) _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchStart(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(FlatButton, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.disabled) {
	        this.setState({
	          hovered: false
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          disabled = _props.disabled,
	          hoverColor = _props.hoverColor,
	          backgroundColor = _props.backgroundColor,
	          icon = _props.icon,
	          label = _props.label,
	          labelStyle = _props.labelStyle,
	          labelPosition = _props.labelPosition,
	          primary = _props.primary,
	          rippleColor = _props.rippleColor,
	          secondary = _props.secondary,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'disabled', 'hoverColor', 'backgroundColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'primary', 'rippleColor', 'secondary', 'style']);
	      var _context$muiTheme = this.context.muiTheme,
	          _context$muiTheme$but = _context$muiTheme.button,
	          buttonHeight = _context$muiTheme$but.height,
	          buttonMinWidth = _context$muiTheme$but.minWidth,
	          buttonTextTransform = _context$muiTheme$but.textTransform,
	          _context$muiTheme$fla = _context$muiTheme.flatButton,
	          buttonFilterColor = _context$muiTheme$fla.buttonFilterColor,
	          buttonColor = _context$muiTheme$fla.color,
	          disabledTextColor = _context$muiTheme$fla.disabledTextColor,
	          fontSize = _context$muiTheme$fla.fontSize,
	          fontWeight = _context$muiTheme$fla.fontWeight,
	          primaryTextColor = _context$muiTheme$fla.primaryTextColor,
	          secondaryTextColor = _context$muiTheme$fla.secondaryTextColor,
	          textColor = _context$muiTheme$fla.textColor,
	          _context$muiTheme$fla2 = _context$muiTheme$fla.textTransform,
	          textTransform = _context$muiTheme$fla2 === undefined ? buttonTextTransform || 'uppercase' : _context$muiTheme$fla2;

	      var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;

	      var defaultHoverColor = (0, _colorManipulator.fade)(buttonFilterColor, 0.2);
	      var defaultRippleColor = buttonFilterColor;
	      var buttonHoverColor = hoverColor || defaultHoverColor;
	      var buttonRippleColor = rippleColor || defaultRippleColor;
	      var buttonBackgroundColor = backgroundColor || buttonColor;
	      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        height: buttonHeight,
	        lineHeight: buttonHeight + 'px',
	        minWidth: buttonMinWidth,
	        color: defaultTextColor,
	        transition: _transitions2.default.easeOut(),
	        borderRadius: 2,
	        userSelect: 'none',
	        position: 'relative',
	        overflow: 'hidden',
	        backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
	        padding: 0,
	        margin: 0,
	        textAlign: 'center'
	      }, style);

	      var iconCloned = void 0;
	      var labelStyleIcon = {};

	      if (icon) {
	        var iconStyles = (0, _simpleAssign2.default)({
	          verticalAlign: 'middle',
	          marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	          marginRight: label && labelPosition === 'before' ? 12 : 0
	        }, icon.props.style);
	        iconCloned = _react2.default.cloneElement(icon, {
	          color: icon.props.color || mergedRootStyles.color,
	          style: iconStyles
	        });

	        if (labelPosition === 'before') {
	          labelStyleIcon.paddingRight = 8;
	        } else {
	          labelStyleIcon.paddingLeft = 8;
	        }
	      }

	      var mergedLabelStyles = (0, _simpleAssign2.default)({
	        letterSpacing: 0,
	        textTransform: textTransform,
	        fontWeight: fontWeight,
	        fontSize: fontSize
	      }, labelStyleIcon, labelStyle);

	      var labelElement = label ? _react2.default.createElement(_FlatButtonLabel2.default, { label: label, style: mergedLabelStyles }) : undefined;

	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };

	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);

	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        (0, _extends3.default)({}, other, {
	          disabled: disabled,
	          focusRippleColor: buttonRippleColor,
	          focusRippleOpacity: 0.3,
	          onKeyboardFocus: this.handleKeyboardFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onTouchStart: this.handleTouchStart,
	          style: mergedRootStyles,
	          touchRippleColor: buttonRippleColor,
	          touchRippleOpacity: 0.3
	        }),
	        enhancedButtonChildren
	      );
	    }
	  }]);
	  return FlatButton;
	}(_react.Component);

	FlatButton.muiName = 'FlatButton';
	FlatButton.defaultProps = {
	  disabled: false,
	  labelStyle: {},
	  labelPosition: 'after',
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onTouchStart: function onTouchStart() {},
	  primary: false,
	  secondary: false
	};
	FlatButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? FlatButton.propTypes = {
	  /**
	   * Color of button when mouse is not hovering over it.
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * This is what will be displayed inside the button.
	   * If a label is specified, the text within the label prop will
	   * be displayed. Otherwise, the component will expect children
	   * which will then be displayed. (In our example,
	   * we are nesting an `<input type="file" />` and a `span`
	   * that acts as our label to be displayed.) This only
	   * applies to flat and raised buttons.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Disables the button if set to true.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Color of button when mouse hovers over.
	   */
	  hoverColor: _react.PropTypes.string,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * Use this property to display an icon.
	   */
	  icon: _react.PropTypes.node,
	  /**
	   * Label for the button.
	   */
	  label: validateLabel,
	  /**
	   * Place label before or after the passed children.
	   */
	  labelPosition: _react.PropTypes.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _react.PropTypes.object,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /** @ignore */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * If true, colors button according to
	   * primaryTextColor from the Theme.
	   */
	  primary: _react.PropTypes.bool,
	  /**
	   * Color for the ripple after button is clicked.
	   */
	  rippleColor: _react.PropTypes.string,
	  /**
	   * If true, colors button according to secondaryTextColor from the theme.
	   * The primary prop has precendent if set to true.
	   */
	  secondary: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = FlatButton;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;


	  return {
	    root: {
	      position: 'relative',
	      paddingLeft: baseTheme.spacing.desktopGutterLess,
	      paddingRight: baseTheme.spacing.desktopGutterLess,
	      verticalAlign: 'middle'
	    }
	  };
	}

	var FlatButtonLabel = function (_Component) {
	  (0, _inherits3.default)(FlatButtonLabel, _Component);

	  function FlatButtonLabel() {
	    (0, _classCallCheck3.default)(this, FlatButtonLabel);
	    return (0, _possibleConstructorReturn3.default)(this, (FlatButtonLabel.__proto__ || (0, _getPrototypeOf2.default)(FlatButtonLabel)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(FlatButtonLabel, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          label = _props.label,
	          style = _props.style;
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context);

	      return _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	        label
	      );
	    }
	  }]);
	  return FlatButtonLabel;
	}(_react.Component);

	FlatButtonLabel.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? FlatButtonLabel.propTypes = {
	  label: _react.PropTypes.node,
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = FlatButtonLabel;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Dialog = __webpack_require__(203);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Dialog2.default;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(116);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactEventListener = __webpack_require__(190);

	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

	var _keycode = __webpack_require__(114);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _Overlay = __webpack_require__(204);

	var _Overlay2 = _interopRequireDefault(_Overlay);

	var _RenderToLayer = __webpack_require__(206);

	var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

	var _Paper = __webpack_require__(196);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _reactAddonsTransitionGroup = __webpack_require__(121);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TransitionItem = function (_Component) {
	  (0, _inherits3.default)(TransitionItem, _Component);

	  function TransitionItem() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, TransitionItem);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TransitionItem.__proto__ || (0, _getPrototypeOf2.default)(TransitionItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      style: {}
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(TransitionItem, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimeout);
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.componentWillAppear(callback);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      var spacing = this.context.muiTheme.baseTheme.spacing;

	      this.setState({
	        style: {
	          opacity: 1,
	          transform: 'translate(0, ' + spacing.desktopKeylineIncrement + 'px)'
	        }
	      });

	      this.enterTimeout = setTimeout(callback, 450); // matches transition duration
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      this.setState({
	        style: {
	          opacity: 0,
	          transform: 'translate(0, 0)'
	        }
	      });

	      this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          style = _props.style,
	          children = _props.children,
	          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'children']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;


	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, this.state.style, style)) }),
	        children
	      );
	    }
	  }]);
	  return TransitionItem;
	}(_react.Component);

	TransitionItem.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? TransitionItem.propTypes = {
	  children: _react.PropTypes.node,
	  style: _react.PropTypes.object
	} : void 0;


	function getStyles(props, context) {
	  var autoScrollBodyContent = props.autoScrollBodyContent,
	      open = props.open;
	  var _context$muiTheme = context.muiTheme,
	      _context$muiTheme$bas = _context$muiTheme.baseTheme,
	      spacing = _context$muiTheme$bas.spacing,
	      palette = _context$muiTheme$bas.palette,
	      dialog = _context$muiTheme.dialog,
	      zIndex = _context$muiTheme.zIndex;


	  var gutter = spacing.desktopGutter;
	  var borderScroll = '1px solid ' + palette.borderColor;

	  return {
	    root: {
	      position: 'fixed',
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      zIndex: zIndex.dialog,
	      top: 0,
	      left: open ? 0 : -10000,
	      width: '100%',
	      height: '100%',
	      transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
	    },
	    content: {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      transition: _transitions2.default.easeOut(),
	      position: 'relative',
	      width: '75%',
	      maxWidth: spacing.desktopKeylineIncrement * 12,
	      margin: '0 auto',
	      zIndex: zIndex.dialog
	    },
	    actionsContainer: {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      padding: 8,
	      width: '100%',
	      textAlign: 'right',
	      marginTop: autoScrollBodyContent ? -1 : 0,
	      borderTop: autoScrollBodyContent ? borderScroll : 'none'
	    },
	    overlay: {
	      zIndex: zIndex.dialogOverlay
	    },
	    title: {
	      margin: 0,
	      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
	      color: palette.textColor,
	      fontSize: dialog.titleFontSize,
	      lineHeight: '32px',
	      fontWeight: 400,
	      marginBottom: autoScrollBodyContent ? -1 : 0,
	      borderBottom: autoScrollBodyContent ? borderScroll : 'none'
	    },
	    body: {
	      fontSize: dialog.bodyFontSize,
	      color: dialog.bodyColor,
	      padding: (props.title ? 0 : gutter) + 'px ' + gutter + 'px ' + gutter + 'px',
	      boxSizing: 'border-box',
	      overflowY: autoScrollBodyContent ? 'auto' : 'hidden'
	    }
	  };
	}

	var DialogInline = function (_Component2) {
	  (0, _inherits3.default)(DialogInline, _Component2);

	  function DialogInline() {
	    var _ref2;

	    var _temp2, _this2, _ret2;

	    (0, _classCallCheck3.default)(this, DialogInline);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = DialogInline.__proto__ || (0, _getPrototypeOf2.default)(DialogInline)).call.apply(_ref2, [this].concat(args))), _this2), _this2.handleTouchTapOverlay = function () {
	      _this2.requestClose(false);
	    }, _this2.handleKeyUp = function (event) {
	      if ((0, _keycode2.default)(event) === 'esc') {
	        _this2.requestClose(false);
	      }
	    }, _this2.handleResize = function () {
	      _this2.positionDialog();
	    }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
	  }

	  (0, _createClass3.default)(DialogInline, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.positionDialog();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.positionDialog();
	    }
	  }, {
	    key: 'positionDialog',
	    value: function positionDialog() {
	      var _props2 = this.props,
	          actions = _props2.actions,
	          autoDetectWindowHeight = _props2.autoDetectWindowHeight,
	          autoScrollBodyContent = _props2.autoScrollBodyContent,
	          bodyStyle = _props2.bodyStyle,
	          open = _props2.open,
	          repositionOnUpdate = _props2.repositionOnUpdate,
	          title = _props2.title;


	      if (!open) {
	        return;
	      }

	      var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	      var container = _reactDom2.default.findDOMNode(this);
	      var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
	      var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
	      var minPaddingTop = 16;

	      // Reset the height in case the window was resized.
	      dialogWindow.style.height = '';
	      dialogContent.style.height = '';

	      var dialogWindowHeight = dialogWindow.offsetHeight;
	      var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
	      if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;

	      // Vertically center the dialog window, but make sure it doesn't
	      // transition to that position.
	      if (repositionOnUpdate || !container.style.paddingTop) {
	        container.style.paddingTop = paddingTop + 'px';
	      }

	      // Force a height if the dialog is taller than clientHeight
	      if (autoDetectWindowHeight || autoScrollBodyContent) {
	        var styles = getStyles(this.props, this.context);
	        styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
	        var maxDialogContentHeight = clientHeight - 2 * 64;

	        if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;

	        if (_react2.default.Children.count(actions)) {
	          maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
	        }

	        dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
	      }
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose(buttonClicked) {
	      if (!buttonClicked && this.props.modal) {
	        return;
	      }

	      if (this.props.onRequestClose) {
	        this.props.onRequestClose(!!buttonClicked);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          actions = _props3.actions,
	          actionsContainerClassName = _props3.actionsContainerClassName,
	          actionsContainerStyle = _props3.actionsContainerStyle,
	          bodyClassName = _props3.bodyClassName,
	          bodyStyle = _props3.bodyStyle,
	          children = _props3.children,
	          className = _props3.className,
	          contentClassName = _props3.contentClassName,
	          contentStyle = _props3.contentStyle,
	          overlayClassName = _props3.overlayClassName,
	          overlayStyle = _props3.overlayStyle,
	          open = _props3.open,
	          titleClassName = _props3.titleClassName,
	          titleStyle = _props3.titleStyle,
	          title = _props3.title,
	          style = _props3.style;
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context);

	      styles.root = (0, _simpleAssign2.default)(styles.root, style);
	      styles.content = (0, _simpleAssign2.default)(styles.content, contentStyle);
	      styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
	      styles.actionsContainer = (0, _simpleAssign2.default)(styles.actionsContainer, actionsContainerStyle);
	      styles.overlay = (0, _simpleAssign2.default)(styles.overlay, overlayStyle);
	      styles.title = (0, _simpleAssign2.default)(styles.title, titleStyle);

	      var actionsContainer = _react2.default.Children.count(actions) > 0 && _react2.default.createElement(
	        'div',
	        { className: actionsContainerClassName, style: prepareStyles(styles.actionsContainer) },
	        _react2.default.Children.toArray(actions)
	      );

	      var titleElement = title;
	      if (_react2.default.isValidElement(title)) {
	        titleElement = _react2.default.cloneElement(title, {
	          className: title.props.className || titleClassName,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.title, title.props.style))
	        });
	      } else if (typeof title === 'string') {
	        titleElement = _react2.default.createElement(
	          'h3',
	          { className: titleClassName, style: prepareStyles(styles.title) },
	          title
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: className, style: prepareStyles(styles.root) },
	        open && _react2.default.createElement(_reactEventListener2.default, {
	          target: 'window',
	          onKeyUp: this.handleKeyUp,
	          onResize: this.handleResize
	        }),
	        _react2.default.createElement(
	          _reactAddonsTransitionGroup2.default,
	          {
	            component: 'div',
	            ref: 'dialogWindow',
	            transitionAppear: true,
	            transitionAppearTimeout: 450,
	            transitionEnter: true,
	            transitionEnterTimeout: 450
	          },
	          open && _react2.default.createElement(
	            TransitionItem,
	            {
	              className: contentClassName,
	              style: styles.content
	            },
	            _react2.default.createElement(
	              _Paper2.default,
	              { zDepth: 4 },
	              titleElement,
	              _react2.default.createElement(
	                'div',
	                {
	                  ref: 'dialogContent',
	                  className: bodyClassName,
	                  style: prepareStyles(styles.body)
	                },
	                children
	              ),
	              actionsContainer
	            )
	          )
	        ),
	        _react2.default.createElement(_Overlay2.default, {
	          show: open,
	          className: overlayClassName,
	          style: styles.overlay,
	          onTouchTap: this.handleTouchTapOverlay
	        })
	      );
	    }
	  }]);
	  return DialogInline;
	}(_react.Component);

	DialogInline.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? DialogInline.propTypes = {
	  actions: _react.PropTypes.node,
	  actionsContainerClassName: _react.PropTypes.string,
	  actionsContainerStyle: _react.PropTypes.object,
	  autoDetectWindowHeight: _react.PropTypes.bool,
	  autoScrollBodyContent: _react.PropTypes.bool,
	  bodyClassName: _react.PropTypes.string,
	  bodyStyle: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  contentClassName: _react.PropTypes.string,
	  contentStyle: _react.PropTypes.object,
	  modal: _react.PropTypes.bool,
	  onRequestClose: _react.PropTypes.func,
	  open: _react.PropTypes.bool.isRequired,
	  overlayClassName: _react.PropTypes.string,
	  overlayStyle: _react.PropTypes.object,
	  repositionOnUpdate: _react.PropTypes.bool,
	  style: _react.PropTypes.object,
	  title: _react.PropTypes.node,
	  titleClassName: _react.PropTypes.string,
	  titleStyle: _react.PropTypes.object
	} : void 0;

	var Dialog = function (_Component3) {
	  (0, _inherits3.default)(Dialog, _Component3);

	  function Dialog() {
	    var _ref3;

	    var _temp3, _this3, _ret3;

	    (0, _classCallCheck3.default)(this, Dialog);

	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    return _ret3 = (_temp3 = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_ref3 = Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call.apply(_ref3, [this].concat(args))), _this3), _this3.renderLayer = function () {
	      return _react2.default.createElement(DialogInline, _this3.props);
	    }, _temp3), (0, _possibleConstructorReturn3.default)(_this3, _ret3);
	  }

	  (0, _createClass3.default)(Dialog, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_RenderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
	    }
	  }]);
	  return Dialog;
	}(_react.Component);

	Dialog.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	Dialog.defaultProps = {
	  autoDetectWindowHeight: true,
	  autoScrollBodyContent: false,
	  modal: false,
	  repositionOnUpdate: true
	};
	process.env.NODE_ENV !== "production" ? Dialog.propTypes = {
	  /**
	   * Action buttons to display below the Dialog content (`children`).
	   * This property accepts either a React element, or an array of React elements.
	   */
	  actions: _react.PropTypes.node,
	  /**
	   * The `className` to add to the actions container's root element.
	   */
	  actionsContainerClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the actions container's root element.
	   */
	  actionsContainerStyle: _react.PropTypes.object,
	  /**
	   * If set to true, the height of the `Dialog` will be auto detected. A max height
	   * will be enforced so that the content does not extend beyond the viewport.
	   */
	  autoDetectWindowHeight: _react.PropTypes.bool,
	  /**
	   * If set to true, the body content of the `Dialog` will be scrollable.
	   */
	  autoScrollBodyContent: _react.PropTypes.bool,
	  /**
	   * The `className` to add to the content's root element under the title.
	   */
	  bodyClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the content's root element under the title.
	   */
	  bodyStyle: _react.PropTypes.object,
	  /**
	   * The contents of the `Dialog`.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The `className` to add to the content container.
	   */
	  contentClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the content container.
	   */
	  contentStyle: _react.PropTypes.object,
	  /**
	   * Force the user to use one of the actions in the `Dialog`.
	   * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
	   */
	  modal: _react.PropTypes.bool,
	  /**
	   * Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
	   *
	   * @param {bool} buttonClicked Determines whether a button click triggered this request.
	   */
	  onRequestClose: _react.PropTypes.func,
	  /**
	   * Controls whether the Dialog is opened or not.
	   */
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
	   */
	  overlayClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
	   */
	  overlayStyle: _react.PropTypes.object,
	  /**
	   * Determines whether the `Dialog` should be repositioned when it's contents are updated.
	   */
	  repositionOnUpdate: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * The `className` to add to the title's root container element.
	   */
	  titleClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the title's root container element.
	   */
	  titleStyle: _react.PropTypes.object
	} : void 0;
	exports.default = Dialog;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _AutoLockScrolling = __webpack_require__(205);

	var _AutoLockScrolling2 = _interopRequireDefault(_AutoLockScrolling);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context) {
	  var overlay = context.muiTheme.overlay;


	  var style = {
	    root: {
	      position: 'fixed',
	      height: '100%',
	      width: '100%',
	      top: 0,
	      left: '-100%',
	      opacity: 0,
	      backgroundColor: overlay.backgroundColor,
	      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)

	      // Two ways to promote overlay to its own render layer
	      willChange: 'opacity',
	      transform: 'translateZ(0)',

	      transition: props.transitionEnabled && _transitions2.default.easeOut('0ms', 'left', '400ms') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
	    }
	  };

	  if (props.show) {
	    (0, _simpleAssign2.default)(style.root, {
	      left: 0,
	      opacity: 1,
	      transition: _transitions2.default.easeOut('0ms', 'left') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
	    });
	  }

	  return style;
	}

	var Overlay = function (_Component) {
	  (0, _inherits3.default)(Overlay, _Component);

	  function Overlay() {
	    (0, _classCallCheck3.default)(this, Overlay);
	    return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || (0, _getPrototypeOf2.default)(Overlay)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Overlay, [{
	    key: 'setOpacity',
	    value: function setOpacity(opacity) {
	      this.refs.overlay.style.opacity = opacity;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          autoLockScrolling = _props.autoLockScrolling,
	          show = _props.show,
	          style = _props.style,
	          transitionEnabled = _props.transitionEnabled,
	          other = (0, _objectWithoutProperties3.default)(_props, ['autoLockScrolling', 'show', 'style', 'transitionEnabled']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context);

	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { ref: 'overlay', style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        autoLockScrolling && _react2.default.createElement(_AutoLockScrolling2.default, { lock: show })
	      );
	    }
	  }]);
	  return Overlay;
	}(_react.Component);

	Overlay.defaultProps = {
	  autoLockScrolling: true,
	  style: {},
	  transitionEnabled: true
	};
	Overlay.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? Overlay.propTypes = {
	  autoLockScrolling: _react.PropTypes.bool,
	  show: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  transitionEnabled: _react.PropTypes.bool
	} : void 0;
	exports.default = Overlay;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var originalBodyOverflow = null;
	var lockingCounter = 0;

	var AutoLockScrolling = function (_Component) {
	  (0, _inherits3.default)(AutoLockScrolling, _Component);

	  function AutoLockScrolling() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, AutoLockScrolling);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AutoLockScrolling.__proto__ || (0, _getPrototypeOf2.default)(AutoLockScrolling)).call.apply(_ref, [this].concat(args))), _this), _this.locked = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(AutoLockScrolling, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.lock === true) {
	        this.preventScrolling();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.lock !== nextProps.lock) {
	        if (nextProps.lock) {
	          this.preventScrolling();
	        } else {
	          this.allowScrolling();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.allowScrolling();
	    }

	    // force to only lock/unlock once

	  }, {
	    key: 'preventScrolling',
	    value: function preventScrolling() {
	      if (this.locked === true) {
	        return;
	      }

	      lockingCounter = lockingCounter + 1;
	      this.locked = true;

	      // only lock the first time the component is mounted.
	      if (lockingCounter === 1) {
	        var body = document.getElementsByTagName('body')[0];
	        originalBodyOverflow = body.style.overflow;
	        body.style.overflow = 'hidden';
	      }
	    }
	  }, {
	    key: 'allowScrolling',
	    value: function allowScrolling() {
	      if (this.locked === true) {
	        lockingCounter = lockingCounter - 1;
	        this.locked = false;
	      }

	      if (lockingCounter === 0 && originalBodyOverflow !== null) {
	        var body = document.getElementsByTagName('body')[0];
	        body.style.overflow = originalBodyOverflow || '';
	        originalBodyOverflow = null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	  return AutoLockScrolling;
	}(_react.Component);

	process.env.NODE_ENV !== "production" ? AutoLockScrolling.propTypes = {
	  lock: _react.PropTypes.bool.isRequired
	} : void 0;
	exports.default = AutoLockScrolling;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _reactDom = __webpack_require__(116);

	var _dom = __webpack_require__(135);

	var _dom2 = _interopRequireDefault(_dom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
	var RenderToLayer = function (_Component) {
	  (0, _inherits3.default)(RenderToLayer, _Component);

	  function RenderToLayer() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, RenderToLayer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RenderToLayer.__proto__ || (0, _getPrototypeOf2.default)(RenderToLayer)).call.apply(_ref, [this].concat(args))), _this), _this.onClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }

	      if (!_this.props.componentClickAway) {
	        return;
	      }

	      if (!_this.props.open) {
	        return;
	      }

	      var el = _this.layer;
	      if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
	        _this.props.componentClickAway(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(RenderToLayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.renderLayer();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.renderLayer();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unrenderLayer();
	    }
	  }, {
	    key: 'getLayer',
	    value: function getLayer() {
	      return this.layer;
	    }
	  }, {
	    key: 'unrenderLayer',
	    value: function unrenderLayer() {
	      if (!this.layer) {
	        return;
	      }

	      if (this.props.useLayerForClickAway) {
	        this.layer.style.position = 'relative';
	        this.layer.removeEventListener('touchstart', this.onClickAway);
	        this.layer.removeEventListener('click', this.onClickAway);
	      } else {
	        window.removeEventListener('touchstart', this.onClickAway);
	        window.removeEventListener('click', this.onClickAway);
	      }

	      (0, _reactDom.unmountComponentAtNode)(this.layer);
	      document.body.removeChild(this.layer);
	      this.layer = null;
	    }

	    /**
	     * By calling this method in componentDidMount() and
	     * componentDidUpdate(), you're effectively creating a "wormhole" that
	     * funnels React's hierarchical updates through to a DOM node on an
	     * entirely different part of the page.
	     */

	  }, {
	    key: 'renderLayer',
	    value: function renderLayer() {
	      var _this2 = this;

	      var _props = this.props,
	          open = _props.open,
	          render = _props.render;


	      if (open) {
	        if (!this.layer) {
	          this.layer = document.createElement('div');
	          document.body.appendChild(this.layer);

	          if (this.props.useLayerForClickAway) {
	            this.layer.addEventListener('touchstart', this.onClickAway);
	            this.layer.addEventListener('click', this.onClickAway);
	            this.layer.style.position = 'fixed';
	            this.layer.style.top = 0;
	            this.layer.style.bottom = 0;
	            this.layer.style.left = 0;
	            this.layer.style.right = 0;
	            this.layer.style.zIndex = this.context.muiTheme.zIndex.layer;
	          } else {
	            setTimeout(function () {
	              window.addEventListener('touchstart', _this2.onClickAway);
	              window.addEventListener('click', _this2.onClickAway);
	            }, 0);
	          }
	        }

	        var layerElement = render();
	        this.layerElement = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, layerElement, this.layer);
	      } else {
	        this.unrenderLayer();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	  return RenderToLayer;
	}(_react.Component);

	RenderToLayer.defaultProps = {
	  useLayerForClickAway: true
	};
	RenderToLayer.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? RenderToLayer.propTypes = {
	  componentClickAway: _react.PropTypes.func,
	  open: _react.PropTypes.bool.isRequired,
	  render: _react.PropTypes.func.isRequired,
	  useLayerForClickAway: _react.PropTypes.bool
	} : void 0;
	exports.default = RenderToLayer;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Snackbar = __webpack_require__(208);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Snackbar2.default;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _ClickAwayListener = __webpack_require__(209);

	var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

	var _SnackbarBody = __webpack_require__(210);

	var _SnackbarBody2 = _interopRequireDefault(_SnackbarBody);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      desktopSubheaderHeight = _context$muiTheme.baseTheme.spacing.desktopSubheaderHeight,
	      zIndex = _context$muiTheme.zIndex;
	  var open = state.open;


	  var styles = {
	    root: {
	      position: 'fixed',
	      left: '50%',
	      display: 'flex',
	      bottom: 0,
	      zIndex: zIndex.snackbar,
	      visibility: open ? 'visible' : 'hidden',
	      transform: open ? 'translate(-50%, 0)' : 'translate(-50%, ' + desktopSubheaderHeight + 'px)',
	      transition: _transitions2.default.easeOut('400ms', 'transform') + ', ' + _transitions2.default.easeOut('400ms', 'visibility')
	    }
	  };

	  return styles;
	}

	var Snackbar = function (_Component) {
	  (0, _inherits3.default)(Snackbar, _Component);

	  function Snackbar() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Snackbar);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Snackbar.__proto__ || (0, _getPrototypeOf2.default)(Snackbar)).call.apply(_ref, [this].concat(args))), _this), _this.componentClickAway = function () {
	      if (_this.timerTransitionId) {
	        // If transitioning, don't close the snackbar.
	        return;
	      }

	      if (_this.props.open !== null && _this.props.onRequestClose) {
	        _this.props.onRequestClose('clickaway');
	      } else {
	        _this.setState({ open: false });
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(Snackbar, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        open: this.props.open,
	        message: this.props.message,
	        action: this.props.action
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.state.open) {
	        this.setAutoHideTimer();
	        this.setTransitionTimer();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;

	      if (this.props.open && nextProps.open && (nextProps.message !== this.props.message || nextProps.action !== this.props.action)) {
	        this.setState({
	          open: false
	        });

	        clearTimeout(this.timerOneAtTheTimeId);
	        this.timerOneAtTheTimeId = setTimeout(function () {
	          _this2.setState({
	            message: nextProps.message,
	            action: nextProps.action,
	            open: true
	          });
	        }, 400);
	      } else {
	        var open = nextProps.open;

	        this.setState({
	          open: open !== null ? open : this.state.open,
	          message: nextProps.message,
	          action: nextProps.action
	        });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (prevState.open !== this.state.open) {
	        if (this.state.open) {
	          this.setAutoHideTimer();
	          this.setTransitionTimer();
	        } else {
	          clearTimeout(this.timerAutoHideId);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timerAutoHideId);
	      clearTimeout(this.timerTransitionId);
	      clearTimeout(this.timerOneAtTheTimeId);
	    }
	  }, {
	    key: 'setAutoHideTimer',


	    // Timer that controls delay before snackbar auto hides
	    value: function setAutoHideTimer() {
	      var _this3 = this;

	      var autoHideDuration = this.props.autoHideDuration;

	      if (autoHideDuration > 0) {
	        clearTimeout(this.timerAutoHideId);
	        this.timerAutoHideId = setTimeout(function () {
	          if (_this3.props.open !== null && _this3.props.onRequestClose) {
	            _this3.props.onRequestClose('timeout');
	          } else {
	            _this3.setState({ open: false });
	          }
	        }, autoHideDuration);
	      }
	    }

	    // Timer that controls delay before click-away events are captured (based on when animation completes)

	  }, {
	    key: 'setTransitionTimer',
	    value: function setTransitionTimer() {
	      var _this4 = this;

	      this.timerTransitionId = setTimeout(function () {
	        _this4.timerTransitionId = undefined;
	      }, 400);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          autoHideDuration = _props.autoHideDuration,
	          contentStyle = _props.contentStyle,
	          bodyStyle = _props.bodyStyle,
	          messageProp = _props.message,
	          onRequestClose = _props.onRequestClose,
	          onActionTouchTap = _props.onActionTouchTap,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['autoHideDuration', 'contentStyle', 'bodyStyle', 'message', 'onRequestClose', 'onActionTouchTap', 'style']);
	      var _state = this.state,
	          action = _state.action,
	          message = _state.message,
	          open = _state.open;
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);

	      return _react2.default.createElement(
	        _ClickAwayListener2.default,
	        { onClickAway: open ? this.componentClickAway : null },
	        _react2.default.createElement(
	          'div',
	          (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	          _react2.default.createElement(_SnackbarBody2.default, {
	            action: action,
	            contentStyle: contentStyle,
	            message: message,
	            open: open,
	            onActionTouchTap: onActionTouchTap,
	            style: bodyStyle
	          })
	        )
	      );
	    }
	  }]);
	  return Snackbar;
	}(_react.Component);

	Snackbar.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? Snackbar.propTypes = {
	  /**
	   * The label for the action on the snackbar.
	   */
	  action: _react.PropTypes.node,
	  /**
	   * The number of milliseconds to wait before automatically dismissing.
	   * If no value is specified the snackbar will dismiss normally.
	   * If a value is provided the snackbar can still be dismissed normally.
	   * If a snackbar is dismissed before the timer expires, the timer will be cleared.
	   */
	  autoHideDuration: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the body element.
	   */
	  bodyStyle: _react.PropTypes.object,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the content element.
	   */
	  contentStyle: _react.PropTypes.object,
	  /**
	   * The message to be displayed.
	   *
	   * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
	   * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
	   * showing again)
	   */
	  message: _react.PropTypes.node.isRequired,
	  /**
	   * Fired when the action button is touchtapped.
	   *
	   * @param {object} event Action button event.
	   */
	  onActionTouchTap: _react.PropTypes.func,
	  /**
	   * Fired when the `Snackbar` is requested to be closed by a click outside the `Snackbar`, or after the
	   * `autoHideDuration` timer expires.
	   *
	   * Typically `onRequestClose` is used to set state in the parent component, which is used to control the `Snackbar`
	   * `open` prop.
	   *
	   * The `reason` parameter can optionally be used to control the response to `onRequestClose`,
	   * for example ignoring `clickaway`.
	   *
	   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
	   */
	  onRequestClose: _react.PropTypes.func,
	  /**
	   * Controls whether the `Snackbar` is opened or not.
	   */
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = Snackbar;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _reactDom = __webpack_require__(116);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _events = __webpack_require__(113);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isDescendant = function isDescendant(el, target) {
	  if (target !== null) {
	    return el === target || isDescendant(el, target.parentNode);
	  }
	  return false;
	};

	var clickAwayEvents = ['mouseup', 'touchend'];
	var bind = function bind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.on(document, event, callback);
	  });
	};
	var unbind = function unbind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.off(document, event, callback);
	  });
	};

	var ClickAwayListener = function (_Component) {
	  (0, _inherits3.default)(ClickAwayListener, _Component);

	  function ClickAwayListener() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, ClickAwayListener);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }

	      // IE11 support, which trigger the handleClickAway even after the unbind
	      if (_this.isCurrentlyMounted) {
	        var el = _reactDom2.default.findDOMNode(_this);

	        if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
	          _this.props.onClickAway(event);
	        }
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(ClickAwayListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.isCurrentlyMounted = true;
	      if (this.props.onClickAway) {
	        bind(this.handleClickAway);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.onClickAway !== this.props.onClickAway) {
	        unbind(this.handleClickAway);
	        if (this.props.onClickAway) {
	          bind(this.handleClickAway);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.isCurrentlyMounted = false;
	      unbind(this.handleClickAway);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return ClickAwayListener;
	}(_react.Component);

	process.env.NODE_ENV !== "production" ? ClickAwayListener.propTypes = {
	  children: _react.PropTypes.element,
	  onClickAway: _react.PropTypes.func
	} : void 0;
	exports.default = ClickAwayListener;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SnackbarBody = undefined;

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _withWidth = __webpack_require__(211);

	var _withWidth2 = _interopRequireDefault(_withWidth);

	var _FlatButton = __webpack_require__(199);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context) {
	  var open = props.open,
	      width = props.width;
	  var _context$muiTheme = context.muiTheme,
	      _context$muiTheme$bas = _context$muiTheme.baseTheme,
	      _context$muiTheme$bas2 = _context$muiTheme$bas.spacing,
	      desktopGutter = _context$muiTheme$bas2.desktopGutter,
	      desktopSubheaderHeight = _context$muiTheme$bas2.desktopSubheaderHeight,
	      fontFamily = _context$muiTheme$bas.fontFamily,
	      _context$muiTheme$sna = _context$muiTheme.snackbar,
	      backgroundColor = _context$muiTheme$sna.backgroundColor,
	      textColor = _context$muiTheme$sna.textColor,
	      actionColor = _context$muiTheme$sna.actionColor;


	  var isSmall = width === _withWidth.SMALL;

	  var styles = {
	    root: {
	      fontFamily: fontFamily,
	      backgroundColor: backgroundColor,
	      padding: '0 ' + desktopGutter + 'px',
	      height: desktopSubheaderHeight,
	      lineHeight: desktopSubheaderHeight + 'px',
	      borderRadius: isSmall ? 0 : 2,
	      maxWidth: isSmall ? 'inherit' : 568,
	      minWidth: isSmall ? 'inherit' : 288,
	      width: isSmall ? 'calc(100vw - ' + desktopGutter * 2 + 'px)' : 'auto',
	      flexGrow: isSmall ? 1 : 0
	    },
	    content: {
	      fontSize: 14,
	      color: textColor,
	      opacity: open ? 1 : 0,
	      transition: open ? _transitions2.default.easeOut('500ms', 'opacity', '100ms') : _transitions2.default.easeOut('400ms', 'opacity')
	    },
	    action: {
	      color: actionColor,
	      float: 'right',
	      marginTop: 6,
	      marginRight: -16,
	      marginLeft: desktopGutter,
	      backgroundColor: 'transparent'
	    }
	  };

	  return styles;
	}

	var SnackbarBody = exports.SnackbarBody = function SnackbarBody(props, context) {
	  var action = props.action,
	      contentStyle = props.contentStyle,
	      message = props.message,
	      open = props.open,
	      onActionTouchTap = props.onActionTouchTap,
	      style = props.style,
	      other = (0, _objectWithoutProperties3.default)(props, ['action', 'contentStyle', 'message', 'open', 'onActionTouchTap', 'style']);
	  var prepareStyles = context.muiTheme.prepareStyles;

	  var styles = getStyles(props, context);

	  var actionButton = action && _react2.default.createElement(_FlatButton2.default, {
	    style: styles.action,
	    label: action,
	    onTouchTap: onActionTouchTap
	  });

	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	    _react2.default.createElement(
	      'div',
	      { style: prepareStyles((0, _simpleAssign2.default)(styles.content, contentStyle)) },
	      _react2.default.createElement(
	        'span',
	        null,
	        message
	      ),
	      actionButton
	    )
	  );
	};

	process.env.NODE_ENV !== "production" ? SnackbarBody.propTypes = {
	  /**
	   * The label for the action on the snackbar.
	   */
	  action: _react.PropTypes.node,
	  /**
	   * Override the inline-styles of the content element.
	   */
	  contentStyle: _react.PropTypes.object,
	  /**
	   * The message to be displayed.
	   *
	   * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
	   * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
	   * showing again)
	   */
	  message: _react.PropTypes.node.isRequired,
	  /**
	   * Fired when the action button is touchtapped.
	   *
	   * @param {object} event Action button event.
	   */
	  onActionTouchTap: _react.PropTypes.func,
	  /**
	   * @ignore
	   * Controls whether the `Snackbar` is opened or not.
	   */
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * @ignore
	   * Width of the screen.
	   */
	  width: _react.PropTypes.number.isRequired
	} : void 0;

	SnackbarBody.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};

	exports.default = (0, _withWidth2.default)()(SnackbarBody);

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LARGE = exports.MEDIUM = exports.SMALL = undefined;

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	exports.default = withWidth;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactEventListener = __webpack_require__(190);

	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SMALL = exports.SMALL = 1;
	var MEDIUM = exports.MEDIUM = 2;
	var LARGE = exports.LARGE = 3;

	function withWidth() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _options$largeWidth = options.largeWidth,
	      largeWidth = _options$largeWidth === undefined ? 992 : _options$largeWidth,
	      _options$mediumWidth = options.mediumWidth,
	      mediumWidth = _options$mediumWidth === undefined ? 768 : _options$mediumWidth,
	      _options$resizeInterv = options.resizeInterval,
	      resizeInterval = _options$resizeInterv === undefined ? 166 : _options$resizeInterv;


	  return function (MyComponent) {
	    return function (_Component) {
	      (0, _inherits3.default)(WithWidth, _Component);

	      function WithWidth() {
	        var _ref;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, WithWidth);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithWidth.__proto__ || (0, _getPrototypeOf2.default)(WithWidth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	          width: null
	        }, _this.handleResize = function () {
	          clearTimeout(_this.deferTimer);
	          _this.deferTimer = setTimeout(function () {
	            _this.updateWidth();
	          }, resizeInterval);
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      (0, _createClass3.default)(WithWidth, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          this.updateWidth();
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          clearTimeout(this.deferTimer);
	        }
	      }, {
	        key: 'updateWidth',
	        value: function updateWidth() {
	          var innerWidth = window.innerWidth;
	          var width = void 0;

	          if (innerWidth >= largeWidth) {
	            width = LARGE;
	          } else if (innerWidth >= mediumWidth) {
	            width = MEDIUM;
	          } else {
	            // innerWidth < 768
	            width = SMALL;
	          }

	          if (width !== this.state.width) {
	            this.setState({
	              width: width
	            });
	          }
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var width = this.state.width;

	          /**
	           * When rendering the component on the server,
	           * we have no idea about the screen width.
	           * In order to prevent blinks and help the reconciliation
	           * we are not rendering the component.
	           *
	           * A better alternative would be to send client hints.
	           * But the browser support of this API is low:
	           * http://caniuse.com/#search=client%20hint
	           */
	          if (width === null) {
	            return null;
	          }

	          return _react2.default.createElement(
	            _reactEventListener2.default,
	            { target: 'window', onResize: this.handleResize },
	            _react2.default.createElement(MyComponent, (0, _extends3.default)({
	              width: width
	            }, this.props))
	          );
	        }
	      }]);
	      return WithWidth;
	    }(_react.Component);
	  };
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _CircularProgress = __webpack_require__(213);

	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _CircularProgress2.default;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(15);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(53);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(54);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(59);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(60);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(64);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(99);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(107);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _autoPrefix = __webpack_require__(119);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(108);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getRelativeValue(value, min, max) {
	  var clampedValue = Math.min(Math.max(min, value), max);
	  return clampedValue / (max - min);
	}

	function getArcLength(fraction, props) {
	  return fraction * Math.PI * (props.size - props.thickness);
	}

	function getStyles(props, context) {
	  var max = props.max,
	      min = props.min,
	      size = props.size,
	      value = props.value;
	  var palette = context.muiTheme.baseTheme.palette;


	  var styles = {
	    root: {
	      position: 'relative',
	      display: 'inline-block',
	      width: size,
	      height: size
	    },
	    wrapper: {
	      width: size,
	      height: size,
	      display: 'inline-block',
	      transition: _transitions2.default.create('transform', '20s', null, 'linear'),
	      transitionTimingFunction: 'linear'
	    },
	    svg: {
	      width: size,
	      height: size,
	      position: 'relative'
	    },
	    path: {
	      stroke: props.color || palette.primary1Color,
	      strokeLinecap: 'round',
	      transition: _transitions2.default.create('all', '1.5s', null, 'ease-in-out')
	    }
	  };

	  if (props.mode === 'determinate') {
	    var relVal = getRelativeValue(value, min, max);
	    styles.path.transition = _transitions2.default.create('all', '0.3s', null, 'linear');
	    styles.path.strokeDasharray = getArcLength(relVal, props) + ', ' + getArcLength(1, props);
	  }

	  return styles;
	}

	var CircularProgress = function (_Component) {
	  (0, _inherits3.default)(CircularProgress, _Component);

	  function CircularProgress() {
	    (0, _classCallCheck3.default)(this, CircularProgress);
	    return (0, _possibleConstructorReturn3.default)(this, (CircularProgress.__proto__ || (0, _getPrototypeOf2.default)(CircularProgress)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(CircularProgress, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.scalePath(this.refs.path);
	      this.rotateWrapper(this.refs.wrapper);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.scalePathTimer);
	      clearTimeout(this.rotateWrapperTimer);
	    }
	  }, {
	    key: 'scalePath',
	    value: function scalePath(path) {
	      var _this2 = this;

	      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      if (this.props.mode !== 'indeterminate') return;

	      step %= 3;

	      if (step === 0) {
	        path.style.strokeDasharray = getArcLength(0, this.props) + ', ' + getArcLength(1, this.props);
	        path.style.strokeDashoffset = 0;
	        path.style.transitionDuration = '0ms';
	      } else if (step === 1) {
	        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
	        path.style.strokeDashoffset = getArcLength(-0.3, this.props);
	        path.style.transitionDuration = '750ms';
	      } else {
	        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
	        path.style.strokeDashoffset = getArcLength(-1, this.props);
	        path.style.transitionDuration = '850ms';
	      }

	      this.scalePathTimer = setTimeout(function () {
	        return _this2.scalePath(path, step + 1);
	      }, step ? 750 : 250);
	    }
	  }, {
	    key: 'rotateWrapper',
	    value: function rotateWrapper(wrapper) {
	      var _this3 = this;

	      if (this.props.mode !== 'indeterminate') return;

	      _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(0deg)');
	      _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '0ms');

	      setTimeout(function () {
	        _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(1800deg)');
	        _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '10s');
	        _autoPrefix2.default.set(wrapper.style, 'transitionTimingFunction', 'linear');
	      }, 50);

	      this.rotateWrapperTimer = setTimeout(function () {
	        return _this3.rotateWrapper(wrapper);
	      }, 10050);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          style = _props.style,
	          innerStyle = _props.innerStyle,
	          size = _props.size,
	          thickness = _props.thickness,
	          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'innerStyle', 'size', 'thickness']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context);

	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        _react2.default.createElement(
	          'div',
	          { ref: 'wrapper', style: prepareStyles((0, _simpleAssign2.default)(styles.wrapper, innerStyle)) },
	          _react2.default.createElement(
	            'svg',
	            {
	              viewBox: '0 0 ' + size + ' ' + size,
	              style: prepareStyles(styles.svg)
	            },
	            _react2.default.createElement('circle', {
	              ref: 'path',
	              style: prepareStyles(styles.path),
	              cx: size / 2,
	              cy: size / 2,
	              r: (size - thickness) / 2,
	              fill: 'none',
	              strokeWidth: thickness,
	              strokeMiterlimit: '20'
	            })
	          )
	        )
	      );
	    }
	  }]);
	  return CircularProgress;
	}(_react.Component);

	CircularProgress.defaultProps = {
	  mode: 'indeterminate',
	  value: 0,
	  min: 0,
	  max: 100,
	  size: 40,
	  thickness: 3.5
	};
	CircularProgress.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? CircularProgress.propTypes = {
	  /**
	   * Override the progress's color.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * Style for inner wrapper div.
	   */
	  innerStyle: _react.PropTypes.object,
	  /**
	   * The max value of progress, only works in determinate mode.
	   */
	  max: _react.PropTypes.number,
	  /**
	   * The min value of progress, only works in determinate mode.
	   */
	  min: _react.PropTypes.number,
	  /**
	   * The mode of show your progress, indeterminate
	   * for when there is no value for progress.
	   */
	  mode: _react.PropTypes.oneOf(['determinate', 'indeterminate']),
	  /**
	   * The diameter of the progress in pixels.
	   */
	  size: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Stroke width in pixels.
	   */
	  thickness: _react.PropTypes.number,
	  /**
	   * The value of progress, only works in determinate mode.
	   */
	  value: _react.PropTypes.number
	} : void 0;
	exports.default = CircularProgress;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(215);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Duo = function (_Component) {
	  _inherits(Duo, _Component);

	  function Duo(props) {
	    _classCallCheck(this, Duo);

	    return _possibleConstructorReturn(this, (Duo.__proto__ || Object.getPrototypeOf(Duo)).call(this, props));
	  }

	  _createClass(Duo, [{
	    key: 'render',
	    value: function render() {
	      var className = 'duo ' + (this.props.className || '');
	      return _react2.default.createElement(
	        'div',
	        { className: className, style: this.props.style },
	        _react2.default.createElement(
	          'div',
	          { className: 'duo__element duo__element--left' },
	          this.props.eltLeft
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'duo__element duo__element--right' },
	          this.props.eltRight
	        )
	      );
	    }
	  }]);

	  return Duo;
	}(_react.Component);

	exports.default = Duo;

/***/ },
/* 215 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 216 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(218);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Card = function (_Component) {
	  _inherits(Card, _Component);

	  function Card() {
	    _classCallCheck(this, Card);

	    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	  }

	  _createClass(Card, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'figure',
	        { className: 'card' },
	        _react2.default.createElement('img', { className: 'card-img', src: this.props.source, alt: this.props.title }),
	        _react2.default.createElement(
	          'figcaption',
	          { className: 'card-caption' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            this.props.title
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            this.props.description
	          )
	        )
	      );
	    }
	  }]);

	  return Card;
	}(_react.Component);

	exports.default = Card;


	Card.PropTypes = {
	  source: _react.PropTypes.string.isRequired,
	  description: _react.PropTypes.string,
	  title: _react.PropTypes.string
	};

/***/ },
/* 218 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	__webpack_require__(220);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(3);

	var Banner = function (_Component) {
	  _inherits(Banner, _Component);

	  function Banner(props) {
	    _classCallCheck(this, Banner);

	    var _this = _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).call(this, props));

	    var backgroundImg = props.backgroundImg || '';
	    _this.state = {
	      bannerStyle: {
	        backgroundImage: backgroundImg,
	        backgroundColor: 'purple'
	      }
	    };
	    return _this;
	  }

	  _createClass(Banner, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'banner', style: this.props },
	        React.createElement(
	          'h1',
	          { className: 'container centered title' },
	          this.props.title
	        )
	      );
	    }
	  }]);

	  return Banner;
	}(_react.Component);

	exports.default = Banner;

/***/ },
/* 220 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ed.ico";

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(223);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pikachu = function (_Component) {
	  _inherits(Pikachu, _Component);

	  function Pikachu() {
	    _classCallCheck(this, Pikachu);

	    return _possibleConstructorReturn(this, (Pikachu.__proto__ || Object.getPrototypeOf(Pikachu)).apply(this, arguments));
	  }

	  _createClass(Pikachu, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('img', { className: 'pika-img', src: 'https://i.ytimg.com/vi/gENjTs8VskQ/maxresdefault.jpg', alt: 'pikapika' });
	    }
	  }]);

	  return Pikachu;
	}(_react.Component);

	exports.default = Pikachu;

/***/ },
/* 223 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _adaptedBasketball = __webpack_require__(225);

	var _adaptedBasketball2 = _interopRequireDefault(_adaptedBasketball);

	__webpack_require__(226);

	var _Card = __webpack_require__(217);

	var _Card2 = _interopRequireDefault(_Card);

	var _NavLink = __webpack_require__(11);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _Presenter = __webpack_require__(227);

	var _Presenter2 = _interopRequireDefault(_Presenter);

	var _Banner = __webpack_require__(219);

	var _Banner2 = _interopRequireDefault(_Banner);

	var _DataContainer = __webpack_require__(229);

	var _DataContainer2 = _interopRequireDefault(_DataContainer);

	var _axios = __webpack_require__(198);

	var _axios2 = _interopRequireDefault(_axios);

	var _reactRouter = __webpack_require__(1);

	var _reactAddonsCssTransitionGroup = __webpack_require__(230);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _config = __webpack_require__(175);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Intro = function Intro() {
	  return _react2.default.createElement(
	    'div',
	    { className: 'intro content-text' },
	    _react2.default.createElement(
	      'h4',
	      null,
	      'Description of my work will be gathered here'
	    ),
	    _react2.default.createElement(
	      'span',
	      null,
	      'I\'ve done different shit at school or in my spare time, and I am glad to share it with ya'
	    )
	  );
	};

	var Portfolio = function (_Component) {
	  _inherits(Portfolio, _Component);

	  function Portfolio(props) {
	    _classCallCheck(this, Portfolio);

	    var _this = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));

	    _this.state = {
	      proyectos: [],
	      projects: []
	    };
	    return _this;
	  }

	  _createClass(Portfolio, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      _axios2.default.get(_config2.default.projectsAPI).then(function (response) {
	        _this2.setState({ projects: response.data.projects });
	      }).catch(function (error) {
	        console.log(error.message);
	      });

	      // initialization of projects displayed in presenter
	      var loadedProjects = [];
	      loadedProjects.push({
	        source: "http://www.basketusa.com/wp-content/uploads/2017/03/kobe-shaq.jpg",
	        title: 'Kobe & Shaq',
	        description: "They're here for testing purpose only ! Don't click !"
	      });
	      this.setState({ proyectos: loadedProjects });
	    }
	  }, {
	    key: 'renderProjects',
	    value: function renderProjects() {
	      var page = this.props.location.pathname;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Presenter2.default,
	          null,
	          this.state.projects.map(function (item, key) {
	            return _react2.default.createElement(
	              _reactRouter.Link,
	              { to: "/portfolio/project/" + item.id + "#project", key: key },
	              _react2.default.createElement(_Card2.default, {
	                source: item.media,
	                title: item.title,
	                description: item.shortDescription
	              })
	            );
	          })
	        ),
	        this.props.children && _react2.default.createElement(
	          'div',
	          { className: 'project-display' },
	          _react2.default.createElement(
	            _reactAddonsCssTransitionGroup2.default,
	            {
	              transitionName: 'swap',
	              transitionEnterTimeout: 900,
	              transitionLeaveTimeout: 900
	            },
	            _react2.default.cloneElement(_react2.default.Children.only(this.props.children), { key: page, projects: this.state.projects })
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'portfolio' },
	        _react2.default.createElement(_Banner2.default, {
	          title: 'My projects',
	          backgroundImage: 'url(' + _adaptedBasketball2.default + ')'
	        }),
	        _react2.default.createElement(Intro, null),
	        this.renderProjects()
	      );
	    }
	  }]);

	  return Portfolio;
	}(_react.Component);

	exports.default = Portfolio;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "adaptedBasketball.jpg";

/***/ },
/* 226 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(116);

	__webpack_require__(228);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Presenter = function (_Component) {
	  _inherits(Presenter, _Component);

	  function Presenter(props) {
	    _classCallCheck(this, Presenter);

	    return _possibleConstructorReturn(this, (Presenter.__proto__ || Object.getPrototypeOf(Presenter)).call(this, props));
	  }

	  _createClass(Presenter, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      // When window is scrolled, component is handling stuff
	      window.addEventListener('scroll', function () {
	        _this2.handleScroll();
	      });

	      // w/ onload event it triggers too early and animation is played out of the viewport
	      // window.onload = () => {
	      this.setChildrenClass();
	      this.handleScroll();
	      // }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setChildrenClass();
	    }
	  }, {
	    key: 'setChildrenClass',
	    value: function setChildrenClass() {
	      for (var i in this.refs) {
	        var elt = (0, _reactDom.findDOMNode)(this.refs[i]);
	        elt.classList.add('project-card');
	      }
	    }

	    // All the children animation is triggered when visible

	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {
	      var _this3 = this;

	      var _loop = function _loop() {
	        var elt = (0, _reactDom.findDOMNode)(_this3.refs[i]);
	        if (_this3.checkVisible(elt)) {
	          // Timeout used for style effect, %3 is too avoid too long delay between first and last
	          setTimeout(function () {
	            if (elt.classList.contains('blossom')) {
	              elt.classList.remove('blossom');
	            }
	            elt.classList.add('blossom');
	          }, 200 * (i % 3));
	        }
	      };

	      for (var i in this.refs) {
	        _loop();
	      }
	    }

	    // If the bounding rectangle of the element is above the lower part of viewport then return true;

	  }, {
	    key: 'checkVisible',
	    value: function checkVisible(elm) {
	      var rect = elm.getBoundingClientRect();
	      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	      return !(rect.top - viewHeight >= 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'presenter' },
	        _react2.default.Children.map(this.props.children, function (element, idx) {
	          return _react2.default.cloneElement(element, { ref: idx });
	        })
	      );
	    }
	  }]);

	  return Presenter;
	}(_react.Component);

	exports.default = Presenter;

/***/ },
/* 228 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _axios = __webpack_require__(198);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DataContainer = function (_Component) {
	  _inherits(DataContainer, _Component);

	  function DataContainer(props) {
	    _classCallCheck(this, DataContainer);

	    var _this = _possibleConstructorReturn(this, (DataContainer.__proto__ || Object.getPrototypeOf(DataContainer)).call(this, props));

	    _this.state = {
	      data: {}
	    };
	    return _this;
	  }

	  _createClass(DataContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      var that = this;
	      var url = this.props.url;
	      _axios2.default.get(url).then(function (response) {
	        var ninos = _react2.default.Children.map(_this2.props.children, function (child) {
	          if (_react2.default.isValidElement(child)) {
	            return _react2.default.cloneElement(child, { parentData: response.data });
	          }
	        });
	        _this2.setState({ data: response.data,
	          ninos: ninos });
	      }).catch(function (error) {
	        console.log(error.message);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.state.ninos
	      );
	    }
	  }]);

	  return DataContainer;
	}(_react.Component);

	exports.default = DataContainer;

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = require("react-addons-css-transition-group");

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Progress = __webpack_require__(232);

	var _Progress2 = _interopRequireDefault(_Progress);

	var _List = __webpack_require__(234);

	var _List2 = _interopRequireDefault(_List);

	var _Reference = __webpack_require__(236);

	var _Reference2 = _interopRequireDefault(_Reference);

	var _reactRouter = __webpack_require__(1);

	var _reactDom = __webpack_require__(116);

	__webpack_require__(238);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Project = function (_Component) {
	  _inherits(Project, _Component);

	  function Project(props) {
	    _classCallCheck(this, Project);

	    var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

	    var newProject = props.projects[props.params.projectID - 1];
	    var errorProject = false;
	    if (!newProject) {
	      errorProject = true;
	    }
	    _this.state = {
	      projectID: props.params.projectID,
	      query: props.location.query,
	      currentProject: newProject,
	      errorProject: errorProject
	    };
	    return _this;
	  }

	  _createClass(Project, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.getHere();
	    }
	  }, {
	    key: 'getHere',
	    value: function getHere() {
	      var project = (0, _reactDom.findDOMNode)(this);
	      var scrollInterval = setInterval(function () {
	        window.scrollTo(0, window.scrollY + 20);
	        if (project.getBoundingClientRect().bottom - window.innerHeight <= 0) {
	          clearInterval(scrollInterval);
	        }
	      }, 1);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var newProject = nextProps.projects[nextProps.params.projectID - 1];
	      if (newProject) {
	        this.setState({ errorProject: false });
	      }
	      this.setState({
	        projectID: nextProps.params.projectID,
	        currentProject: newProject
	      });
	    }
	  }, {
	    key: 'getNavID',
	    value: function getNavID(direction) {
	      var currentID = parseInt(this.props.params.projectID);
	      if (direction === 'left') {
	        if (currentID > 1) {
	          return currentID - 1;
	        } else {
	          return 1;
	        }
	      } else if (direction === 'right') {
	        if (currentID < this.props.projects.length) {
	          return currentID + 1;
	        } else {
	          return this.props.projects.length;
	        }
	      }
	    }
	  }, {
	    key: 'handleTouchMove',
	    value: function handleTouchMove(e) {
	      console.log(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'project', id: 'project' },
	        this.state.errorProject ? _react2.default.createElement(
	          'div',
	          { className: 'noProject' },
	          _react2.default.createElement(
	            'div',
	            null,
	            'There is no project for this ID !'
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            'Are you lost ? You should probably go back to the ',
	            _react2.default.createElement(
	              'a',
	              { href: '1' },
	              'beginning of the list'
	            )
	          )
	        ) : _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            { className: 'title' },
	            this.state.currentProject.title
	          ),
	          _react2.default.createElement(
	            'h4',
	            { className: 'description' },
	            this.state.currentProject.longDescription
	          ),
	          _react2.default.createElement(_Progress2.default, { percentageValue: this.state.currentProject.completion }),
	          _react2.default.createElement(_List2.default, { technos: this.state.currentProject.technos }),
	          _react2.default.createElement(
	            'div',
	            { className: 'refs' },
	            _react2.default.createElement(_Reference2.default, { className: 'source_ref', type: 'source', url: this.state.currentProject.sourceCode }),
	            _react2.default.createElement(_Reference2.default, { className: 'link_ref', type: 'web', url: this.state.currentProject.url })
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { className: 'arrow arrow-left', to: '/portfolio/project/' + this.getNavID('left') },
	            _react2.default.createElement('span', { className: 'icon-circle-left' })
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { className: 'arrow arrow-right', to: '/portfolio/project/' + this.getNavID('right') },
	            _react2.default.createElement('span', { className: 'icon-circle-right' })
	          )
	        )
	      );
	    }
	  }]);

	  return Project;
	}(_react.Component);

	exports.default = Project;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(233);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Progress = function (_Component) {
	  _inherits(Progress, _Component);

	  function Progress(props) {
	    _classCallCheck(this, Progress);

	    var _this = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

	    _this.state = {
	      value: 0
	    };
	    return _this;
	  }

	  _createClass(Progress, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      setTimeout(function () {
	        _this2.setState({
	          value: _this2.props.percentageValue
	        });
	      }, 500);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'progress' },
	        _react2.default.createElement(
	          'div',
	          { className: 'progress_bar' },
	          this.state && _react2.default.createElement('div', { className: 'progress_bar_content skill_one', ref: 'thingy',
	            style: {
	              width: this.state.value + '%',
	              transition: 'width 1s cubic-bezier(.97,1.52,0,.64)'
	            } }),
	          _react2.default.createElement(
	            'div',
	            { className: 'progress_value' },
	            this.state.value || 0,
	            '% completed'
	          )
	        )
	      );
	    }
	  }]);

	  return Progress;
	}(_react.Component);

	exports.default = Progress;

/***/ },
/* 233 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(235);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// TODO make the list component free from any type of item
	var List = function (_Component) {
	  _inherits(List, _Component);

	  function List(props) {
	    _classCallCheck(this, List);

	    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));
	  }

	  _createClass(List, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'technos ' + (this.props.className || '') },
	        _react2.default.createElement(
	          'span',
	          null,
	          'Those technologies were used in the creation of this project : '
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'technos__list' },
	          this.props.technos.map(function (item, key) {
	            return _react2.default.createElement(
	              'li',
	              { key: key },
	              _react2.default.createElement(
	                'div',
	                { className: 'itemContainer' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'label' },
	                  item
	                ),
	                _react2.default.createElement('div', { className: 'technos__pic technos__pic--' + item.split(' ')[0] })
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return List;
	}(_react.Component);

	exports.default = List;

/***/ },
/* 235 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(237);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Reference = function (_Component) {
	  _inherits(Reference, _Component);

	  function Reference(props) {
	    _classCallCheck(this, Reference);

	    var _this = _possibleConstructorReturn(this, (Reference.__proto__ || Object.getPrototypeOf(Reference)).call(this, props));

	    var isEmptyMsg = '';
	    var goMsg = '';
	    var iconType = '';
	    if (props.type == 'source') {
	      isEmptyMsg = 'Sources for this project is not publicly available yet';
	      iconType = 'github';
	      goMsg = 'Check out the sources !';
	    } else if (props.type == 'web') {
	      isEmptyMsg = 'Unfortunately, this gem is not deployed on the world wide web';
	      iconType = 'earth';
	      goMsg = "Go have a look !";
	    } else {
	      console.error('Only "source" and "web" types are currently handled');
	    }
	    _this.state = {
	      isEmptyMsg: isEmptyMsg,
	      goMsg: goMsg,
	      url: props.url,
	      iconType: iconType
	    };
	    return _this;
	  }

	  _createClass(Reference, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'reference ' + (this.props.className || '') },
	        _react2.default.createElement('span', { className: 'icon icon-' + this.state.iconType }),
	        this.state.url ? _react2.default.createElement(
	          'a',
	          { href: this.state.url, className: 'msg' },
	          this.state.goMsg
	        ) : _react2.default.createElement(
	          'span',
	          { className: 'msg' },
	          this.state.isEmptyMsg
	        )
	      );
	    }
	  }]);

	  return Reference;
	}(_react.Component);

	exports.default = Reference;

/***/ },
/* 237 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 238 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(240);

	var _cv = __webpack_require__(184);

	var _cv2 = _interopRequireDefault(_cv);

	var _Slider = __webpack_require__(241);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _Skills = __webpack_require__(243);

	var _Skills2 = _interopRequireDefault(_Skills);

	var _Duo = __webpack_require__(214);

	var _Duo2 = _interopRequireDefault(_Duo);

	var _Banner = __webpack_require__(219);

	var _Banner2 = _interopRequireDefault(_Banner);

	var _Experience = __webpack_require__(245);

	var _Experience2 = _interopRequireDefault(_Experience);

	var _ARTLogics = __webpack_require__(248);

	var _ARTLogics2 = _interopRequireDefault(_ARTLogics);

	var _sopra = __webpack_require__(249);

	var _sopra2 = _interopRequireDefault(_sopra);

	var _logoOmnilog = __webpack_require__(250);

	var _logoOmnilog2 = _interopRequireDefault(_logoOmnilog);

	var _venice_desktop = __webpack_require__(251);

	var _venice_desktop2 = _interopRequireDefault(_venice_desktop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//TODO fetch it from server
	var skills = {
	  front: {
	    title: 'Front-end sills',
	    sliderSide: 'left',
	    barStyle: { backgroundColor: '#ff9125' },
	    technos: [{ techno: 'javascript', value: 75 }, { techno: 'Angular', value: 80 }, { techno: 'jQuery', value: 65 }, { techno: 'React', value: 70 }, { techno: "CSS", value: 75 }, { techno: "Sass", value: 80 }]
	  },
	  back: {
	    title: 'Back-end sills',
	    sliderSide: 'right',
	    barStyle: { backgroundColor: '#2191ff' },
	    technos: [{ techno: 'C#', value: 55 }, { techno: '.Net WebAPI 2', value: 60 }, { techno: 'Node', value: 45 }, { techno: "MongoDB", value: 35 }, { techno: "SQL Server", value: 40 }]
	  },
	  tools: {
	    title: 'Tools and methodologies',
	    sliderSide: 'bottom',
	    barStyle: { backgroundColor: '#00e498' },
	    technos: [{ techno: 'Git, Gitflow', value: 80 }, { techno: 'Agile methodology', value: 67 }, { techno: 'Continuous integration', value: 75 }, { techno: 'responsive design', value: 50 }, { techno: 'UX development', value: 30 }]
	  }
	};

	var PdfLink = function PdfLink(props) {
	  return _react2.default.createElement(
	    'a',
	    { className: 'pdfLink', href: _cv2.default, target: '_blank' },
	    _react2.default.createElement(
	      'div',
	      { className: 'pdf' },
	      _react2.default.createElement('span', { className: 'icon-file-pdf' })
	    )
	  );
	};
	var PdfText = function PdfText(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'content-text' },
	    _react2.default.createElement(
	      'p',
	      null,
	      'As simple as it gets, my resume available as a plain old PDF file'
	    )
	  );
	};
	var pdfStyle = { background: '#f9f9f9', padding: '15vh 0' };

	var experiences = [{
	  logo: _ARTLogics2.default,
	  title: "Gap year as a C# junior engineer at Art-Logics in Shanghai, China",
	  text: "Maintenance and refactoring of a desktop software used to set the configuration of automotive tests. \\nRewriting features using MVP pattern, development of utilities: specific collections and graphic interface. \\nUse of WinForms, Mantis, Tortoise SVN",
	  duration: {
	    from: "11/2014",
	    to: "09/2015"
	  }
	}, {
	  logo: _sopra2.default,
	  title: "End of studies project as a full-stack web developer at Sopra Steria Lyon, France",
	  text: "Working within a development team realizing a web application on the behalf of the major electrical company in France, following an agile scrum methodology. Development of new features thanks to AngularJS and .Net WebAPI2 \\nWorked with Git, Jira, Jenkins, SonarQube, NPM, Bower and Gulp",
	  duration: {
	    from: "02/2016",
	    to: "08/2016"
	  }
	}, {
	  logo: _logoOmnilog2.default,
	  title: "Front-end engineer at Omnilog in Paris, France",
	  text: "Technical assistance with our customer L'Équipe (www.lequipe.fr), the leading sports newspaper in France, to improve its main website and take part in other web projects. \\nDevelopment of new projects, maintenance of older features",
	  duration: {
	    from: "03/2017",
	    to: ""
	  }
	}];

	var Resume = function (_Component) {
	  _inherits(Resume, _Component);

	  function Resume(props) {
	    _classCallCheck(this, Resume);

	    var _this = _possibleConstructorReturn(this, (Resume.__proto__ || Object.getPrototypeOf(Resume)).call(this, props));

	    _this.state = {
	      skills: skills
	    };
	    return _this;
	  }

	  _createClass(Resume, [{
	    key: 'createSkillsComponents',
	    value: function createSkillsComponents() {
	      var skillsComponents = [];
	      var skills = this.state.skills;
	      for (var type in skills) {
	        if (skills.hasOwnProperty(type)) {
	          skillsComponents.push(_react2.default.createElement(
	            _Slider2.default,
	            { direction: 'in', side: skills[type].sliderSide, key: type },
	            _react2.default.createElement(_Skills2.default, { skills: skills[type].technos, barStyle: skills[type].barStyle, title: skills[type].title })
	          ));
	        }
	      }
	      return skillsComponents;
	    }
	  }, {
	    key: 'createXpComponents',
	    value: function createXpComponents() {
	      return experiences.map(function (item, key) {
	        var logoCmpnt = _react2.default.createElement('img', { className: 'xpLogo', src: item.logo, alt: '' });
	        var description = _react2.default.createElement(
	          _Experience2.default,
	          { data: item, key: key },
	          ' banana '
	        ); //<div className="content-text">{item.title}</div>;
	        var eltLeft = key % 2 === 0 ? logoCmpnt : description;
	        var eltRight = key % 2 !== 0 ? logoCmpnt : description;
	        return _react2.default.createElement(_Duo2.default, {
	          style: { padding: '5vh 0' },
	          key: key,
	          eltLeft: function () {
	            return _react2.default.createElement(
	              _Slider2.default,
	              { direction: 'in', side: 'left' },
	              eltLeft
	            );
	          }(),
	          eltRight: function () {
	            return _react2.default.createElement(
	              _Slider2.default,
	              { direction: 'in', side: 'right' },
	              eltRight
	            );
	          }() });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'resume' },
	        _react2.default.createElement(_Banner2.default, { title: 'My resume', backgroundImage: 'url(' + _venice_desktop2.default + ')' }),
	        _react2.default.createElement(_Duo2.default, { eltLeft: _react2.default.createElement(PdfText, null), eltRight: _react2.default.createElement(PdfLink, null), style: pdfStyle }),
	        this.createSkillsComponents(),
	        _react2.default.createElement(
	          'h1',
	          { className: 'content-text mid-title mid-title--blue' },
	          'Work Experiences'
	        ),
	        this.createXpComponents(),
	        _react2.default.createElement('div', { style: { height: '200px' } })
	      );
	    }
	  }]);

	  return Resume;
	}(_react.Component);

	exports.default = Resume;

/***/ },
/* 240 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(116);

	__webpack_require__(242);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Slider = function (_Component) {
	  _inherits(Slider, _Component);

	  function Slider(props) {
	    _classCallCheck(this, Slider);

	    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

	    _this.state = {
	      classes: '',
	      direction: props.direction,
	      side: props.side,
	      animation: props.direction.toLowerCase() + 'From' + _this.makeCamelCase(props.side)
	    };
	    return _this;
	  }

	  _createClass(Slider, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.state.handleScrollBind);
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(props, state) {
	      return this.checkVisible() || state.done;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.setState({ handleScrollBind: this.handleScroll.bind(this) }, function () {
	        window.addEventListener('scroll', _this2.state.handleScrollBind);
	      });

	      (0, _reactDom.findDOMNode)(this).addEventListener('animationend', function () {
	        return _this2.setState({ done: true });
	      });
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {
	      if (!this.state.done) {
	        if (this.checkVisible()) {
	          this.setState({ classes: this.state.animation });
	        }
	      }
	    }
	  }, {
	    key: 'checkVisible',
	    value: function checkVisible() {
	      var elm = (0, _reactDom.findDOMNode)(this);
	      var rect = elm.getBoundingClientRect();
	      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	      return !(rect.top * 1.5 - viewHeight >= 0);
	    }
	  }, {
	    key: 'makeCamelCase',
	    value: function makeCamelCase(s) {
	      return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = 'slider ' + this.state.classes;
	      /* When animation is done, send a custom prop to the children to warn them,
	       unless they are not a React cpt (typeof = function) */
	      return this.state.done && typeof this.props.children.type !== 'string' ? _react2.default.createElement(
	        'div',
	        { className: classes },
	        _react2.default.cloneElement(this.props.children, { sliderDone: this.state.done })
	      ) : _react2.default.createElement(
	        'div',
	        { className: classes },
	        this.props.children
	      );
	    }
	  }]);

	  return Slider;
	}(_react.Component);

	exports.default = Slider;

/***/ },
/* 242 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(244);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Skills = function (_Component) {
	  _inherits(Skills, _Component);

	  function Skills(props) {
	    _classCallCheck(this, Skills);

	    var _this = _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).call(this, props));

	    _this.state = {
	      skills: props.skills,
	      barStyle: props.barStyle
	    };
	    return _this;
	  }

	  _createClass(Skills, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      if (newProps.sliderDone) {
	        this.setState({
	          trigger: true
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'skills' },
	        _react2.default.createElement(
	          'div',
	          { className: 'content-text mid-title mid-title--orange mid-title--thin' },
	          this.props.title
	        ),
	        this.state.skills ? _react2.default.createElement(
	          'table',
	          { className: 'skills__table' },
	          _react2.default.createElement(
	            'tbody',
	            null,
	            _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement('td', null),
	              _react2.default.createElement(
	                'td',
	                { className: 'table__legend' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'threshold' },
	                  'Newbie'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'threshold' },
	                  'Experienced'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'threshold' },
	                  'Confirmed'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'threshold' },
	                  'Not bad'
	                )
	              )
	            ),
	            this.state.skills.map(function (item, key) {
	              var barStyle = _this2.state.trigger ? { width: item.value + '%', transitionDelay: '0.' + key % 3 + 's' } : { width: '0%' };
	              return _react2.default.createElement(
	                'tr',
	                { key: key, className: 'content-text' },
	                _react2.default.createElement(
	                  'td',
	                  { className: 'table__item' },
	                  item.techno
	                ),
	                _react2.default.createElement(
	                  'td',
	                  { className: 'table__item' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'progress' },
	                    _react2.default.createElement('div', { className: 'bar', style: Object.assign(barStyle, _this2.state.barStyle) })
	                  )
	                )
	              );
	            })
	          )
	        ) : _react2.default.createElement(
	          'div',
	          { className: 'content content-text' },
	          'Oh no ! All my skills have disappeared ! '
	        )
	      );
	    }
	  }]);

	  return Skills;
	}(_react.Component);

	exports.default = Skills;

/***/ },
/* 244 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(246);

	var _Text = __webpack_require__(247);

	var _Text2 = _interopRequireDefault(_Text);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Experience = function (_Component) {
	  _inherits(Experience, _Component);

	  function Experience(props) {
	    _classCallCheck(this, Experience);

	    var _this = _possibleConstructorReturn(this, (Experience.__proto__ || Object.getPrototypeOf(Experience)).call(this, props));

	    _this.state = props.data;
	    return _this;
	  }

	  _createClass(Experience, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'experience' },
	        _react2.default.createElement(
	          'div',
	          { className: 'header' },
	          _react2.default.createElement(
	            'h4',
	            { className: 'title jobTitle' },
	            this.state.title
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'duration' },
	            _react2.default.createElement(
	              'div',
	              { className: 'duration--from' },
	              'From: ',
	              this.state.duration.from
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'div',
	              { className: 'duration--to' },
	              'To: ',
	              this.state.duration.to || 'still going !'
	            )
	          )
	        ),
	        _react2.default.createElement('div', { className: 'separator' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'description' },
	          _react2.default.createElement(
	            _Text2.default,
	            null,
	            this.state.text
	          )
	        )
	      );
	    }
	  }]);

	  return Experience;
	}(_react.Component);

	exports.default = Experience;

/***/ },
/* 246 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Text = function (_Component) {
	  _inherits(Text, _Component);

	  function Text(props) {
	    _classCallCheck(this, Text);

	    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));
	  }

	  _createClass(Text, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.children.split('\\n').map(function (item, key) {
	          return _react2.default.createElement(
	            'span',
	            { key: key },
	            item,
	            _react2.default.createElement('br', null)
	          );
	        })
	      );
	    }
	  }]);

	  return Text;
	}(_react.Component);

	exports.default = Text;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ARTLogics.png";

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "sopra.jpeg";

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "logo-omnilog.png";

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "venice_desktop.jpg";

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 254 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 255 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);