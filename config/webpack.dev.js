// require Node API
const path = require('path');

// require plugins
const webpack = require('webpack');

// require common webpack file
const common = require('./webpack.common');

// require merging library
const merge = require('webpack-merge');

module.exports = merge(common, {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    open: true,
    hot: true,
  },
});
