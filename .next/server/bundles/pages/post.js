module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_youtube_api_search__ = __webpack_require__("youtube-api-search");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_youtube_api_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_youtube_api_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_searchbar__ = __webpack_require__("./pages/searchbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_videolist__ = __webpack_require__("./pages/videolist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_videodetail__ = __webpack_require__("./pages/videodetail.js");
var _jsxFileName = "/Users/wendykelly/new_dropbox/Dropbox/wkktoday/comps/header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var API_KEY = 'AIzaSyA3ri90luC7rwLAzBp8sjwCTL3rdZVAK3I';
var linkStyle = {
  marginRight: 15
};

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    _this.state = {
      videos: [],
      selectedVideo: null
    };

    _this.videoSearch('surfboards');

    return _this;
  }

  _createClass(Header, [{
    key: "videoSearch",
    value: function videoSearch(term) {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_4_youtube_api_search___default()({
        key: API_KEY,
        term: term
      }, function (videos) {
        _this2.setState({
          videos: videos,
          selectedVideo: videos[0]
        }); //clean up: if key and variable are same -- instead of videos: videos

      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var videoSearch = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.debounce(function (term) {
        _this3.videoSearch(term);
      }, 300);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__pages_searchbar__["a" /* default */], {
        onSearchTermChange: videoSearch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__pages_videodetail__["a" /* default */], {
        video: this.state.selectedVideo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__pages_videolist__["a" /* default */], {
        onVideoSelect: function onVideoSelect(selectedVideo) {
          return _this3.setState({
            selectedVideo: selectedVideo
          });
        },
        videos: this.state.videos,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "About")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "App")));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./comps/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__("./comps/header.js");
var _jsxFileName = "/Users/wendykelly/new_dropbox/Dropbox/wkktoday/comps/layout.js";


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comps_layout_js__ = __webpack_require__("./comps/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_markdown__ = __webpack_require__("react-markdown");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_markdown__);

var _jsxFileName = "/Users/wendykelly/new_dropbox/Dropbox/wkktoday/pages/post.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var Post = function Post(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__comps_layout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.show.gender), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.show.email));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, res, show;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()("https://randomuser.me/api/?results=50&nat=us,dk,fr,gb".concat(id));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;
            console.log("Fetched show: ".concat(show.gender));
            return _context.abrupt("return", {
              show: show
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./pages/searchbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/wendykelly/new_dropbox/Dropbox/wkktoday/pages/searchbar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 //refactoring using arrow -- interesting.

var SearchBar =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));
    _this.state = {
      term: 'Hello!'
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-75814779" + " " + "search-bar"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        value: this.state.term,
        onChange: function onChange(event) {
          return _this2.onInputChange(event.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-75814779"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "75814779",
        css: ".search-bar.jsx-75814779{margin:20px;text-align:center;}search-bar.jsx-75814779 input.jsx-75814779{width:75%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjaUIsQUFHb0IsQUFLRixVQUNaLEVBTG9CLGtCQUNwQiIsImZpbGUiOiJwYWdlcy9zZWFyY2hiYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3dlbmR5a2VsbHkvbmV3X2Ryb3Bib3gvRHJvcGJveC93a2t0b2RheSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vL3JlZmFjdG9yaW5nIHVzaW5nIGFycm93IC0tIGludGVyZXN0aW5nLlxuY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyB0ZXJtOiAnSGVsbG8hJ307XG4gIH1cbiAgIHJlbmRlcigpIHtcbiAgICAgcmV0dXJuIChcbjxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiPlxuICAgICA8aW5wdXRcbiAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGVybX1cbiAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMub25JbnB1dENoYW5nZShldmVudC50YXJnZXQudmFsdWUpfSAvPlxuXG4gICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIH1cblxuICAgICBzZWFyY2gtYmFyIGlucHV0IHtcbiAgICAgICB3aWR0aDogNzUlO1xuICAgICB9XG4gICAgIGB9PC9zdHlsZT5cbjwvZGl2PlxuXG5cblxuKTtcbiAgIH1cbm9uSW5wdXRDaGFuZ2UodGVybSkge1xuICB0aGlzLnNldFN0YXRlKHt0ZXJtfSk7XG4gIHRoaXMucHJvcHMub25TZWFyY2hUZXJtQ2hhbmdlKHRlcm0pO1xufVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuIl19 */\n/*@ sourceURL=pages/searchbar.js */"
      }));
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(term) {
      this.setState({
        term: term
      });
      this.props.onSearchTermChange(term);
    }
  }]);

  return SearchBar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ }),

/***/ "./pages/videodetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/wendykelly/new_dropbox/Dropbox/wkktoday/pages/videodetail.js";



var VideoDetail = function VideoDetail(_ref) {
  var video = _ref.video;

  if (!video) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    }, "Loading...");
  }

  var videoId = video.id.videoId;
  var url = "https://www.youtube.com/embed/ ".concat(videoId);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2071878953" + " " + "video-detail col-md-8"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2548673830",
    css: ".video-detail.jsx-2071878953 .details.jsx-2071878953{margin-top:10px;padding:10px;border:1px solid #ddd;border-radius:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ZpZGVvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVlLEFBR3dCLGdCQUNILGFBQ1Msc0JBQ0osa0JBQ3BCIiwiZmlsZSI6InBhZ2VzL3ZpZGVvZGV0YWlsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93ZW5keWtlbGx5L25ld19kcm9wYm94L0Ryb3Bib3gvd2trdG9kYXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBWaWRlb0RldGFpbCA9ICh7dmlkZW99KSA9PiB7XG4gIGlmICghdmlkZW8pIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIGNvbnN0IHZpZGVvSWQgPSB2aWRlby5pZC52aWRlb0lkO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvICR7dmlkZW9JZH1gO1xuIHJldHVybiAoXG4gICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWRldGFpbCBjb2wtbWQtOFwiPlxuICAgPHN0eWxlIGpzeD57YFxuICAgICAudmlkZW8tZGV0YWlsIC5kZXRhaWxzIHtcbiAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgIH1cblxuICAgICBgfTwvc3R5bGU+XG4gICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICA8aWZyYW1lIGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNlaXZlLWl0ZW1cIiBzcmM9e3VybH0+PC9pZnJhbWU+XG48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuXG48ZGl2PiB7dmlkZW8uc25pcHBldC50aXRsZX08L2Rpdj5cbjxkaXY+IHt2aWRlby5zbmlwcGV0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgPC9kaXY+XG4gICA8c3R5bGUganN4PntgXG4gICAgIC52aWRlby1kZXRhaWwgLmRldGFpbHMge1xuICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgfVxuXG4gICAgIGB9PC9zdHlsZT5cblxuICAgPC9kaXY+XG4gKVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlb0RldGFpbDtcbiJdfQ== */\n/*@ sourceURL=pages/videodetail.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-2071878953" + " " + "embed-responsive embed-responsive-16by9"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("iframe", {
    src: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-2071878953" + " " + "embed-responseive-item"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    className: "jsx-2071878953" + " " + "details"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-2071878953"
  }, " ", video.snippet.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-2071878953"
  }, " ", video.snippet.description)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2548673830",
    css: ".video-detail.jsx-2071878953 .details.jsx-2071878953{margin-top:10px;padding:10px;border:1px solid #ddd;border-radius:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ZpZGVvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZSxBQUd3QixnQkFDSCxhQUNTLHNCQUNKLGtCQUNwQiIsImZpbGUiOiJwYWdlcy92aWRlb2RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2VuZHlrZWxseS9uZXdfZHJvcGJveC9Ecm9wYm94L3dra3RvZGF5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVmlkZW9EZXRhaWwgPSAoe3ZpZGVvfSkgPT4ge1xuICBpZiAoIXZpZGVvKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuICBjb25zdCB2aWRlb0lkID0gdmlkZW8uaWQudmlkZW9JZDtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyAke3ZpZGVvSWR9YDtcbiByZXR1cm4gKFxuICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1kZXRhaWwgY29sLW1kLThcIj5cbiAgIDxzdHlsZSBqc3g+e2BcbiAgICAgLnZpZGVvLWRldGFpbCAuZGV0YWlscyB7XG4gICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICB9XG5cbiAgICAgYH08L3N0eWxlPlxuICAgPGRpdiBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj5cbiAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zZWl2ZS1pdGVtXCIgc3JjPXt1cmx9PjwvaWZyYW1lPlxuPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cblxuPGRpdj4ge3ZpZGVvLnNuaXBwZXQudGl0bGV9PC9kaXY+XG48ZGl2PiB7dmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgIDwvZGl2PlxuICAgPHN0eWxlIGpzeD57YFxuICAgICAudmlkZW8tZGV0YWlsIC5kZXRhaWxzIHtcbiAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgIH1cblxuICAgICBgfTwvc3R5bGU+XG5cbiAgIDwvZGl2PlxuIClcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9EZXRhaWw7XG4iXX0= */\n/*@ sourceURL=pages/videodetail.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (VideoDetail);

/***/ }),

/***/ "./pages/videolist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videolistitem__ = __webpack_require__("./pages/videolistitem.js");
var _jsxFileName = "/Users/wendykelly/new_dropbox/Dropbox/wkktoday/pages/videolist.js";




var VideoList = function VideoList(props) {
  var videoItems = props.videos.map(function (video) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__videolistitem__["a" /* default */], {
      onVideoSelect: props.onVideoSelect,
      key: video.etag,
      video: video,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    });
  });
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-2370725780" + " " + "col-md-4 list-group"
  }, videoItems, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2370725780",
    css: "video-item.jsx-2370725780 img.jsx-2370725780{max-width:64px;}list-group-item.jsx-2370725780{cursor:pointer;}list-group-item.jsx-2370725780:hover{background-color:#eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ZpZGVvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmdCLEFBSTBCLEFBS0EsQUFJTyxlQVJ4QixBQUtBLE9BSUEiLCJmaWxlIjoicGFnZXMvdmlkZW9saXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93ZW5keWtlbGx5L25ld19kcm9wYm94L0Ryb3Bib3gvd2trdG9kYXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFZpZGVvTGlzdEl0ZW0gZnJvbSAnLi92aWRlb2xpc3RpdGVtJztcblxuY29uc3QgVmlkZW9MaXN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHZpZGVvSXRlbXMgPSBwcm9wcy52aWRlb3MubWFwKCh2aWRlbykgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxWaWRlb0xpc3RJdGVtXG4gICAgb25WaWRlb1NlbGVjdD17cHJvcHMub25WaWRlb1NlbGVjdH1cbiAgICBrZXk9e3ZpZGVvLmV0YWd9XG4gICAgdmlkZW89e3ZpZGVvfSAvPlxuKTtcbiAgfSk7XG4gIHJldHVybiAoXG5cbiAgICA8dWwgY2xhc3NOYW1lPVwiY29sLW1kLTQgbGlzdC1ncm91cFwiPlxuICAgIHt2aWRlb0l0ZW1zfVxuXG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIHZpZGVvLWl0ZW0gaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY0cHg7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICB9XG4gIGB9PC9zdHlsZT5cbiAgICA8L3VsPlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9MaXN0XG4iXX0= */\n/*@ sourceURL=pages/videolist.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (VideoList);

/***/ }),

/***/ "./pages/videolistitem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/wendykelly/new_dropbox/Dropbox/wkktoday/pages/videolistitem.js";



var VideoListItem = function VideoListItem(_ref) {
  var video = _ref.video,
      onVideoSelect = _ref.onVideoSelect;
  var imageUrl = video.snippet.thumbnails.default.url; // can just declare above in (props) change to video const video = props.video;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    onClick: function onClick() {
      return onVideoSelect(video);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2186584794" + " " + "list-group-item"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-2186584794" + " " + "video-list media"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2186584794" + " " + "media-left"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: imageUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-2186584794" + " " + "media-object"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-2186584794" + " " + "media-body"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-2186584794" + " " + "media-heading"
  }, video.snippet.title))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2186584794",
    css: ".video-item.jsx-2186584794 img.jsx-2186584794{max-width:64px;}.video-detail.jsx-2186584794 .details.jsx-2186584794{margin-top:10px;padding:10px;border:1px solid #ddd;border-radius:4px;}.list-group-item.jsx-2186584794{cursor:pointer;}.list-group-item.jsx-2186584794:hover{background-color:#eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ZpZGVvbGlzdGl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JjLEFBR29CLEFBSUMsQUFPRCxBQUlPLGVBZHhCLEFBV0EsQ0FQZSxNQVdmLE9BVndCLHNCQUNKLGtCQUNwQiIsImZpbGUiOiJwYWdlcy92aWRlb2xpc3RpdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93ZW5keWtlbGx5L25ld19kcm9wYm94L0Ryb3Bib3gvd2trdG9kYXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBWaWRlb0xpc3RJdGVtID0gKHt2aWRlbywgb25WaWRlb1NlbGVjdH0pID0+IHtcbiAgIGNvbnN0IGltYWdlVXJsID0gdmlkZW8uc25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsO1xuXG4gIC8vIGNhbiBqdXN0IGRlY2xhcmUgYWJvdmUgaW4gKHByb3BzKSBjaGFuZ2UgdG8gdmlkZW8gY29uc3QgdmlkZW8gPSBwcm9wcy52aWRlbztcbiAgcmV0dXJuIChcbiAgPGxpIG9uQ2xpY2s9eygpID0+IG9uVmlkZW9TZWxlY3QodmlkZW8pfSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QgbWVkaWFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdFwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz17aW1hZ2VVcmx9IC8+XG4gIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj57dmlkZW8uc25pcHBldC50aXRsZX08L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8c3R5bGUganN4PntgXG4gIC52aWRlby1pdGVtIGltZyB7XG4gICAgbWF4LXdpZHRoOiA2NHB4O1xuICB9XG5cbiAgLnZpZGVvLWRldGFpbCAuZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5cbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgfVxuICBgfTwvc3R5bGU+XG4gIDwvbGk+XG5cblxuKTtcbn07XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvTGlzdEl0ZW07XG4iXX0= */\n/*@ sourceURL=pages/videolistitem.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (VideoListItem);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/post.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-markdown":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "youtube-api-search":
/***/ (function(module, exports) {

module.exports = require("youtube-api-search");

/***/ })

/******/ });
//# sourceMappingURL=post.js.map