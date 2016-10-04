module.exports = function (config) {
  config.set({
    plugins: [
      require('karma-tap'),
      require('karma-chrome-launcher'),
      require('karma-browserify'),
      require('karma-tap-pretty-reporter'),
      require('karma-html2js-preprocessor'),
      require('karma-fixture'),
      require('karma-coverage')
    ],
    basePath: '',
    frameworks: [
      'browserify',
      'tap',
      'fixture'
    ],
    reporters: [
      'tap-pretty',
      'coverage'
    ],
    tapReporter: {
      prettifier: 'tap-spec'
    },
    preprocessors: {
      'test/**/*.js': ['browserify', 'coverage'],
      'public/*.html': ['html2js']
    },
    files: [
      'test/**/*.js',
      'public/*.html'
    ],
    port: 9876,
    browsers: ['Chrome'],
    singleRun: true
  });
};
