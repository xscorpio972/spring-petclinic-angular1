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
	           'angular-ui-router',
	           'jquery',
	           'bootstrap'
	           ]
  },
  output: {
    path: path.join(__dirname, 'target/dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
      root: __dirname,
      extensions: ['', '.ts', '.js', '.json'],
      alias: {
    	  jquery: "jquery/jquery.js"
      }
  },
  resolveLoader: {
      modulesDirectories: ["node_modules"]
  },
  plugins: [
	new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js") ,
	new CopyWebpackPlugin([ { from: './src/images', to: 'images' } ])
	,
	new webpack.ProvidePlugin({
		  jQuery: 'jquery',
	      $: 'jquery',
	      jquery: 'jquery'
	    })
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
