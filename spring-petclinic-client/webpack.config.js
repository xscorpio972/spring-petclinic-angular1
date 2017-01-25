const path = require('path');
const webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var loaders = require("./loaders");
var preloaders = require("./preloaders");

module.exports = {
  debug: true,
  entry: {
	  app: './src/scripts/app.module.ts',
	  vendor: [
	           'angular',
	           'angular-ui-router'
	           ]
  },
  output: {
    path: path.join(__dirname, 'target/dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
      root: __dirname,
      extensions: ['', '.ts', '.js', '.json']
  },
  resolveLoader: {
      modulesDirectories: ["node_modules"]
  },
  plugins: [
	new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js") ,
	new CopyWebpackPlugin([ { from: './src/images', to: 'images' } ])
  ],
  module: {
	preloaders: preloaders,
    loaders: loaders 
  },
  tslint: {
      emitErrors: true,
      failOnHint: true
  }
};
