"use strict";
var express_1 = require("express");
var webpack = require("webpack");
var webpack_config_client_development_1 = require("./webpack.config.client.development");
var webpack_dev_middleware_1 = require("webpack-dev-middleware");
var webpack_hot_middleware_1 = require("webpack-hot-middleware");
var configuration_1 = require("../configuration");
var development_server_options = {
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpack_config_client_development_1["default"].output.publicPath,
    headers: { "Access-Control-Allow-Origin": "*" },
    stats: { colors: true }
};
var compiler = webpack(webpack_config_client_development_1["default"]);
var development_server = new express_1();
development_server.use(webpack_dev_middleware_1(compiler, development_server_options));
development_server.use(webpack_hot_middleware_1(compiler));
development_server.listen(configuration_1["default"].development.webpack.development_server.port, function (error) {
    if (error) {
        console.error(error.stack || error);
        throw error;
    }
    console.log('[webpack-dev-server] Running');
});
//# sourceMappingURL=webpack-dev-server.js.map