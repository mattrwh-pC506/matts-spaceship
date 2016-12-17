"use strict";
var react_1 = require("react");
var react_router_1 = require("react-router");
var layout_1 = require("./pages/layout");
var not_found_1 = require("./pages/not found");
var home_1 = require("./pages/home");
function default_1() {
    var routes = (react_1.React.createElement(react_router_1.Route, { path: "/", component: layout_1.Layout },
        react_1.React.createElement(react_router_1.IndexRoute, { component: home_1.Home }),
        react_1.React.createElement(react_router_1.Route, { path: "*", component: not_found_1.Not_found })));
    return routes;
}
exports.__esModule = true;
exports["default"] = default_1;
//# sourceMappingURL=routes.js.map