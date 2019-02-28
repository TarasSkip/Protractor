let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");
let RegistrationPage = require("../pages/registration.page");

describe('Protractor Demo App', () => {
    it('Registration test', async () => {
        let rand = Math.round(Math.random() * 100000);
        let email = `vasyapupkin446+${rand}@gmail.com`;
        let password = 'vasyapupkin';
        let nickname = `vasyapupkin${rand}`;
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await MainPage.navigateToLogin();
        await LoginPage.navigateToRegistration();
        await RegistrationPage.waitForRegisterToBeClickable();
        await RegistrationPage.registration(email, password, nickname);
        expect(await RegistrationPage.getRegistrationTextElement().getText()).toEqual('А пока вы ждете письмо, заполните свой профиль!'); // Check "Successful login" text on the next page
    });
});