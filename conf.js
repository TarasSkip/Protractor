// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  params: {
          baseUrl: 'https://hotline.ua/',
          email: 'vasyapupkin446@gmail.com',
          password: 'vasyapupkin'        
  },
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: () => {
    console.log('test_started')
  }
}