let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");

describe('Protractor Demo App', () => {
    it('Login test', async () => {
        let email = 'vasyapupkin446@gmail.com';
        let password = 'vasyapupkin';
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await MainPage.navigateToLogin();
        await LoginPage.waitForLoginToBeClickable();
        await LoginPage.login(email, password);
        expect(await MainPage.getAccountNameElement().getText()).toEqual('vasyapupkin446');
    });
});
