let MainPage = require("../pages/main.page");

describe('Protractor Demo App', function() {
  it('Login test', async () => {
   
    let email = 'vasyapupkin446@gmail.com'
    let password = 'vasyapupkin'

    await allure.createStep('Step 1 - open home page', async () => {
      await MainPage.open();
    })();
  
    await allure.createStep('Step 2 - open login page', async () => {
       await MainPage.navigateToLogin();
    })();
    
    await allure.createStep('Step 3 - proceed with login', async () => {
      await MainPage.enterLogin(email);
      await MainPage.enterPassword(password);
      await MainPage.clickLoginButton();
    })();
    
    await allure.createStep('Step 4 - check login success', async () => {
    expect(await MainPage.getAccountNameElement().getText()).
      toEqual('vasyapupkin446'); 
    })();
  });
});
