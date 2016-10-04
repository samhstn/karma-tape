module.exports = function (config) {
  config.set({
    customLaunchers: {  
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    plugins: [
      'karma-tap',
      'karma-chrome-launcher',
      'karma-browserify',
      'karma-tap-pretty-reporter',
      'karma-html2js-preprocessor',
      'karma-fixture',
      'karma-coverage'
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
    browsers: process.env.TRAVIS ? ['Chrome_travis_ci'] : ['Chrome'],
    singleRun: true
  });
};
