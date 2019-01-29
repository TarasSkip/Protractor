let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");

describe('Protractor Demo App', function() {
  it('Login test', async () => {
   
    let email = 'vasyapupkin446@gmail.com'
    let password = 'vasyapupkin'

    await MainPage.open();  
    await MainPage.navigateToLogin();
    await LoginPage.login(email, password);
    
    expect(await MainPage.getAccountNameElement().getText()).toEqual('vasyapupkin446'); 
  });
});
