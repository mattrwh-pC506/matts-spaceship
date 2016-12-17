"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var react_1 = require("react");
var react_isomorphic_render_1 = require("react-isomorphic-render");
var menu_1 = require("../components/menu");
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
        var markup = (react_1["default"].createElement("div", { className: "content" },
            react_1["default"].createElement("span", null, react_isomorphic_render_1.head(title, meta)),
            react_1["default"].createElement("header", null,
                react_1["default"].createElement(menu_1["default"], { items: menu_items })),
            this.props.children,
            react_1["default"].createElement("footer", null)));
        return markup;
    };
    return Layout;
}(react_1.Component));
Layout.propTypes = {
    children: react_1.PropTypes.object.isRequired
};
exports.__esModule = true;
exports["default"] = Layout;
//# sourceMappingURL=layout.js.map