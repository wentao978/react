'use strict';

let path = require('path');
let base = require('./base');
let additionalPaths = [];

module.exports = {
	devtool: 'eval',
	output: {
		path: path.join(__dirname, '/../dist/'),
		filename: '[name].js',
		publicPath: base.publicPath
	},
	devServer: {
		contentBase: './',
		publicPath: base.publicPath,
		historyApiFallback: true,
		hot: true,
		port: base.defaultPort,
		noInfo: false,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			actions: `${base.srcPath}/actions/`,
			components: `${base.srcPath}/components/`,
			sources: `${base.srcPath}/sources/`,
			stores: `${base.srcPath}/stores/`,
			styles: `${base.srcPath}/styles/`,
		}
	},
	module: {
	    loaders: [
	      	{
				test: /\.css$/,
	        	loader: 'style-loader!css-loader'
	      	},
	      	{
				test: /\.sass/,
	        	loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
	      	},
	      	{
				test: /\.scss/,
	        	loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
	      	},
	      	{
				test: /\.less/,
	        	loader: 'style-loader!css-loader!less-loader'
	      	},
	      	{
				test: /\.styl/,
	        	loader: 'style-loader!css-loader!stylus-loader'
	      	},
	      	{
				test: /\.(png|jpg|gif|woff|woff2)$/,
	        	loader: 'url-loader?limit=8192'
	      	},
	      	{
				test: /\.(mp4|ogg|svg)$/,
	        	loader: 'file-loader'
	     	}
	    ]
	}
}