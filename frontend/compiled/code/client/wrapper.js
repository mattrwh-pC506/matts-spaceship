"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
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