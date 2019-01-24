let MainPage = require("../pages/main.page");

describe('Protractor Demo App', function() {
  it('login process', async () => {
   
    let email = 'vasyapupkin446@gmail.com'
    let password = 'vasyapupkin'

    await MainPage.open();
    await MainPage.navigateToLogin();
    
    await MainPage.enterLogin(email);
    await MainPage.enterPassword(password);
    
    await MainPage.clickLoginButton();

    expect(await MainPage.getAccountNameElement().getText()).
      toEqual('vasyapupkin446'); 

  });
});
