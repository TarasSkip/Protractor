//spec.js

describe('Protractor Demo App', function() {
  it('should add one and two', function() {
   
    browser.waitForAngularEnabled(false);
    browser.get(browser.params.baseUrl);
   
    element(by.xpath('//*[@id="page-index"]/header/div[1]/div/div/div[2]/div[4]/div/a')).click();
    
    element(by.name('login')).sendKeys(browser.params.email);
    element(by.name('password')).sendKeys(browser.params.password);
    
    element(by.xpath('/html/body/div[1]/div[1]/div/div[1]/form/div/div/div[3]/input')).click();

    expect(element(by.xpath('//*[@id="page-index"]/header/div[1]/div/div/div[2]/div[4]/div[1]/span[2]')).getText()).
      toEqual('vasyapupkin446'); 

  });
});
