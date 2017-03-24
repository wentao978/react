'use strict';
let path = require('path');
let webpack = require('webpack');
let base = require('./base');
let defaultConfig = require('./defaults');

let config = Object.assign({}, defaultConfig, {
	entry: {
		index: [path.join(__dirname, '../src/index')],
		vendor: ['react', 'react-dom']
	},
	cache: false,
	devtool: 'sourcemap',
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		// 压缩
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js'
		})
	]
});

config.module.loaders.push({
	test: /\.(js|jsx)$/,
	loader: 'react-hot-loader!babel-loader',
	exclude: /node_modules/
});

module.exports = config;