'use strict';

let path = require('path');
let base = require('./base');
let defaultConfig = require('./defaults');

module.exports = {
	devtool: 'eval',
	module: {
		loaders: [
			{
			  	test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
			  	loader: 'null-loader'
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				include: [
					path.join(__dirname, '/../src'), 
					path.join(__dirname, '/../test')
			  	]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
}