"use strict";
var redux_1 = require("react-isomorphic-render/redux");
var react_isomorphic_render_1 = require("./react-isomorphic-render");
require('../../../assets/styles/style.scss');
redux_1.render({
    development: _development_,
    devtools: _development_tools_ ? require('./devtools') : undefined
}, react_isomorphic_render_1["default"]);
//# sourceMappingURL=application.js.map