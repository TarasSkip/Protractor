let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");
let RegistrationPage = require("../pages/registration.page");

describe('Protractor Demo App', () => {
    it('Registration test', async () => {
        let rand = Math.round(Math.random() * 10000000);
        let newemail = `vasyapupkin446+${rand}@gmail.com`;
        let usedemail = `vasyapupkin446@gmail.com`;
        //  let bademail = `qwe@`;
        //  let newpassword = 'vasyapupkin';
        //  let badpassword = '1';
        let incorrectpassword = '1234567';
        //  let newnickname = `vasyapupkin${rand}`;
        //  Proceed to registration page
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await MainPage.navigateToLogin();
        await LoginPage.waitForLoginToBeClickable();
        await LoginPage.login(usedemail);
        expect(await LoginPage.getLoginFormPasswordErrorTextElement().getText()).toEqual('Извините, вы ввели неправильный пароль. Если вы забыли свой пароль, вы можете его изменить');
        await LoginPage.login(usedemail, incorrectpassword);
        expect(await LoginPage.getLoginFormPasswordErrorTextElement().getText()).toEqual('Извините, вы ввели неправильный пароль. Если вы забыли свой пароль, вы можете его изменить');
        await LoginPage.login(newemail, incorrectpassword);
        expect(await LoginPage.getLoginFormBEErrorTextElement().getText()).toEqual('Извините, пользователь с указанным e-mail не зарегистрирован, пожалуйста, убедитесь в правильности написания адреса');
    });
});