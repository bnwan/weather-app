'use strict';

var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");

var ENV = process.env.NODE_ENV || 'development';
var isProduction = ENV === 'production' || false;

var config = {
  entry: './src/app.js',
  context: __dirname,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: isProduction ? [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: isProduction      
    }),    
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })    
  ] : [],
  devtool: isProduction ? '' : 'source-map'  
}

module.exports = config;