// require plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // use to extract the css out of webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // clean dist folder
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // use to remove javascript code that aren't being used - tree-shaking

const webpack = require('webpack'); // to access built-in webpack plugins

// require node modules
const path = require('path');

// environments
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

// this is the webpack configuration
const config = {
  entry: './src/index.js', // tell where webpack to start
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader']
      },
      {
        test: /\.html$/,
        use: [
          'file-loader'],
        exclude: resolve.path(__dirname, 'src/index.html')
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('stylesheet.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: './src/index.html',
      title: 'freeCodeCamp Sacramento'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin()
  ]
}

module.exports = config;