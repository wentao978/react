'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');
const base = require('./cfg/base');

let isInitialCompilation = true;

const compiler = webpack(config);

new WebpackDevServer(compiler, config.devServer)
	.listen(base.defaultPort, 'localhost', (err) => {
		if (err) {
			console.log(err);
		}
		console.log('Listening at localhost:' + base.defaultPort);
	})

compiler.plugin('done', () => {
	if(isInitialCompilation) {
		setTimeout(() => {
			console.log('\n✓ The bundle is now ready for serving!\n');
			console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m',  'http://localhost:' + base.defaultPort + '/webpack-dev-server/');
			console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + base.defaultPort + '/\n');
			console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
		}, 350);
	}
	isInitialCompilation = false;
})