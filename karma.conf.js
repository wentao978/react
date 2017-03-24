var webpackCfg = require('./webpack.config');
var contants = require('./cfg/contants');

process.env.NODE_ENV = 'test';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './test/loaderTests.js'
    ],
    exclude: [
    ],
    preprocessors: {
        './test/loaderTests.js': ['webpack']
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack: webpackCfg,
    webpackServer: {
        noInfo: true
    },
    coverageReporter: {
        dir: 'coverage/',
        reporters: [
            { type: 'html' },
            { type: 'text' }
        ]
    }
  })
}
