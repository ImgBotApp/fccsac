// require plugins
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
  ],
});
