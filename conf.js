// conf.js
exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/spec.js'],
  params: {
          baseUrl: 'https://hotline.ua/',
          email: 'vasyapupkin446@gmail.com',
          password: 'vasyapupkin'        
  },
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    console.log('test_started')
  }
}