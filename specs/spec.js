let MainPage = require("../pages/main.page");

describe('Protractor Demo App', function() {
  it('should add one and two', async () => {
   
    await MainPage.open();
    await MainPage.navigateToLogin();
    
    await element(by.name('login')).sendKeys(browser.params.email);
    await element(by.name('password')).sendKeys(browser.params.password);
    
    await element(by.css('input[type="submit"]')).click();

    expect(await element(by.xpath('//*[@id="page-index"]/header/div[1]/div/div/div[2]/div[4]/div[1]/span[2]')).getText()).
      toEqual('vasyapupkin446'); 

  });
});
