"use strict";
var path = require("path");
var web_service_1 = require("web-service");
var web = web_service_1["default"]({ log: log });
web.files('/assets', path.join(Root_folder, 'build', 'assets'));
web.proxy('/api', "http://" + configuration.api_server.http.host + ":" + configuration.api_server.http.port, { name: 'API service' });
web.proxy("http://" + configuration.webpage_server.http.host + ":" + configuration.webpage_server.http.port, { name: 'Page rendering service' });
web.listen(configuration.web_server.http.port).then(function () {
    log.info("Web server is listening");
    log.info("Now go to http://" + configuration.web_server.http.host + ":" + configuration.web_server.http.port);
}, function (error) {
    log.error(error);
});
//# sourceMappingURL=server.js.map