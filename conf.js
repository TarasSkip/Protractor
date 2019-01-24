// conf.js
exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/spec.js'],

  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    console.log('test_started')
  }
}