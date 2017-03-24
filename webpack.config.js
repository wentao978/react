'use strict';

const path = require('path');
// 解析参数
const args = require('minimist')(process.argv.slice(2));

const allowedEnvs = ['dev', 'dist', 'test'];
let env = args.env ? args.env : 'dev';
process.env.REACT_WEBPACK_ENV = env;

function buildConfig(wantedEnv) {
	let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
	let validEnv = isValid ? wantedEnv : 'dev';
	let config = require(path.join(__dirname, 'cfg/' + validEnv));
	return config;
}

module.exports = buildConfig(env);