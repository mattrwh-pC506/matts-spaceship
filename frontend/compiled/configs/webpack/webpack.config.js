"use strict";
var path = require("path");
var webpack = require("webpack");
var autoprefixer = require("autoprefixer/lib/autoprefixer");
var root_folder = path.resolve(__dirname, '..');
var assets_source_folder = path.resolve(root_folder, 'assets');
var configuration = {
    context: root_folder,
    entry: {
        main: '../../compiled/code/client/application.entry.js'
    },
    output: {
        path: path.resolve(root_folder, 'build/assets'),
        publicPath: '/assets/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=2&sourceMap',
                    'postcss-loader',
                    'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
                ]
            },
            {
                test: /\.(jpg|png)$/,
                loaders: [
                    'url-loader?limit=10000'
                ]
            }
        ]
    },
    plugins: []
};
configuration.plugins.push(new webpack.LoaderOptionsPlugin({
    test: /\.scss$/,
    options: {
        output: {
            path: configuration.output.path
        },
        postcss: [autoprefixer({ browsers: 'last 2 version' })],
        context: configuration.context
    }
}));
exports.__esModule = true;
exports["default"] = configuration;
//# sourceMappingURL=webpack.config.js.map