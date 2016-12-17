"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var react_1 = require("react");
var react_isomorphic_render_1 = require("react-isomorphic-render");
var Not_found = (function (_super) {
    __extends(Not_found, _super);
    function Not_found() {
        return _super.apply(this, arguments) || this;
    }
    Not_found.prototype.render = function () {
        var markup = (react_1["default"].createElement("div", null,
            react_1["default"].createElement("span", null, react_isomorphic_render_1.title("Page not found")),
            react_1["default"].createElement("h1", null, "Page not found")));
        return markup;
    };
    return Not_found;
}(react_1.Component));
exports.__esModule = true;
exports["default"] = Not_found;
//# sourceMappingURL=not found.js.map