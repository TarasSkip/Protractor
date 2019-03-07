let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");
let RegistrationPage = require("../pages/registration.page");

describe('Protractor Demo App', () => {
    it('Registration test', async () => {
        let rand = Math.round(Math.random() * 10000000);
        let newemail = `vasyapupkin446+${rand}@gmail.com`;
        //  let newpassword = 'vasyapupkin';
        let badpassword = '1';
        let newnickname = `vasyapupkin${rand}`;
        let bademail = `qwe@`;
        let usedemail = `vasyapupkin446@gmail.com`;
        //  Proceed to registration page
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await MainPage.navigateToLogin();
        await LoginPage.navigateToRegistration();
        await RegistrationPage.waitForRegisterToBeClickable();
        //  Registration attempts
        await RegistrationPage.clickRegistrationButton();
        expect(await RegistrationPage.registrationFormEmailErrorTextElement().getText()).toEqual('Заполните это поле');
        await RegistrationPage.registration(bademail);
        expect(await RegistrationPage.registrationFormEmailErrorTextElement().getText()).toEqual('Поле не соответствует формату');
        await RegistrationPage.registration(usedemail);
        expect(await RegistrationPage.registrationFormEmailErrorTextElement().getText()).toEqual('Извините, но такой e-mail уже занят');
        await RegistrationPage.registration(newemail, badpassword, newnickname);
        expect(await RegistrationPage.registrationFormPasswordErrorTextElement().getText()).toEqual('Длина поля не может быть меньше 4 и больше 16 символов');
    });
});