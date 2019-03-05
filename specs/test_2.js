let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");
let RegistrationPage = require("../pages/registration.page");

describe('Protractor Demo App', () => {
    it('Registration test', async () => {
        let rand = Math.round(Math.random() * 10000000);
        let email = `vasyapupkin446+${rand}@gmail.com`;
        //  let password = 'vasyapupkin';
        let badpassword = '1';
        let nickname = `vasyapupkin${rand}`;
        let bademail = `qwe@`;
        let usedemail = `vasyapupkin446@gmail.com`;
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await MainPage.navigateToLogin();
        await LoginPage.navigateToRegistration();
        await RegistrationPage.waitForRegisterToBeClickable();
        await RegistrationPage.clickRegistrationButton();
        expect(await RegistrationPage.registrationFormEmailErrorTextElement().getText()).toEqual('Заполните это поле');
        await RegistrationPage.registrationWithBadEmail(bademail);
        expect(await RegistrationPage.registrationFormEmailErrorTextElement().getText()).toEqual('Поле не соответствует формату');
        await RegistrationPage.clearRegistrationFormEmailElement();
        await RegistrationPage.registrationWithUsedEmail(usedemail);
        expect(await RegistrationPage.registrationFormEmailErrorTextElement().getText()).toEqual('Извините, но такой e-mail уже занят');
        await RegistrationPage.clearRegistrationFormEmailElement();
        await RegistrationPage.registrationWithIncorrectPassword(email, nickname, badpassword);
        expect(await RegistrationPage.registrationFormPasswordErrorTextElement().getText()).toEqual('Длина поля не может быть меньше 4 и больше 16 символов');
    });
});