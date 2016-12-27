module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	__webpack_require__.p = "http://127.0.0.1:3001/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************!*\
  !*** /Users/Admin/website2/frontend/assets/images/icon/cat_64x64.png ***!
  \***********************************************************************/
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ },
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** external "react-isomorphic-render" ***!
  \******************************************/
/***/ function(module, exports) {

module.exports = require("react-isomorphic-render");

/***/ },
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ function(module, exports) {

module.exports = require("react-router");

/***/ },
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ../code/client/react-isomorphic-render.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {"use strict";
var routes_1 = __webpack_require__(/*! ./routes */ 13);
var wrapper_1 = __webpack_require__(/*! ./wrapper */ 14);
exports.__esModule = true;
exports["default"] = {
    reducer: function () { return __webpack_require__(/*! ./_reducer */ 8); },
    routes: routes_1["default"],
    wrapper: wrapper_1["default"],
    on_store_created: function (_a) {
        var reload_reducer = _a.reload_reducer;
        if (_development_ && module["hot"]) {
            module["hot"]["accept"]('./_reducer', reload_reducer);
        }
    }
};
//# sourceMappingURL=react-isomorphic-render.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 16)(module)))

/***/ },
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** external "react-isomorphic-render/server" ***!
  \*************************************************/
/***/ function(module, exports) {

module.exports = require("react-isomorphic-render/server");

/***/ },
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** external "universal-log" ***!
  \********************************/
/***/ function(module, exports) {

module.exports = require("universal-log");

/***/ },
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ../code/client/_reducer/index.js ***!
  \****************************************/
/***/ function(module, exports) {

//# sourceMappingURL=index.js.map

/***/ },
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ../code/client/components/menu.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(/*! react */ 0);
var react_1 = __webpack_require__(/*! react */ 0);
var react_router_1 = __webpack_require__(/*! react-router */ 3);
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var _this = this;
        var markup = (React.createElement("ul", { className: "menu" },
            " ",
            this.props.items.map(function (item, i) {
                return React.createElement("li", { key: i }, _this.render_link(item));
            })));
        return markup;
    };
    Menu.prototype.render_link = function (item) {
        if (item.link === '/') {
            return React.createElement(react_router_1.IndexLink, { to: item.link, activeClassName: "menu-item-selected", className: "menu-item" }, item.name);
        }
        return React.createElement(react_router_1.Link, { to: item.link, activeClassName: "menu-item-selected", className: "menu-item" }, item.name);
    };
    return Menu;
}(react_1.Component));
exports.__esModule = true;
exports["default"] = Menu;
//# sourceMappingURL=menu.js.map

/***/ },
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ../code/client/pages/home.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(/*! react */ 0);
var react_1 = __webpack_require__(/*! react */ 0);
var react_isomorphic_render_1 = __webpack_require__(/*! react-isomorphic-render */ 2);
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super.apply(this, arguments) || this;
    }
    HomePage.prototype.render = function () {
        var husky = __webpack_require__(/*! ../../../../assets/images/husky.jpg */ 15);
        var markup = (React.createElement("section", { className: "content" },
            React.createElement("span", null, react_isomorphic_render_1.title("Home")),
            React.createElement("h1", null, "Husky"),
            React.createElement("img", { src: husky })));
        return markup;
    };
    return HomePage;
}(react_1.Component));
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map

/***/ },
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ../code/client/pages/layout.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(/*! react */ 0);
var react_1 = __webpack_require__(/*! react */ 0);
var react_isomorphic_render_1 = __webpack_require__(/*! react-isomorphic-render */ 2);
var menu_1 = __webpack_require__(/*! ../components/menu */ 9);
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        var title = 'WebApp';
        var description = 'A generic web application boilerplate';
        var meta = [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
            { property: 'og:title', content: 'Matthew Whitt Portfolio' },
            { property: 'og:description', content: 'Collected works of Matthew Whitt, Software Engineer and Web Developer' },
            { property: 'og:locale', content: 'en-US' },
        ];
        var menu_items = [
            { name: 'Home', link: '/' },
        ];
        var markup = (React.createElement("div", { className: "content" },
            React.createElement("span", null, react_isomorphic_render_1.head(title, meta)),
            React.createElement("header", null,
                React.createElement("nav", null,
                    React.createElement(menu_1["default"], { items: menu_items }))),
            this.props.children,
            React.createElement("footer", null)));
        return markup;
    };
    return Layout;
}(react_1.Component));
Layout.propTypes = {
    children: react_1.PropTypes.object.isRequired
};
exports.Layout = Layout;
//# sourceMappingURL=layout.js.map

/***/ },
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ../code/client/pages/not found.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(/*! react */ 0);
var react_1 = __webpack_require__(/*! react */ 0);
var react_isomorphic_render_1 = __webpack_require__(/*! react-isomorphic-render */ 2);
var Not_found = (function (_super) {
    __extends(Not_found, _super);
    function Not_found() {
        return _super.apply(this, arguments) || this;
    }
    Not_found.prototype.render = function () {
        var markup = (React.createElement("div", null,
            React.createElement("span", null, react_isomorphic_render_1.title("Page not found")),
            React.createElement("h1", null, "Page not found")));
        return markup;
    };
    return Not_found;
}(react_1.Component));
exports.Not_found = Not_found;
//# sourceMappingURL=not found.js.map

/***/ },
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ../code/client/routes.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var React = __webpack_require__(/*! react */ 0);
var react_router_1 = __webpack_require__(/*! react-router */ 3);
var layout_1 = __webpack_require__(/*! ./pages/layout */ 11);
var not_found_1 = __webpack_require__(/*! ./pages/not found */ 12);
var home_1 = __webpack_require__(/*! ./pages/home */ 10);
function default_1() {
    var routes = (React.createElement(react_router_1.Route, { path: "/", component: layout_1.Layout },
        React.createElement(react_router_1.IndexRoute, { component: home_1.HomePage }),
        React.createElement(react_router_1.Route, { path: "*", component: not_found_1.Not_found })));
    return routes;
}
exports.__esModule = true;
exports["default"] = default_1;
//# sourceMappingURL=routes.js.map

/***/ },
/* 14 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ../code/client/wrapper.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(/*! react */ 0);
var react_1 = __webpack_require__(/*! react */ 0);
var react_redux_1 = __webpack_require__(/*! react-redux */ 17);
var Wrapper = (function (_super) {
    __extends(Wrapper, _super);
    function Wrapper() {
        return _super.apply(this, arguments) || this;
    }
    Wrapper.prototype.render = function () {
        var store = this.props.store;
        var markup = (React.createElement(react_redux_1.Provider, { store: store }, this.props.children));
        return markup;
    };
    return Wrapper;
}(react_1.Component));
Wrapper.propTypes = {
    store: React.PropTypes.object.isRequired
};
exports.__esModule = true;
exports["default"] = Wrapper;
//# sourceMappingURL=wrapper.js.map

/***/ },
/* 15 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************************!*\
  !*** /Users/Admin/website2/frontend/assets/images/husky.jpg ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9059f094ddb49c2b0fa6a254a6ebf2ad.jpg";

/***/ },
/* 16 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function() { return module.l; }
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function() { return module.i; }
		});
		module.webpackPolyfill = 1;
	}
	return module;
}


/***/ },
/* 17 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ function(module, exports) {

module.exports = require("react-redux");

/***/ },
/* 18 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ../code/servers/page-server/server.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var server_1 = __webpack_require__(/*! react-isomorphic-render/server */ 6);
var react_isomorphic_render_1 = __webpack_require__(/*! ../../client/react-isomorphic-render */ 4);
var universal_log_1 = __webpack_require__(/*! universal-log */ 7);
;
var _ = __webpack_require__(/*! lodash */ 5);
var log = new universal_log_1.UniversalLog({ appName: "webpage renderer" });
function default_1(parameters) {
    var server = server_1["default"]({
        assets: function (url) {
            var result = _.clone(parameters.chunks());
            result.entry = 'main';
            if (_development_) {
                delete __webpack_require__.c[/*require.resolve*/(/*! ../../../../assets/images/icon/cat_64x64.png */ 1)];
            }
            result.icon = __webpack_require__(/*! ../../../../assets/images/icon/cat_64x64.png */ 1);
            return result;
        },
        application: {
            host: configuration.web_server.http.host,
            port: configuration.web_server.http.port
        },
        html: {}
    }, react_isomorphic_render_1["default"]);
    server.listen(configuration.webpage_server.http.port, function (error) {
        if (error) {
            log.error('Webpage rendering server shutdown due to an error', error);
            throw error;
        }
        log.info("Webpage server is listening at http://localhost:" + configuration.webpage_server.http.port);
    });
}
exports.__esModule = true;
exports["default"] = default_1;
//# sourceMappingURL=server.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map