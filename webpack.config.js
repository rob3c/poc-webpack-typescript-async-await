var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var nodeModules = {};
var ignoredNodeModulesFolders = [ '.bin' ];

fs.readdirSync('node_modules').
    filter(mod => ignoredNodeModulesFolders.indexOf(mod) === -1).
    forEach(mod => nodeModules[mod] = `commonjs ${mod}`);

var outputPath = 'bin/async-await-hello-world';
var sourceMapTemplate = '../../[resource-path]';
var config = {
    entry: './apps/async-await-hello-world.ts',
    target: 'node',
    output: {
        devtoolModuleFilenameTemplate: sourceMapTemplate,
        devtoolFallbackModuleFilenameTemplate: sourceMapTemplate,
        path: path.join(__dirname, outputPath),
        publicPath: '',
        filename: 'app.bundle.js'
    },
    externals: nodeModules,
    plugins: [
        // fix stack traces when using source maps
        new webpack.BannerPlugin("require('source-map-support').install();",
            {
                raw: true, // don't wrap in a comment
                entryOnly: false // write banner in every file
            })
    ],
    resolve: {
        alias: {},
        extensions: ['', '.ts', '.tsx', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'babel?plugins[]=transform-es2015-modules-commonjs!ts'
            },
        ]
    }
};


module.exports = config;
