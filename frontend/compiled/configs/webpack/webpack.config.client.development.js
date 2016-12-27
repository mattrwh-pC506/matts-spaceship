"use strict";
var webpack = require("webpack");
var webpack_config_client_1 = require("./webpack.config.client");
var configuration_1 = require("../configuration");
var configuration = webpack_config_client_1["default"]({ development: true, css_bundle: true });
configuration.devtool = 'inline-eval-cheap-source-map';
configuration.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('development')
    },
    _production_: false,
    _development_: true,
    _development_tools_: false
}), new webpack.HotModuleReplacementPlugin());
configuration.entry.main = [
    "webpack-hot-middleware/client?path=http://" + configuration_1["default"].development.webpack.development_server.host + ":" + configuration_1["default"].development.webpack.development_server.port + "/__webpack_hmr",
    configuration.entry.main,
];
configuration.output.publicPath = "http://" + configuration_1["default"].development.webpack.development_server.host + ":" + configuration_1["default"].development.webpack.development_server.port + configuration.output.publicPath;
var webpack_client_dev_config = configuration;
exports.__esModule = true;
exports["default"] = webpack_client_dev_config;
//# sourceMappingURL=webpack.config.client.development.js.map