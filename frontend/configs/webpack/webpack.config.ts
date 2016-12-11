import * as path from "path";
import * as webpack from "webpack";
import * as autoprefixer from "autoprefixer";


// project folder
const root_folder = path.resolve(__dirname, '..');

// where all the (source) assets reside
const assets_source_folder = path.resolve(root_folder, 'assets');

let configuration = {
    // resolve all relative paths from the project root folder
    context: root_folder,

    // https://webpack.github.io/docs/multiple-entry-points.html
    entry: {
        main: '../../code/client/application.entry.ts'
    },

    output: {
        // filesystem path for static files
        path: path.resolve(root_folder, 'build/assets'),

        // network path for static files
        publicPath: '/assets/',

        // file name pattern for entry scripts
        filename: '[name].[hash].js',

        // file name pattern for chunk scripts
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
                loader: 'awesome-typescript-loader',
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
                    'url-loader?limit=10000' // Any png-image or woff-font below or equal to 10K will be converted to inline base64 instead
                ]
            }
        ]
    },

    plugins: []
};

configuration.plugins.push(
    new webpack.LoaderOptionsPlugin({
        test: /\.scss$/,
        options: {
            // A temporary workaround for `scss-loader`
            // https://github.com/jtangelder/sass-loader/issues/298
            output: {
                path: configuration.output.path,
            },

            postcss: [autoprefixer({ browsers: 'last 2 version' })],

            // A temporary workaround for `css-loader`.
            // Can also supply `query.context` parameter.
            context: configuration.context,
        }
    })
);

export default configuration;
