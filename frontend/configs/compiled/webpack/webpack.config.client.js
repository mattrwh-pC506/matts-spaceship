"use strict";
var universal_webpack_1 = require("universal-webpack");
var universal_webpack_settings_1 = require("./universal-webpack-settings");
var webpack_config_1 = require("./webpack.config");
function default_1(options) {
    return universal_webpack_1.client_configuration(webpack_config_1["default"], universal_webpack_settings_1["default"], options);
}
exports.__esModule = true;
exports["default"] = default_1;
//# sourceMappingURL=webpack.config.client.js.map