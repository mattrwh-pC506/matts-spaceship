"use strict";
var routes_1 = require("./routes");
var wrapper_1 = require("./wrapper");
exports.__esModule = true;
exports["default"] = {
    reducer: function () { return require('./_reducer'); },
    routes: routes_1["default"],
    wrapper: wrapper_1["default"],
    on_store_created: function (_a) {
        var reload_reducer = _a.reload_reducer;
        if (_development_ && module.hot) {
            module.hot.accept('./_reducer', reload_reducer);
        }
    }
};
//# sourceMappingURL=react-isomorphic-render.js.map