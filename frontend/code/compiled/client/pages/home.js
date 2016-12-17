"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var react_1 = require("react");
var react_isomorphic_render_1 = require("react-isomorphic-render");
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super.apply(this, arguments) || this;
    }
    Page.prototype.render = function () {
        var husky = require('../../../assets/images/husky.jpg');
        var markup = (react_1["default"].createElement("section", { className: "content" },
            react_1["default"].createElement("span", null, react_isomorphic_render_1.title("Home")),
            react_1["default"].createElement("h1", null, "Husky"),
            react_1["default"].createElement("img", { src: husky })));
        return markup;
    };
    return Page;
}(react_1.Component));
exports.__esModule = true;
exports["default"] = Page;
//# sourceMappingURL=home.js.map