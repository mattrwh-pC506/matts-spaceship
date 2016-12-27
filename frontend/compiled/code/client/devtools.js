"use strict";
var React = require("react");
var redux_devtools_1 = require("redux-devtools");
var redux_devtools_log_monitor_1 = require("redux-devtools-log-monitor");
var redux_devtools_dock_monitor_1 = require("redux-devtools-dock-monitor");
exports.__esModule = true;
exports["default"] = {
    component: redux_devtools_1.createDevTools(React.createElement(redux_devtools_dock_monitor_1["default"], { toggleVisibilityKey: "ctrl-H", changePositionKey: "ctrl-Q", defaultIsVisible: true },
        React.createElement(redux_devtools_log_monitor_1["default"], { theme: "tomorrow" }))),
    persistState: redux_devtools_1.persistState
};
//# sourceMappingURL=devtools.js.map