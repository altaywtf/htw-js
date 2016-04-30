 // webpack.config.js
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devtool: 'cheap-eval-source-map',
  
  devServer: {
    contentBase: './dist',
    hot: true
  }

  // Entry Files
  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/dev-server',
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

