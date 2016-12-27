"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var react_isomorphic_render_1 = require("react-isomorphic-render");
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super.apply(this, arguments) || this;
    }
    HomePage.prototype.render = function () {
        var husky = require('../../../../assets/images/husky.jpg');
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