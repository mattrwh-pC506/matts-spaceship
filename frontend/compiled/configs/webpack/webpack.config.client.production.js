"use strict";
var path = require("path");
var webpack_1 = require("webpack");
var webpack_config_client_1 = require("./webpack.config.client");
var clean_webpack_plugin_1 = require("clean-webpack-plugin");
var configuration = webpack_config_client_1["default"]({ development: false });
configuration.devtool = 'source-map';
configuration.plugins = configuration.plugins.concat(new clean_webpack_plugin_1["default"]([path.relative(configuration.context, configuration.output.path)], { root: configuration.context }), new webpack_1["default"].DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    },
    _development_: false,
    _production_: true,
    _development_tools_: false
}), new webpack_1["default"].optimize.DedupePlugin(), new webpack_1["default"].optimize.OccurenceOrderPlugin(), new webpack_1["default"].optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}));
exports.__esModule = true;
exports["default"] = configuration;
//# sourceMappingURL=webpack.config.client.production.js.map