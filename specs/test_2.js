let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");
let RegistrationPage = require("../pages/registration.page");

describe('Protractor Demo App', () => {
    it('Registration test', async () => {
        let rand = Math.round(Math.random() * 10000000);
        let newEmail = `vasyapupkin446+${rand}@gmail.com`;
        //  let newPassword = 'vasyapupkin';
        let badPassword = '1';
        let newNickname = `vasyapupkin${rand}`;
        let badEmail = `qwe@`;
        let usedEmail = `vasyapupkin446@gmail.com`;
        //  Proceed to registration page
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await MainPage.navigateToLogin();
        await LoginPage.navigateToRegistration();
        await RegistrationPage.waitForRegisterToBeClickable();
        //  Registration attempts
        await RegistrationPage.clickRegistrationButton();
        expect(await RegistrationPage.registrationFormErrorTextElement().getText()).toEqual('Заполните это поле');
        await RegistrationPage.registration(badEmail);
        expect(await RegistrationPage.registrationFormErrorTextElement().getText()).toEqual('Поле не соответствует формату');
        await RegistrationPage.registration(usedEmail);
        expect(await RegistrationPage.registrationFormErrorTextElement().getText()).toEqual('Извините, но такой e-mail уже занят');
        await RegistrationPage.registration(newEmail, badPassword, newNickname);
        expect(await RegistrationPage.registrationFormErrorTextElement().getText()).toEqual('Длина поля не может быть меньше 4 и больше 16 символов');
    });
});