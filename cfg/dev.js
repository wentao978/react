'use strict';

let path = require('path');
let webpack = require('webpack');
let defaultConfig = require('./defaults');
let base = require('./base');

let config = Object.assign({}, defaultConfig, {
	entry: {
		index: [
			'webpack-dev-server/client?http://127.0.0.1:' + base.defaultPort,
			'webpack/hot/only-dev-server',
			'./src/index.js'
    	],
    	vendor: ['react', 'react-dom']
	},
	cache: true,
	devtool: 'eval-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// new webpack.NoEmitErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js'
		})
	]
})

config.module.loaders.push({
	test: /\.(js|jsx)$/,
	loader: 'react-hot-loader!babel-loader',
	exclude: /node_modules/
});


module.exports = config;