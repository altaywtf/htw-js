 // webpack.config.js
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devtool: 'source-map',

  // Entry Files
  entry: [
    './src/index'
  ],

  // Output, bundle file
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // Internal Webpack Plugins
  plugins: [
    new webpack.HotModuleReplacamentPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  // Module -- For Loaders and Etc
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      { 
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  } 

}

module.exports = config;  

