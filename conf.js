// conf.js
let AllureReporter = require('jasmine-allure-reporter');

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/test_6.js'],

  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: async () => {
    await browser.restart();
    await browser.manage().setTimeouts({ implicit: 5000 });
    browser.waitForAngularEnabled(false);

    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
 
    jasmine.getEnv().afterEach(async function () {
         let screen = await browser.takeScreenshot();
         await allure.createAttachment("Test screenshot", () => {
            return Buffer.from(screen, "base64")
      }, "image/png")();     
    });
  } 
}