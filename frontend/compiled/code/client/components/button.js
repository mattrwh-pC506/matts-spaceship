"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, busy = _a.busy, on_click = _a.on_click, text = _a.text;
        var markup = (React.createElement("div", null,
            React.createElement("span", { className: "spinner" }),
            React.createElement("button", { disabled: busy, onClick: on_click }, text)));
        return markup;
    };
    return Button;
}(react_1.Component));
Button.propTypes = {
    text: react_1.PropTypes.string.isRequired,
    on_click: react_1.PropTypes.func.isRequired,
    busy: react_1.PropTypes.bool
};
exports.__esModule = true;
exports["default"] = Button;
//# sourceMappingURL=button.js.map