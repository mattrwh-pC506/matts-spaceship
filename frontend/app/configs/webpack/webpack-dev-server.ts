import * as express_1 from "express";
import * as webpack from "webpack";
import webpack_client_dev_config from "./webpack.config.client.development";
import * as _ from 'lodash';
import * as webpack_dev_middleware_1 from 'webpack-dev-middleware';
import * as webpack_hot_middleware_1 from 'webpack-hot-middleware';
import application_configuration from '../configuration';


var development_server_options = {
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpack_client_dev_config.output.publicPath,
    headers: { "Access-Control-Allow-Origin": "*" },
    stats: { colors: true }
};
var compiler = webpack(webpack_client_dev_config);
var development_server = new express_1();
development_server.use(webpack_dev_middleware_1(compiler, development_server_options));
development_server.use(webpack_hot_middleware_1(compiler));
development_server.listen(application_configuration.development.webpack.development_server.port, function(error) {
    if (error) {
        console.error(error.stack || error);
        throw error;
    }
    console.log('[webpack-dev-server] Running');
});
//# sourceMappingURL=webpack-dev-server.js.map
