let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");
let RegistrationPage = require("../pages/registration.page");

describe('Hotline Protractor Test - Registration suite', () => {
    it('Registration test - TC #4. Unsuccessful login', async () => {
        let rand = Math.round(Math.random() * 10000000);
        let newEmail = `vasyapupkin446+${rand}@gmail.com`;
        let usedEmail = `vasyapupkin446@gmail.com`;
        //  let bademail = `qwe@`;
        //  let newpassword = 'vasyapupkin';
        //  let badpassword = '1';
        let incorrectPassword = '1234567';
        //  let newnickname = `vasyapupkin${rand}`;
        //  Proceed to registration page
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await MainPage.navigateToLogin();
        await LoginPage.waitForLoginToBeClickable();
        await LoginPage.login(usedEmail);
        expect(await LoginPage.getLoginFormErrorTextElement().getText()).toEqual('Извините, вы ввели неправильный пароль. Если вы забыли свой пароль, вы можете его изменить');
        await LoginPage.login(usedEmail, incorrectPassword);
        expect(await LoginPage.getLoginFormErrorTextElement().getText()).toEqual('Извините, вы ввели неправильный пароль. Если вы забыли свой пароль, вы можете его изменить');
        await LoginPage.login(newEmail, incorrectPassword);
        expect(await LoginPage.getLoginFormBEErrorTextElement().getText()).toEqual('Извините, пользователь с указанным e-mail не зарегистрирован, пожалуйста, убедитесь в правильности написания адреса');
    });
});