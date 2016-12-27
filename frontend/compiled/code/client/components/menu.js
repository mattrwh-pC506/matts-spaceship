"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var react_router_1 = require("react-router");
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