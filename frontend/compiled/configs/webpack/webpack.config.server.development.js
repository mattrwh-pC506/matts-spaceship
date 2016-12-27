"use strict";
var webpack_config_server_1 = require("./webpack.config.server");
var configuration_1 = require("../configuration");
var _ = require("lodash");
var configuration = _.clone(webpack_config_server_1["default"]);
configuration.output.publicPath = "http://" + configuration_1["default"].development.webpack.development_server.host + ":" + configuration_1["default"].development.webpack.development_server.port + configuration.output.publicPath;
exports.__esModule = true;
exports["default"] = configuration;
//# sourceMappingURL=webpack.config.server.development.js.map