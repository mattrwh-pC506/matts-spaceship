"use strict";
var server_1 = require("react-isomorphic-render/server");
var react_isomorphic_render_1 = require("../client/react-isomorphic-render");
var universal_log_1 = require("universal-log");
;
var _ = require("lodash");
var log = new universal_log_1.UniversalLog({ appName: "webpage renderer" });
function default_1(parameters) {
    var server = server_1["default"]({
        assets: function (url) {
            var result = _.clone(parameters.chunks());
            result.entry = 'main';
            if (_development_) {
                delete require.cache[require.resolve('../../assets/images/icon/cat_64x64.png')];
            }
            result.icon = require('../../assets/images/icon/cat_64x64.png');
            return result;
        },
        application: {
            host: configuration.web_server.http.host,
            port: configuration.web_server.http.port
        },
        html: {}
    }, react_isomorphic_render_1["default"]);
    server.listen(configuration.webpage_server.http.port, function (error) {
        if (error) {
            log.error('Webpage rendering server shutdown due to an error', error);
            throw error;
        }
        log.info("Webpage server is listening at http://localhost:" + configuration.webpage_server.http.port);
    });
}
exports.__esModule = true;
exports["default"] = default_1;
//# sourceMappingURL=server.js.map