"use strict";
var minimist = require("minimist");
var path = require("path");
var configuration_1 = require("../../configs/configuration");
global["Root_folder"] = path.resolve(__dirname, '..', '..');
var command_line_arguments = minimist(process.argv.slice(2));
global["_production_"] = command_line_arguments.production;
global["_development_"] = command_line_arguments.development || process.env.NODE_ENV === 'development';
global["configuration"] = configuration_1["default"];
//# sourceMappingURL=entry.js.map