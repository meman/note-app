var webpackConf = require('./webpack.config.js');
delete webpackConf.entry;

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    // this is the entry file for all our tests.
    files: ['./test/unit/index.js'],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      './test/unit/index.js': ['webpack']
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true
    },
    autoWatch: true
  });
};
