// require npm modules
const glob = require('glob-all');
const path = require('path');

// require plugins
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

// require common webpack file
const common = require('./webpack.common');

// require merging library
const merge = require('webpack-merge');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new PurifyCSSPlugin({
      minimize: true,
      paths: glob.sync(path.resolve(__dirname, '../assets/*.html')),
    }),
  ],
});
